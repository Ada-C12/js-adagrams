class Adagrams {
  static letterPool () {
    return {
      'A': {numberOfTiles: 9, numberOfPoints: 1},
      'B': {numberOfTiles: 2, numberOfPoints: 3},
      'C': {numberOfTiles: 2, numberOfPoints: 3},
      'D': {numberOfTiles: 4, numberOfPoints: 2},
      'E': {numberOfTiles: 12, numberOfPoints: 1},
      'F': {numberOfTiles: 2, numberOfPoints: 4},
      'G': {numberOfTiles: 3, numberOfPoints: 2},
      'H': {numberOfTiles: 2, numberOfPoints: 4},
      'I': {numberOfTiles: 9, numberOfPoints: 1},
      'J': {numberOfTiles: 1, numberOfPoints: 8},
      'K': {numberOfTiles: 1, numberOfPoints: 5},
      'L': {numberOfTiles: 4, numberOfPoints: 1},
      'M': {numberOfTiles: 2, numberOfPoints: 3},
      'N': {numberOfTiles: 6, numberOfPoints: 1},
      'O': {numberOfTiles: 8, numberOfPoints: 1},
      'P': {numberOfTiles: 2, numberOfPoints: 3},
      'Q': {numberOfTiles: 1, numberOfPoints: 10},
      'R': {numberOfTiles: 6, numberOfPoints: 1},
      'S': {numberOfTiles: 4, numberOfPoints: 1},
      'T': {numberOfTiles: 6, numberOfPoints: 1},
      'U': {numberOfTiles: 4, numberOfPoints: 1},
      'V': {numberOfTiles: 2, numberOfPoints: 4},
      'W': {numberOfTiles: 2, numberOfPoints: 4},
      'X': {numberOfTiles: 1, numberOfPoints: 8},
      'Y': {numberOfTiles: 2, numberOfPoints: 4},
      'Z': {numberOfTiles: 1, numberOfPoints: 10},
    };
  }
  static drawLetters() {
    let pool = [];
    for ( let key in this.letterPool()) {
      let i = 0;
      while (i < this.letterPool()[key].numberOfTiles) {
        pool.push(key);
        i += 1
      }
    }
    let drawnLetters = [];
    let i = 0;
    while (i < 10) {
      let chosenLetterIndex = Math.floor(Math.random() * pool.length);
      drawnLetters.push(pool[chosenLetterIndex]);
      pool.splice(chosenLetterIndex, 1);
      i += 1;
    }
    return drawnLetters;
  }
  static usesAvailableLetters(input, lettersInHand) {
    let copyLettersInHand = [...lettersInHand];
    
    for(let i = 0; i < input.length; i++) {
      if (copyLettersInHand.includes(input[i])) {
        let x = copyLettersInHand.indexOf(input[i]);
        copyLettersInHand.splice(x, 1);
      } else {
        return false;
      }
    }
    return true;
  }
  static scoreWord(word) {
    let sum = 0;

    if (word.length >= 7) {
      sum += 8;
    }

    word = word.toUpperCase();
    for(let i = 0; i < word.length; i++) {
      sum += this.letterPool()[word[i]].numberOfPoints;
    }
    return sum;
  }
  static highestScoreFrom(words) {
    let max = 0;
    let result = {};
    const that = this;
    words.forEach( function(word) {
      let currentScore = that.scoreWord(word);
      if (currentScore > max) {
        max = currentScore;
        result['word'] = word;
        result['score'] = currentScore;
      } else if (currentScore === max) {
          if (word.length === 10 && result['word'].length !== 10) {
            max = currentScore;
            result['word'] = word;
            result['score'] = currentScore;
          } else if (word.length < result['word'].length && result['word'].length !== 10) {
              max = currentScore;
              result['word'] = word;
              result['score'] = currentScore;
          }
      }
    });
    return result;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
