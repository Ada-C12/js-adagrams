const Adagrams = {
  
  drawLetters() {
    const letters = { 'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1 };
    const keys = Object.keys(letters);
    const strings = new Array;
    for (let i = 0; i < 10; i++) {
      const drawOneLetter = () => {
        const key = keys[Math.floor(Math.random() * 100) % 26];
        if (letters[key] > 0) {
          letters[key] -= 1;
          strings.push(key)
        } else {
          drawOneLetter();
        }
      }
      drawOneLetter();
    }
    console.log(`Here are the letters you have drawn: ${strings}`);
    return strings;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    let result = true;
    input.split("").forEach(function (letter) {
      if (lettersInHand.includes(letter) && result != false) {
        lettersInHand.splice(lettersInHand.indexOf(letter), 1)
        // delete lettersInHand[lettersInHand.indexOf(letter)];
        result = true;
      } else {
        result = false;
      }
    });
    return result;
  },

  scoreWord(word) {
    let points = 0;
    word = word.toUpperCase().split("")
    if (word.length >= 7) {
      points += 8
    }
    const letterValues = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q','Z']
    }
    word.forEach(function (letter) {
      Object.keys(letterValues).forEach(function (key) {
        if (letterValues[key].includes(letter)) {
          points += parseInt(key);
        }
      })
    })
    return points;
  },

  highestScoreFrom(words) {
    let wordsWithScores = new Object;
    for (let i = 0; i < words.length; i++) {
      wordsWithScores[words[i]] = Adagrams.scoreWord(words[i]);
    }
    let winningWord = { word: null, score: null };

    words.forEach(word => {
      if (wordsWithScores[word] > winningWord.score) {
        winningWord = { word: word, score: wordsWithScores[word] }
      } else if (wordsWithScores[word] == winningWord.score) {
        if (word.length == 10 && winningWord.word.length != 10) {
          winningWord = { word: word, score: wordsWithScores[word] }
        } else if (word.length < winningWord.word.length && winningWord.word.length != 10) {
          winningWord = { word: word, score: wordsWithScores[word] }
        }
      }
    });
    return winningWord;
  }
};

// console.log(Adagrams.highestScoreFrom(["fff", "a", "ddd", "hhhhhbbba", "bbbbbbbbbb"]));
// Do not remove this line or your tests will break!
export default Adagrams;
