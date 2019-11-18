const poolOfLetters = ( 
  "A".repeat(9) + 
  "B".repeat(2) + 
  "C".repeat(2) + 
  "D".repeat(4) + 
  "E".repeat(12) + 
  "F".repeat(2) + 
  "G".repeat(3) + 
  "H".repeat(2) + 
  "I".repeat(9) + 
  "J".repeat(1) + 
  "K".repeat(1) + 
  "L".repeat(4) + 
  "M".repeat(2) + 
  "N".repeat(6) + 
  "O".repeat(8) + 
  "P".repeat(2) + 
  "Q".repeat(1) + 
  "R".repeat(6) + 
  "S".repeat(4) + 
  "T".repeat(6) + 
  "U".repeat(4) + 
  "V".repeat(2) + 
  "W".repeat(2) + 
  "X".repeat(1) + 
  "Y".repeat(2) + 
  "Z".repeat(1)
  ).split('');

const valueHash = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10};

const Adagrams = {
  // thank you stackoverflow: https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
  shuffle(letterbank) {
    for (let i = 0; i < letterbank.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (letterbank.length - i));

        let temp = letterbank[j];
        letterbank[j] = letterbank[i];
        letterbank[i] = temp;
    }
  },

  drawLetters() {
    let poolOfLettersCopy = [...poolOfLetters]
    this.shuffle(poolOfLettersCopy)
    return poolOfLettersCopy.slice(0,10);
  },

  usesAvailableLetters(input, lettersInHand) {

    // Create frequency hash of lettersInHand
    let handHash = new Object();
    for (let l of lettersInHand) {
      if (handHash.hasOwnProperty(l)) {
        handHash[l] += 1;
      }
      else {
        handHash[l] = 1; 
      }
    }

    // Check if characters from input are in handHash
    for (let l of input) {
      if (l in handHash) {
        if (handHash[l] == 0) {
          return false
        }
        else {
          handHash[l] -= 1
        }
      }
      else {
        return false
      }
    }
    return true
  },

  // Wave 3
  scoreWord(word){
    let score = 0;
    let bonus = 8;

    for (let l of word) {
    score += valueHash[l.toUpperCase()];
    }
    if (word.length == 7 || word.length == 8 || word.length == 9 || word.length == 10){
    score += bonus;
  }
    return score;
  }
};

export default Adagrams;


