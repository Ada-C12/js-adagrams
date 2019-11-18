const Adagrams = {
  allLettersHash: {
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
  },

  drawLetters() {
    let allLettersArray = [];
    for (let key in this.allLettersHash) {
      for (let i = 0; i < Number(this.allLettersHash[key]); i++) {
        allLettersArray.push(key);
      }
    };
    
    let drawnLetters = [];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor((Math.random() * allLettersArray.length));
      drawnLetters.push(allLettersArray[index]);
      allLettersArray.splice(index,1);
    };
    
    return drawnLetters
  },

  usesAvailableLetters(word,drawnLetters) {
    word = word.toUpperCase().split('');
    let lettersInHand = [...drawnLetters];

    for (let i = 0; i < word.length; i++) {
      if (lettersInHand.includes(word[i])) {
        let wordLocation = lettersInHand.indexOf(word[i]);
        lettersInHand.splice(wordLocation,1);
      } else {
        return false;
      };
    };

    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase().split('');
    let totalScore = 0;
    for(let i = 0; i < word.length; i++) {
      if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U' || word[i] === 'L' || word[i] === 'N' || word[i] === 'R' || word[i] === 'S' || word[i] === 'T') {
        totalScore += 1;
      } else if (word[i] === 'D' || word[i] === 'G') {
        totalScore += 2;
      } else if (word[i] === 'B' || word[i] === 'C' || word[i] === 'M' || word[i] === 'P') {
        totalScore += 3;
      } else if (word[i] === 'F' || word[i] === 'H' || word[i] === 'V' || word[i] === 'W' || word[i] === 'Y') {
        totalScore += 4;
      } else if (word[i] === 'K') {
        totalScore += 5;
      } else if (word[i] === 'J' || word[i] === 'X') {
        totalScore += 8;
      } else if (word[i] === 'Q' || word[i] === 'Z') {
        totalScore += 10;
      };
    };

    if (word.length > 6) {
      totalScore += 8
    };

    return totalScore;
  },

  highestScoreFrom(words) {
    let winningWord = {};
    let winningWordScore = 0;

    let scoreHash = {};
    let that = this;

    words.forEach( function(word) {
      scoreHash[word] = that.scoreWord(word);
    });

    // for (let key in scoreHash) {
    //   console.log(`******${key}:${scoreHash[key]}************`);
    // };

    let maxValue = Math.max(...Object.values(scoreHash));
    // console.log(...Object.values(scoreHash));
    // console.log(`**********${maxValue}**********`);

    let tie = {};

    for (let key in scoreHash) {
      if (scoreHash[key] === maxValue) {
        tie[key] = scoreHash[key];
      };
    };

    let shortestWord = "xxxxxxxxxx";

    for (let key in tie) {
      if (key.length === 10) {
        winningWord = {
          'word': key,
          'score': tie[key],
        };
        return winningWord;
      } else if (key.length < shortestWord.length) {
        shortestWord = key;
        winningWordScore = tie[key]
      };
    };

    winningWord = {
      'word': shortestWord,
      'score': winningWordScore,
    };

    return winningWord;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;

console.log(Adagrams.drawLetters());