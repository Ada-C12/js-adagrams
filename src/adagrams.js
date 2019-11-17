const Adagrams = {
  drawLetters() {
    const letterPool = {
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
    const lettersArr = [];

    Object.keys(letterPool).forEach(key => {
      const quantity = letterPool[key];
      for (let i = 0; i <= quantity; i += 1) {
        lettersArr.push(key);
      }
    });

    const hand = this.getRandomLettersArr(lettersArr);
    return hand;
  },
  getRandomLettersArr(lettersArr) {
    let handIndexes = [];
    while (handIndexes.length < 10) {
      let randomIndex = Math.floor(Math.random() * lettersArr.length);
      if (handIndexes.indexOf(randomIndex) === -1) {
        handIndexes.push(randomIndex);
      }
    }

    let hand = [];
    handIndexes.forEach(index => hand.push(lettersArr[index]));
    return hand;
  },
  usesAvailableLetters(input, lettersInHand) {
    let handCopy = [];
    let inputArray = input.split("");
    handCopy.push(lettersInHand);
    lettersInHand.forEach(function(tile) {
      if (inputArray.includes(tile)) {
        let indexOfTile = handCopy.indexOf(tile);
        handCopy.splice(indexOfTile, 1);
        inputArray.splice(inputArray.indexOf(tile), 1);
      } else {
        return false;
      }
    });

    if (inputArray.length > 0) {
      return false;
    }

    return true;
  },
  scoreWord(word) {
    let score = 0;
    word
      .toUpperCase()
      .split("")
      .forEach(function(letter) {
        switch (letter) {
          case "A":
          case "E":
          case "I":
          case "O":
          case "U":
          case "L":
          case "N":
          case "R":
          case "S":
          case "T":
            score += 1;
            break;
          case "D":
          case "G":
            score += 2;
            break;
          case "B":
          case "C":
          case "M":
          case "P":
            score += 3;
            break;
          case "F":
          case "H":
          case "V":
          case "W":
          case "Y":
            score += 4;
            break;
          case "K":
            score += 5;
            break;
          case "J":
          case "X":
            score += 8;
            break;
          case "Q":
          case "Z":
            score += 10;
            break;
        }
      });
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }

    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
