## About the Project

This is a project done when I was attending the Full-Stack coding bootcamp at [Concordia University](https://concordiabootcamps.ca/courses/full-stack-immersive/)

## Running The Project

Run `yarn install` followed by `yarn dev`

## What has been implemented

- A dataset containing 20 words, including a hint to make it easier to guess the word. If the user clicks on the hint, they will lose 1 point

- Score, starting at 10. Each miss will have the user lose 1 point.

- Autofocus and form reset once user submits the letter

- If user wins, the name of the word correctly guessed is displayed as well as a winning message

- If user loses, a losing message is displayed

- Created 2 main endpoints that in a way that the word is never exposed to the frontend

- Added a middleware to validate the wordId input coming from the FE

- Added a favicon to the page

- Misses DIV to let the user know what guesses were misses

## Endpoints

#### Words

```javascript
GET
/api/v1/hangman/:wordId
```

Given a valid id, it returns an object with the word letterCount
as well as the hint. Valid IDs range from 120 to 140.

```javascript
{
  "letterCount": "5",
  "hint": "fruit"
}
```

If ID is incorrect or invalid, it returns the following:

```javascript
{
  error: "Please enter a valid ID";
}
```

**Attributes**

```
letterCount => _string_
hint => _string_
```

#### Guess Per Letter

```javascript
GET
/api/v1/hangman/guess/:wordId/:letter
```

Returns an object with the letterCount as well as the indexes
of an array which should be set to true:

```javascript
{
  "letterCount": 5,
  "trueIndexes": [
    1,
    2
  ]
}
```

With that, once the array in the client and the word in the
server have the same length and all values in the array are true, the word will have been guessed.

**Attributes**

```
letterCount => _integer_
trueIndexes => _list_
```

## Demo

**Winning flow**
<img src="https://github.com/dani-santos-code/hangman/blob/master/public/images/win.gif" height="50%" width="100%"/>

**Losing Flow**
<img src="https://github.com/dani-santos-code/hangman/blob/master/public/images/lose.gif" height="50%" width="100%"/>
