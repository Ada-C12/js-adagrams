class Adagrams {
  static buildLetterPool() {
    const letterWeights = {
      "A": 9, "B": 2, "C": 2, "D": 4,
      "E": 12, "F": 2, "G": 3, "H": 2, 
      "I": 9, "J": 1, "K": 1, "L": 4,
      "M": 2, "N": 6, "O": 8, "P": 2,
      "Q": 1, "R": 6, "S": 4, "T": 6,
      "U": 4, "V": 2, "W": 2, "X": 1,
      "Y": 2, "Z": 1,
    }

    const letterPool = [];
    // for each key in letterWeights,
    // add that key's string to letterPool value number of times
    for (const letter in letterWeights) {
      let count = letterWeights[letter];
      while (count > 0) {
        letterPool.push(letter);
        count -= 1;
      }
    }

    return letterPool;
  }

  static drawLetters() {
    // create letter pool
    let letterPool = this.buildLetterPool();
    const countIndices = (letterPool.length - 1);

    // choose ten random letters from pool
    let hand = [];
    while (hand.length < 10) {
      // find a random pool index
      const randIndex = Math.floor(Math.random() * countIndices);
      const chosenLetter = letterPool[randIndex];
      // if it's not nil,
      // add it to the hand
      if (chosenLetter) {
        hand.push(chosenLetter);
      }
      // make the chosen letter null
      // so it can't get picked again
      letterPool[randIndex] = null;
    }
    return hand;
  }

  static usesAvailableLetters(input, lettersInHand) {
    // make a hash from lettersInHand for quick lookup
    let lettersInHandObj = {};
    for (const letter of lettersInHand) {
      if (!lettersInHandObj[letter]) {
        lettersInHandObj[letter] = 1;
      } else {
        lettersInHandObj[letter] += 1;
      }
    }

    let usesLetters = true;
    // loop through input characters
    for (const char of input) {
      // for every letter that matches a letter in hand
      // remove that letter from hand
      // (you don't need to actually delete the letter key,
      // as it will eventually reach 0 and then be deemed falsey
      // causing the code to go into the else)
      if (lettersInHandObj[char]) {
        lettersInHandObj[char] -= 1;
      } else {
        usesLetters = false
      }
    }
    return usesLetters
  }

  static scoreWord(word) {
    const scoreChart = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2,
      "B": 3, "C": 3, "M": 3, "P": 3,
      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
      "K": 5,
      "J": 8, "X": 8,
      "Q": 10, "Z": 10 
    }

    let wordScore = 0;
    for (const letter of word) {
      wordScore += scoreChart[letter.toUpperCase()];
    }

    // If the length of the word is 7, 8, 9, or 10, 
    // then the word gets an additional 8 points
    const wordLength = word.length;
    if (wordLength >= 7 && wordLength <= 10 ) {
      wordScore += 8;
    }

    return wordScore;
  }

  static highestScoreFrom(words) {
    let highestScoringWord = {
      "word": '',
      "score": 0,
    };

    // helper function
    const makeHighestWord = (word, score) => {
      highestScoringWord.word = word;
      highestScoringWord.score = score;
    }

    for (const word of words) {
      const score = this.scoreWord(word);

      if (score === highestScoringWord.score) {
        const highestLength = highestScoringWord.word.length;
        // if they are the same, there is a tie;
        // prefer the word with 10 or more letters
        // or prefer the word with the fewest letters
        if ((word.length >= 10) && (highestLength < 10)
        ||(word.length < highestLength) && (highestLength < 10)) {
          makeHighestWord(word, score);
        }
      } else if (score > highestScoringWord.score) {
        makeHighestWord(word, score);
      }
    }
    return highestScoringWord;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
