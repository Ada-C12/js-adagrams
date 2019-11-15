
const Adagrams = {
  drawLetters() {
    const letters = {
      "A": 9,
      "N": 6,
      "B": 2,
      "O": 8,
      "C": 2,
      "P": 2,
      "D": 4,
      "Q": 1, 
      "E": 12,
      "R": 6,
      "F": 2,
      "S": 4,
      "G": 3,
      "T": 6,
      "H": 2,
      "U": 4,
      "I": 9,
      "V": 2,
      "J": 1,
      "W": 2,
      "K": 1,
      "X": 1,
      "L": 4,
      "Y": 2,
      "M": 2,	
      "Z": 1,
    };

    const lettersArray = Object.keys(letters);
    const newArray = [];

    lettersArray.forEach(function(char) {
      let i = 0;
      while (i < letters[char]) {
        newArray.push(char);
        i++;
      }
    });
  
    let i = 0;
    const hand = [];

    while (i < 10) {
      let randomLocation = Math.floor(newArray.length * Math.random());
      let currentLetter = newArray[randomLocation];
      hand.push(currentLetter);
      newArray.splice(randomLocation, 1);
      i++;
    };
      return hand;
    }, 

  usesAvailableLetters(word, drawn) {

    const drawnObject = {};
    
    drawn.forEach((letter) => {
      if (drawnObject[letter]) {
        drawnObject[letter] += 1;
      }
      else {
        drawnObject[letter] = 1;
      }
    });

    const wordArray = word.split('');
    let i = 0
    while (i < wordArray.length) {
      let theLetter = wordArray[i];
    
      if (drawnObject[theLetter] > 0) {
      drawnObject[theLetter] -= 1;
      }
      else {
        return false;
      }
      i++;
    }

    return true;
  },
  scoreWord(word) {
    // build the scorechart
    const ones = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    const twos = ['D', 'G'];
    const threes = ['B', 'C', 'M', 'P'];
    const fours = ['F', 'H', 'V', 'W', 'Y'];
    const fives = ['K'];
    const eights = ['J', 'X'];
    const tens = ['Q', 'Z'];

    const scoreKeeping = {}

    ones.forEach(function(letter) {
      scoreKeeping[letter] = 1;
    });

    twos.forEach(function(letter) {
      scoreKeeping[letter] = 2;
    });

    threes.forEach((letter) => {
      scoreKeeping[letter] = 3;
    });

    fours.forEach(function(letter) {
      scoreKeeping[letter] = 4;
    });

    fives.forEach(function(letter) {
      scoreKeeping[letter] = 5;
    });

    eights.forEach(function(letter) {
      scoreKeeping[letter] = 8;
    });

    tens.forEach(function(letter) {
      scoreKeeping[letter] = 10;
    });

    let totalPoints = 0;

    if (word == '') {
      return totalPoints ;
    }

    const wordArray = word.toUpperCase().split('');
    let i = 0
    while (i < wordArray.length) {
      totalPoints += scoreKeeping[wordArray[i]];
      i++;
    }

    if (wordArray.length > 6) {
      totalPoints += 8;
    }

    
    return totalPoints;
  }
};


// Do not remove this line or your tests will break!
export default Adagrams;
