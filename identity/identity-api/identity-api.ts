import 'dotenv/config';
import { Application, Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';

import UserRepository from './users/repository';
import User from './model/user';

const identity: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3006;
const userRepository: UserRepository = new UserRepository();

identity.get("/", (req: Request, res: Response): void => {
  res.status(501).send("Identity API service not implemented at this URL");
});

identity.get("/api/v1/users", (req: Request, res: Response<User[]>): void => {
  res.json(userRepository.getAll());
});

identity.get("/api/v1/users/:id", (req: Request, res: Response<User>) => {
  const user: User = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

identity.post("/api/v1/users", (req: Request, res: Response<User>) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Missing user information");
  }
  const newUser: User = userRepository.create(name, email, password);
  res.status(201).json(newUser);
});

identity.put("/api/v1/users/:id",(req: Request<User>, res: Response<User>): void => {
    const user: User = userRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const { name, email, password } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    res.json(userRepository.update(user));
  }
);

identity.delete("/api/v1/users/:id", (req: Request<{ id: string }, {}, void>, res: Response<void>) => {
  const user: User = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  userRepository.delete(user.id);
  res.status(204).send();
});

identity.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
