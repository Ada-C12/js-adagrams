// adagrams object
const Adagrams = {
  // drawLetters function inside adagrams object
  drawLetters() {
    // Implement this method for wave 1
    let allLetters = [];

    for (const letter in letterDist) {
      for (let i = 0; i < letterDist[letter]; i += 1) {
        allLetters.push(letter);
      }
    }

    allLetters = shuffle(allLetters);

    return allLetters.slice(0, 10);

  },
  usesAvailableLetters(input, lettersInHand) {
    // const lettersInHand = lettersInHand;
    // const input = input;
    let lettersInHandHash = {};

    lettersInHand.forEach( function(letter) {
      if (lettersInHandHash[letter]) {
        lettersInHandHash[letter] += 1;
      } else {
        lettersInHandHash[letter] = 1; 
      }
    });

    for (let i = 0; i < input.length; i += 1) {
      if (lettersInHandHash[input[i]] === undefined || lettersInHandHash[input[i]] < 1) { 
        return false;
      } else {
        lettersInHandHash[input[i]] -= 1;
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    word.split('').forEach( function(letter) {
      score += scoreChart[letter.toUpperCase()];
    });

    if (word.length > 6) {
      score += 8;
    }

    return score;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

// used the Fisher-Yates Algorithm
const shuffle = function(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const letterDist = {
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
  Z: 1
}

const scoreChart = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1, 
  N: 1, 
  R: 1, 
  S: 1, 
  T: 1,
  D: 2, 
  G: 2,
  B: 3, 
  C: 3, 
  M: 3, 
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5, 
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}
