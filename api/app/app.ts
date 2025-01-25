import 'dotenv/config';
import { Application, Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';

import PassphraseFactory from './passphrases/factory';
import WordRepository from './words/repository';
import UserRepository from './users/repository';
import Word from './model/word';
import Passphrase from './model/passphrase';
import User from './model/user';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const wordRepository: WordRepository = new WordRepository();
const passphraseFactory: PassphraseFactory = new PassphraseFactory(wordRepository.getLibrary());
const userRepository: UserRepository = new UserRepository();

app.get("/", (req: Request, res: Response): void => {
  res.status(501).send("API service not implemented at this URL");
});

app.get("/api/v1/words", (req: Request, res: Response<Word[]>): void => {
  res.json(wordRepository.getLibrary());
});

app.get("/api/v1/passphrases", (req: Request, res: Response<Passphrase>) => {
  res.json(passphraseFactory.createPassphrase());
});

app.get("/api/v1/users", (req: Request, res: Response<User[]>): void => {
  res.json(userRepository.getAll());
});

app.get("/api/v1/users/:id", (req: Request, res: Response<User>) => {
  const user: User = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

app.post("/api/v1/users", (req: Request, res: Response<User>) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Missing user information");
  }
  const newUser: User = userRepository.create(name, email, password);
  res.status(201).json(newUser);
});

app.put("/api/v1/users/:id",(req: Request<User>, res: Response<User>): void => {
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

app.delete("/api/v1/users/:id", (req: Request<{ id: string }, {}, void>, res: Response<void>) => {
  const user: User = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  userRepository.delete(user.id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

