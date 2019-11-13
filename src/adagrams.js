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
  usesAvailableLetters(input, lettersInHand) {
    let allValid = true;

    for (const charIndex in input) {
      if (lettersInHand.includes(input[charIndex])) {
        const handIndex = lettersInHand.indexOf(input[charIndex]);
        lettersInHand.splice(handIndex, 1);
      } else {
        allValid = false;
      }
    }
    
    return allValid;
  },
  scoreWord(word) {
    const letterPointValues = {
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
      Z: 10,
    }

    let pointCount = 0;
    for (const charIndex in word) {
      pointCount += letterPointValues[word[charIndex]];
    }

    return pointCount;
  }
};

//console.log(Adagrams.scoreWord("WHIMSY"))

// Do not remove this line or your tests will break!
export default Adagrams;
