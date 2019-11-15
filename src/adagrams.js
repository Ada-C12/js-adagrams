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
    let currentLetters = lettersInHand;
    const string = input.toUpperCase();

    for (let i = 0; i < string.length; i++) {
      // returns first matching index number
      let index = currentLetters.indexOf(string[i]);

      if (index !== -1) {
        currentLetters.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    const string = word.toUpperCase();
    let score = (string.length >= 7) ? 8 : 0;
    
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N': 
      case 'R':
      case 'S':
      case 'T':
        score ++;
        break;
      case 'D':
      case 'G':
        score += 2;
        break;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        score += 3;
        break;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        score += 4;
        break;
      case 'K':
        score += 5;
        break;
      case 'J':
      case 'X':
        score += 8;
        break;
      case 'Q':
      case 'Z':
        score += 10
        break;
      }
    }
    return score
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
