require("dotenv").config();
const express = require("express");

const PassphraseFactory = require("./passphrases/factory");
const WordRepository = require("./words/repository");
const UserRepository = require("./users/repository");

const PORT = process.env.PORT || 3000;
const app = express();
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
  res.json(userRepository.all());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
