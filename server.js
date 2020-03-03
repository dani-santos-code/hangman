"use strict";

const express = require("express");
const morgan = require("morgan");
const { idValidation } = require("./middleware/idValidation");
const { handleGuess, handleCountById } = require("./controllers");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// endpoints
app.get("/", (req, res) => {
  res.redirect("/hangman");
});
app.use("/api/v1/hangman/:wordId", idValidation);
app.get("/api/v1/hangman/:wordId", handleCountById);
app.get("/api/v1/hangman/guess/:wordId/:letter", handleGuess);

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}. http://www.localhost:${PORT}`)
);
