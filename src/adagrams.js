const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letters = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'] 
    
    let lettersCopy = letters.slice();
    let hand = [];

    for (let i = 0; i < 10; i ++) {
      let index = Math.floor(Math.random() * lettersCopy.length)
      let letter = lettersCopy[index];
      hand.push(letter);
      lettersCopy.splice(index, 1);
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > 10) {
      return false;
    }

    let inputIndex = 0

    while (inputIndex < input.length) {
      let letter = input[inputIndex]
      if (lettersInHand.includes(letter)) {
        let handIndex =  lettersInHand.indexOf(letter);
        lettersInHand.splice(handIndex, 1);
        inputIndex ++;
      } else {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {
    const capWord = word.toUpperCase();
    const points = {
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
    }

    let score = 0
    
    if (capWord.length >= 7) {
      score += 8;
    }

    for (let i = 0; i < capWord.length; i ++) {
      let letter = capWord[i];
      score += points[letter];
    }

    return score;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
