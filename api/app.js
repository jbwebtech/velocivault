require("dotenv").config();
const express = require("express");

const PassphraseFactory = require("./passphrases/factory");
const WordRepository = require("./words/repository");

const PORT = process.env.PORT || 3000;
const app = express();
const library = new WordRepository().getLibrary();
const passphraseFactory = new PassphraseFactory(library);

app.get("/", (req, res) => {
  res.status(501).send("API service not implemented at this URL");
});

app.get("/api/v1/words", (req, res) => {
  res.json(library);
});

app.get("/api/v1/passphrases", (req, res) => {
  res.json(passphraseFactory.createPassphrase());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
