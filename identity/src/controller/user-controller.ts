import { Request, Response } from "express";

import UserRepository from "../repository/user-repository";
import User from "../model/user";
import ApiError from "../model/api-error";

export default class UserController {
  constructor(private userRepository: UserRepository) {}

  getAll(req: Request, res: Response<User[]>): void {
    // TODO should the controller throw a 500 error if the datastore fails?
    res.json(this.userRepository.getAll());
  }

  findById(req: Request, res: Response<User | ApiError>): void {
    const user: User = this.#getByIdOrError(req.params.id, res);

    res.json(user);
  }

  create(req: Request, res: Response<User | ApiError>): void {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json(new ApiError(`Missing user information`, 400)).end();
    }

    const user: User = this.userRepository.create(name, email, password);
    res.status(201).json(user);
  }

  replaceById(req: Request, res: Response<User | ApiError>): void {
    const user: User = this.#getByIdOrError(req.params.id, res);

    const newUserInfo: User = req.body;
    if (!newUserInfo) {
      res
        .status(400)
        .json(new ApiError(`User must be provided in the request body`, 400))
        .end();
    }

    res.json(this.userRepository.update(user));
  }

  updateById(req: Request, res: Response<User | ApiError>): void {
    const user: User = this.#getByIdOrError(req.params.id, res);

    const { name, email, password } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    res.json(this.userRepository.update(user));
  }

  deleteById(req: Request, res: Response<void | ApiError>): void {
    const user: User = this.#getByIdOrError(req.params.id, res);

    this.userRepository.delete(user.id);
    res.status(204).send();
  }

  #getByIdOrError = (id: string, res: Response): User => {
    const user: User = this.userRepository.findById(id);
    if (!user) {
      const status = id === ":id" ? 400 : 404;
      const msg =
        status === 400 ? `User Id must be provided` : `User not found: ${id}`;
      res.status(status).json(new ApiError(msg, status)).end();
    }
    return user;
  };
}
