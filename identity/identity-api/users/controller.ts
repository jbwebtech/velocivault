import { Request, Response } from 'express';
import UserRepository from './repository';
import User from '../model/user';

export default class UserController {
    constructor(private userRepository: UserRepository) { }

    getAllUsers(req: Request, res: Response<User[]>): void {
        res.json(this.userRepository.getAll());
    }

    getUserById(req: Request, res: Response<User>): void {
        const user: User = this.userRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    }

    createUser(req: Request, res: Response<User>): void {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send("Missing user information");
        }
        const newUser: User = this.userRepository.create(name, email, password);
        res.status(201).json(newUser);
    }

    updateUser(req: Request, res: Response<User>): void {
        const user: User = this.userRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const { name, email, password } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        res.json(this.userRepository.update(user));
    }

    deleteUser(req: Request, res: Response<void>): void {
        const user: User = this.userRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        this.userRepository.delete(user.id);
        res.status(204).send();
    }
}
