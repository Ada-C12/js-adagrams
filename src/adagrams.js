let letterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

const Adagrams = {
  drawLetters() {
    shuffle(letterPool);
    return letterPool.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    let lettersObject = {};
    let outcome = true;

    // Put lettersIn Hand into a hash-like object
    lettersInHand.forEach((letter) => {
      if (lettersObject[letter] === undefined) {
        lettersObject[letter] = 1;
      } else {
        lettersObject[letter] += 1;
      }
    });

    // Put input into an array and compare each element to hash-like object
    input.split('').forEach((item) => {
      if (lettersObject.hasOwnProperty(item) && lettersObject[item] > 0) {
        lettersObject[item] -= 1;
      } else {
        outcome = false;
      }
    });
    return outcome;
  },

  scoreWord(word) {
    word = word.toUpperCase();
    const scoreTable = {
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
      Z: 10
    };
    
    let score = 0;
    word.split('').forEach((letter) => {
      score += scoreTable[letter];
    });

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {
    // instantiate a topWord object w/word and score
    const topWord = {
      word: '',
      score: 0,
    };

    // For each word in array, calculate score and compare to topWord.score, replace if greater.
    words.forEach((word) => {
      let wordScore = this.scoreWord(word);
    
      // if word has higher score, replace topWord
      // if words are tied
      // if topword is less than 10 letters 
      //      if word has 10 letters, replace
      //      else, take smaller word
 
      if (wordScore > topWord.score) {
        topWord.score = wordScore;
        topWord.word = word;
      } else if ((wordScore === topWord.score) && topWord.word.length < 10) {
        if (word.length === 10) {
          topWord.word = word;
        } else if (word.length < topWord.word.length) {
          topWord.word = word;  
        }
      }
    });
    return topWord;
  }
};



// Do not remove this line or your tests will break!
export default Adagrams;
