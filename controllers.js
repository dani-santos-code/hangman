const { words } = require("./data/words");

const handleCountById = (req, res, next) => {
  const { wordId } = req.params;
  const isValidId = words.filter(word => word.id === wordId);
  if (isValidId.length > 0) {
    const [{ letterCount, hint }] = isValidId;
    res.status(200).json({ letterCount, hint });
  } else {
    res.status(404).json({ error: "Please, enter a valid ID" });
  }
};

const handleGuess = (req, res) => {
  const { wordId, letter } = req.params;
  const { word } = words.find(word => word.id === wordId);
  let guesses = [];
  const wordToArray = word.split("");
  const letterCount = word.length;
  wordToArray.forEach(char => {
    if (char === letter) {
      guesses.push(true);
    } else {
      guesses.push(false);
    }
  });
  const trueIndexes = guesses
    .map((guess, index) => {
      if (guess) {
        return index;
      }
    })
    .filter(val => val !== undefined);
  res.status(200).json({ letterCount, trueIndexes });
};

module.exports = {
  handleGuess,
  handleCountById
};
