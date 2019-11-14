//  Wave 1 Problem
const Adagrams = {
  drawLetters() {
    const alphabets = {
      a: 9,
      b: 2,
      c: 2,
      d: 4,
      e: 12,
      f: 2,
      g: 3,
      h: 2,
      i: 9,
      j: 1,
      k: 1,
      l: 4,
      m: 2,
      n: 6,
      o: 8,
      p: 2,
      q: 1,
      r: 6,
      s: 4,
      t: 6,
      u: 4,
      v: 2,
      x: 1,
      y: 2,
      z: 1
    };
    let allLetters = [];
    for (let letter in alphabets) {
      let quantity = alphabets[letter];
      let letters = [];
      let i = 0;
      while (i < quantity) {
        letters.push(letter);
        i++;
      }
      allLetters.push(letters);
    }
    allLetters = allLetters.flat();

    allLetters = shuffle(allLetters);

    let yourLetters = [];
    let j = 0;
    while (j < 10) {
      yourLetters.push(allLetters[j]);
      j++;
    }

    return yourLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    let word = input.toLowerCase().split("");
    let sameLetters = shuffle(lettersInHand);

    word.forEach(function(letter) {
      if (sameLetters.includes(letter)) {
        let letterLocation = sameLetters.indexOf(letter);
        sameLetters.splice(letterLocation, 1);
      } else {
        return false;
      }
    });
  },

  scoreWord(word) {
    let userWord = word.toLowerCase().split("");
    let totalScore = 0;
    userWord.forEach(function(letter) {
      switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "l":
        case "n":
        case "r":
        case "s":
        case "t":
          totalScore += 1;
          break;
        case "d":
        case "g":
          totalScore += 2;
          break;
        case "b":
        case "c":
        case "m":
        case "p":
          totalScore += 3;
          break;
        case "f":
        case "h":
        case "v":
        case "w":
        case "y":
          totalScore += 4;
          break;
        case "k":
          totalScore += 5;
          break;
        case "j":
        case "x":
          totalScore += 8;
          break;
        case "q":
        case "z":
          totalScore += 10;
          break;
        default:
          totalScore = 0;
          break;
      }
    });

    if (userWord.length > 6) {
      totalScore += 8;
    }

    return totalScore;
  },

  // # Wave 4 Problem
  highestScoreFrom(words) {
    let winningWord = {};

    let maxWordScore = 0;
    let maxWord = "";
    winningWordLetterCount = 0;

    words.forEach(function(word) {
      if (scoreWord(word) > maxWordScore) {
        maxWordScore = scoreWord(word);
        maxWord = word;
        winningWordLetterCount = word.length;
      } else if (scoreWord(word) == maxWordScore) {
        if (word.length == 10) {
          maxWordScore = scoreWord(word);
          maxWord = word;
          winningWordLetterCount = word.length;
        } else if (word.length < winningWordLetterCount) {
          maxWordScore = scoreWord(word);
          maxWord = word;
          winningWordLetterCount = word.length;
        }
      }
    });

    winningWord = {
      word: maxWord,
      score: maxWordScore
    };
    return winningWord;
  }
};
const shuffle = function(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let shuffledArray = array; //.sort(() => Math.random() - 0.5);
  return shuffledArray;
};

// Do not remove this line or your tests will break!
export default Adagrams;
