const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let quantityByLetter = {
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
    };

    let letters = "";
    Object.keys(quantityByLetter).forEach(key => {
      let lettersQuant = key.repeat([quantityByLetter[key]]);
      letters += lettersQuant;
    });
    letters = letters.split("");

    let drawn = [];
    let i = 0;
    while (i < 10) {
      let randLetter = (letters[Math.floor(Math.random() * letters.length)]);
      drawn.push(randLetter)
      let index = letters.indexOf(randLetter)
      letters.splice(index, 1)
      i++;
    }

    return drawn;
  },

  usesAvailableLetters(input, lettersInHand) {
    let word = input.split("");
    let handLetters = {};
    lettersInHand.forEach(letter => {
      if (handLetters.hasOwnProperty(letter)) {
        handLetters[letter] += 1;
      } else {
        handLetters[letter] = 1;
      }
    });

    let wordLetters = {};
    word.forEach(letter => {
      if (wordLetters.hasOwnProperty(letter)) {
        wordLetters[letter] += 1;
      } else {
        wordLetters[letter] = 1;
      }
    });

    for (const letter of word) {
      if (handLetters[letter] === undefined || wordLetters[letter] > handLetters[letter]) {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
  const valuesLetter = {
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
    Z: 10
    }

    let finalWord = word.toUpperCase().split("");

    let score = 0;
    finalWord.forEach (letter => {
      score += valuesLetter[letter];
  });

  if (finalWord.length >= 7){
  score += 8}

  return score
  },
};

// Do not remove this line or your tests will break!
  export default Adagrams;

