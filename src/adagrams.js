class Adagrams {
  static generatePool() {
    const lettersCounts = {
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

    let output = [];
    for (let key in lettersCounts) {
      const value = lettersCounts[key];
      for (let i = 0; i < value; i++) {
        output.push(key);
      }
    }
    return output;
  }

  static getRandomIndices(numberOfLetters, maxIndex) {
    let indices = [];
    for (let i = 0; i < numberOfLetters; i++) {
      let index = Math.floor(Math.random() * Math.floor(maxIndex));
      while (indices.includes(index)) {
        index = Math.floor(Math.random() * Math.floor(maxIndex));
      }
      indices.push(index);
    }
    return indices;
  }

  static findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
    return -1;
  }

  static wordToScore(word) {
    const wordScore = {
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
    let score = 0;
    const size = word.length;
    for (let i = 0; i < size; i++) {
      score += wordScore[word[i].toUpperCase()];
    }
    return score;
  }

  static drawLetters() {
    const numberOfLetters = 10;
    const letterPool = Adagrams.generatePool();
    const totalCount = letterPool.length;
    const randomIndices = Adagrams.getRandomIndices(numberOfLetters, totalCount);

    let letters = [];
    for (let i = 0; i < numberOfLetters; i++) {
      letters.push(letterPool[randomIndices[i]]);
    }
    return letters;
  }

  static usesAvailableLetters(input, lettersInHand) {
    const inputLength = input.length;
    const handCount = lettersInHand.length;
    if (inputLength > handCount) {
      return false;
    } else {
      for (let i = 0; i < inputLength; i++) {
        const index = Adagrams.findIndex(lettersInHand, input[i]);
        if (index === -1) {
          return false;
        } else {
          lettersInHand.splice(index, 1);
        }
      }
    }
    return true;
  }

  static scoreWord(word) {
    const score = (word.length > 6) ? 8 : 0;
    return score + Adagrams.wordToScore(word);
  }

  static highestScoreFrom(words) {
    const length = words.length;
    let highestScore = 0;
    let bestWord = '';

    for (let i = 0; i < length; i++) {
      const currentWord = words[i];
      const currentScore = Adagrams.scoreWord(words[i]);

      if (currentScore > highestScore) {
        bestWord = currentWord;
        highestScore = currentScore;
      } else if ((currentScore === highestScore) &&
        (bestWord.length < 10) &&
        ((currentWord.length === 10) || (currentWord.length < bestWord.length))) {
        // in case of tie and bestWord length is not 10, 
        // replace bestWord with currentWord if currentWord length is 10 
        // or currentWord is shorter than bestWord
        bestWord = currentWord;
      }
    }

    return { "word": bestWord, "score": highestScore };
  }
}

export default Adagrams;
