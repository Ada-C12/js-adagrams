const Adagrams = {
  drawLetters() {
    const distribution = {
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

    // convert distribution hash to letters array with all available letters
    let letters = [];
    for (const letter in distribution) {
      for (let i = 0; i < distribution[letter]; i ++) {
        letters.push(letter);
      }
    }

    // push 10 random letters to drawnLetters array, removing letter from letters array each time to prevent repitition. This does not effect the distribution hash/the deck
    let drawnLetters = [];
    for (let i = 0; i < 10; i ++) {
      letters.sort(() => Math.random() - 0.5);
      drawnLetters.push(letters.pop());
    }
    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    let currentLettersInHand = lettersInHand;
    const string = input.toUpperCase();
    // console.log(lettersInHand)

    for (let i = 0; i < string.length; i++) {
      // returns first matching index number
      const index = currentLettersInHand.indexOf(string[i]);
      if (index !== -1) {
        currentLettersInHand = currentLettersInHand.replace(currentLettersInHand[index], '');
      } else {
        return false;
      }
    }
    return true;
  }
};

Adagrams.usesAvailableLetters('word', Adagrams.drawLetters())

// Do not remove this line or your tests will break!
// export default Adagrams;
