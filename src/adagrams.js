
const allLettersLookup = { 
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1
};

const pointsLookup = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10
};

const drawLetters = () => {
  const allLetters = [];

  Object.keys(allLettersLookup).forEach((letter) => {
    const count = allLettersLookup[letter];
    for (let i = 0; i < count; i++) {
      allLetters.push(letter);
    }
  }); 

  const drawnLetters = [];
  for (let i = 0; i < 10; i++) {
    drawnLetters.push(allLetters[Math.floor(Math.random() * allLetters.length)]);
  }
  
  return drawnLetters;
};

const usesAvailableLetters = (word, lettersInHand) => {
  const letterLookup = {};
  lettersInHand.forEach((letter) => {
    letterLookup[letter] = (letterLookup[letter] || 0) + 1;
  });

  for (const letter of word) {
    if (letterLookup[letter]) {
      letterLookup[letter] -= 1;
    } else {
      return false;
    }
  }

  return true
};
// acc == accumulator(total continues to be added to)
// 0 is starting value of accumulator
const scoreWord = (word) => {
  const upcasedLetters = word.toUpperCase().split('');
  const totalPoints = upcasedLetters.reduce((acc, letter) => {
    return acc + pointsLookup[letter];
  }, 0);

  const bonusPoints = word.length > 6 ? 8 : 0;
  return totalPoints + bonusPoints;
};

const highestScoreFrom = (words) => {
  let winningWord = 'N/A';
  let winningScore = 0;

  words.forEach((word) => {
    const score = scoreWord(word);

    if (
      score > winningScore || 
      (score === winningScore && winningWord.length !== 10 && (
        (word.length === 10) ||
        (word.length < winningWord.length) 
      ))
    ) {
      winningScore = score;
      winningWord = word;
    } 
  });

  return {
    word: winningWord,
    score: winningScore
  };
};

const Adagrams = {
  drawLetters, 
  usesAvailableLetters,
  scoreWord,
  highestScoreFrom
};

// Do not remove this line or your tests will break!
export default Adagrams;
