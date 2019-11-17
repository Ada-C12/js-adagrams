import { objectExpression } from "@babel/types";

const makeLetters = function() {
  const alphabetObject = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };
  const alphabetArray = [];
  for (let key in alphabetObject) {
    let i = alphabetObject[key];
    while (i > 0) {
      alphabetArray.push(key);
      i -= 1;
    }
  }
return alphabetArray;
};

// adapted from Fisher-Yates Shuffle
const shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const scoreWord = function(word) {
  const scoreboard = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  let score = 0;
  if (word.length >= 7) {
    score += 8;
  };
  word = word.toUpperCase().split('');
  word.forEach((letter) => {
    if (Object.keys(scoreboard).includes(letter)) {
        score += scoreboard[letter];
    }
  })
return score;
};

const Adagrams = {
  makeLetters,
  shuffle,

  drawLetters() {
    let shuffled = this.shuffle(this.makeLetters());
    let lettersInHand = shuffled.slice(0, 10);
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    // put drawn letters into a hash-like object
    let handCollection = {}
    lettersInHand.forEach((letter) => {
      if (handCollection[letter] == null) {
        handCollection[letter] = 1;
      }
      else {
        handCollection[letter] += 1;
      }
    })
    // iterate through input word and check against hash-like object
    let letterIndex = 0;
    input = input.toUpperCase().split('')
    while (letterIndex < input.length) {
      if (Object.keys(handCollection).includes(input[letterIndex])) {
        handCollection[input[letterIndex]] -= 1;
        if (handCollection[input[letterIndex]] < 0) {
          return false;
        }
      }
      else if (!Object.keys(handCollection).includes(input[letterIndex])) {
        return false;
      }
    letterIndex += 1;
    }
    return true
  },

  scoreWord,

  winnerAmongWinners(wordsList) {
    if (wordsList.length === 1) {
    return wordsList;
    };
    if (Object.entries(wordsList).filter(([key, value]) => key.length === 10).length === 1) {
      return wordsList;
    }
  },

  highestScoreFrom(words) {
    let wordCollection = {};
    let maxPoints = 0;
    words.forEach((word) => {
      let score = this.scoreWord(word);
      wordCollection[word] = score;
      if (score > maxPoints) {
       maxPoints = score;
      };
    })
    const winningWords = Object.entries(wordCollection).filter(([key, value]) => value === maxPoints)
    this.winnerAmongWinners(winningWords);
  },
}





// Do not remove this line or your tests will break!
export default Adagrams;
