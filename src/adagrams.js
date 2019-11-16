const Adagrams = {
  drawLetters() {
    const letterDistr = {
      'A': 9,
      'B': 2,
      'C': 2,
      'D': 4,
      'E': 12,
      'F': 2,
      'G': 3,
      'H': 2,
      'I': 9,
      'J': 1,
      'K': 1,
      'L': 4,
      'M': 2,
      'N': 6,
      'O': 8,
      'P': 2,
      'Q': 1,
      'R': 6,
      'S': 4,
      'T': 6,
      'U': 4,
      'V': 2,
      'W': 2,
      'X': 1,
      'Y': 2,
      'Z': 1,
    };

    const letterArr = [];

    // for-let-of source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    for (let [key, value] of Object.entries(letterDistr)) {
      while (value > 0) {
        letterArr.push(key);
        value -= 1;
      }
    }
    
    let hand = [];

    let i = 0;
    while (i < 10) {
      // << 0 is using bitshifting to basically round to the nearest integer
      // source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
      let letterIndex = letterArr.length * Math.random() << 0;

      hand.push(letterArr[letterIndex]);

      letterArr[letterIndex] = letterArr[letterArr.length - 1];
      letterArr.pop();
      
      i += 1;
    }

    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) {
      return false;
    }
      
    let handCount = {};
    let inputCount = {};

    lettersInHand.forEach ( (letter) => {
      if (typeof handCount[letter] === 'undefined') {
        handCount[letter] = 0;
      }

      handCount[letter] += 1;
    });

    const inputArr = input.split('');

    inputArr.forEach ( (letter) => {
      if (typeof inputCount[letter] === 'undefined') {
        inputCount[letter] = 0;
      }

      inputCount[letter] += 1;
    });

    for (let letter in inputCount) {
      if (typeof handCount[letter] === 'undefined' || handCount[letter] < inputCount[letter]) {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {
    const scoreChart = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10,
    };

    let score;
    if (word.length >= 7) {
      score = 8;
    } else {
      score = 0;
    }

    let i = 0;

    while (i < word.length) {
      score += scoreChart[word[i].toUpperCase()];
      i += 1;
    }

    return score;
  },

  highestScoreFrom(words) {
    let wordScore = {};

    for (let i in words) {
      let word = words[i];
      wordScore[word] = Adagrams.scoreWord(word);
    }

    const scores = Object.values(wordScore);
    const maxScore = Math.max(...scores);

    let winner = {
      'word': '',
      'score': 0,
    };

    for (let [word, score] of Object.entries(wordScore)) {
      if (score == maxScore && word.length == 10) {
        winner['word'] = word;
        winner['score'] = score;
        return winner;
      } else if (score == maxScore && (word.length < winner['word'].length || winner['word'] == '')) {
        winner['word'] = word;
        winner['score'] = score;
      }
    }

    return winner; 
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
