require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const PassphraseFactory = require("./passphrases/factory");
const WordRepository = require("./words/repository");
const UserRepository = require("./users/repository");

const app = express();
const PORT = process.env.PORT || 3000;
const wordRepository = new WordRepository();
const passphraseFactory = new PassphraseFactory(wordRepository.getLibrary());
const userRepository = new UserRepository();

app.get("/", (req, res) => {
  res.status(501).send("API service not implemented at this URL");
});

app.get("/api/v1/words", (req, res) => {
  res.json(wordRepository.getLibrary());
});

app.get("/api/v1/passphrases", (req, res) => {
  res.json(passphraseFactory.createPassphrase());
});

app.get("/api/v1/users", (req, res) => {
  res.json(userRepository.getAll());
});

app.get("/api/v1/users/:id", (req, res) => {
  const user = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

app.post("/api/v1/users", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Missing user information");
  }
  const newUser = userRepository.create(name, email, password);
  res.status(201).json(newUser);
});

app.put("/api/v1/users/:id", (req, res) => {
  const user = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  const { name, email, password } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;
  res.json(userRepository.update(user));
});

app.delete("/api/v1/users/:id", (req, res) => {
  const user = userRepository.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  userRepository.delete(user.id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
