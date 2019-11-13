const Adagrams = {
  drawLetters() {
    const letterPoolObject = {
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

    // Add letters to an array
    let letterPoolArray = [];

    for (let [letter, frequency] of Object.entries(letterPoolObject)) {
      let i = 0;
      while (i < frequency) {
        letterPoolArray.push(letter);
        i++;
      }
    }

    // Select random 10 letters for hand
    let lettersInHand = [];
    let j = 0;
    while (j < 10) {
      lettersInHand.push(letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)]);
      j ++;
    }

    return lettersInHand;
  },
  usesAvailableLetters(word, lettersInHand) {
    let allValid = true;

    for (const wordIndex in word) {
      if (lettersInHand.includes(word[wordIndex])) {
        const handIndex = lettersInHand.indexOf(word[wordIndex]);
        lettersInHand.splice(handIndex, 1);
      } else {
        allValid = false;
      }
    }
    
    return allValid;
  }
};

//Adagrams.usesAvailableLetters("DOG", ["A", "G", "O", "D"])

// Do not remove this line or your tests will break!
export default Adagrams;
