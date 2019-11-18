const Adagrams = {
  letterInfo: {
    "A": {count: 9, points: 1},
    "B": {count: 2, points: 3},
    "C": {count: 2, points: 3},
    "D": {count: 4, points: 2},
    "E": {count: 12, points: 1},
    "F": {count: 2, points: 4},
    "G": {count: 3, points: 2},
    "H": {count: 2, points: 4},
    "I": {count: 9, points: 1},
    "J": {count: 1, points: 8},
    "K": {count: 1, points: 5},
    "L": {count: 4, points: 1},
    "M": {count: 2, points: 3},
    "N": {count: 6, points: 1},
    "O": {count: 8, points: 1},
    "P": {count: 2, points: 3},
    "Q": {count: 1, points: 10},
    "R": {count: 6, points: 1},
    "S": {count: 4, points: 1},
    "T": {count: 6, points: 1},
    "U": {count: 4, points: 1},
    "V": {count: 2, points: 4},
    "W": {count: 2, points: 4},
    "X": {count: 1, points: 8},
    "Y": {count: 2, points: 4},
    "Z": {count: 1, points: 10},
  },

  drawCount: 10,
  
  drawLetters() {
    const letterInfo = this.letterInfo;
    const letterPool = [];
    for (let letter in letterInfo) {
      const letterCount = letterInfo[letter].count
      for (let i = 0; i < letterCount; i++){
        letterPool.push(letter); 
      }
    }
    // console.log(letterPool);

    const randomIndices = [];

    while (randomIndices.length < this.drawCount) {
      const randomIndex = Math.floor(Math.random() * letterPool.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    // console.log(`randomIndices: ${randomIndices}`);

    const drawnLetters = randomIndices.map((index) => {
      return letterPool[index];
    });

    // console.log(`drawnLetters: ${drawnLetters}`)

    return drawnLetters;

  },

  usesAvailableLetters(input, lettersInHand) {
    const handCopy = [...lettersInHand];
    
    const validInputs = input.split('').map((letter) => {
      if (handCopy.includes(letter)) {
        const letterIndex = handCopy.indexOf(letter);
        handCopy.splice(letterIndex,1);
        // console.log(`handCopy: ${handCopy}`);
        return true;
      } else {return false;}
    });

    return validInputs.includes(false) ? false : true;
  },

  scoreWord(word) {
    const letterInfo = this.letterInfo;
    const wordArray = word.toUpperCase().split('');

    const letterPoints = wordArray.map(letter => letterInfo[letter]['points']);

    console.log(letterPoints);

    if (wordArray.length >= 7) {
      letterPoints.push(8);
    }

    const wordPoints = letterPoints.reduce((total, points) => total + points, 0);

    return wordPoints;

    
  },
  
};

console.log(Adagrams.usesAvailableLetters('poopies', ['p','o','o','l']));

// Do not remove this line or your tests will break!
export default Adagrams;
