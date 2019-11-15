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

  scoreWord(word) {
    const scoreboard = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    }
    let score = 0;
    if (word.length >= 7) {
      score += 8;
    };
    word = word.toUpperCase().split('');
    word.forEach((letter) => {
      Object.values(scoreboard).forEach((pointValue) => {
        if (pointValue.includes(letter)) {
          const key = Object.keys(scoreboard).find(key => scoreboard[key] === pointValue);
          score += key;
        }
      })
    })
  }
}



// Do not remove this line or your tests will break!
export default Adagrams;
