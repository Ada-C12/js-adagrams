const Adagrams = {

   letters: {
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
  },

 
// Use Fisher-Yates/Knuth Shuffle
  shuffler(array) {
    const length = array.length - 1
    for (let i = length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      }
    return array;
  },

  drawLetters() {
    let letters = this.letters;
    const letterSet = [];
    for (let element in letters) {
      let count = letters[element] + 1;
      do {
        count -= 1;
        letterSet.push(element);
      } while (count > 0);
    };

    let shuffledArr = this.shuffler(letterSet);
    return shuffledArr.splice(0, 10)
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let element of input) {
      if (!lettersInHand.includes(element)) {
        return false;
      } else {
        let index = lettersInHand.indexOf(element);
        lettersInHand.splice(index, 1);
      }
    } 
    return true;
  },

  scoreWord(word) {
    let string = word.toUpperCase();
    const pointSystem = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      6: ["J", "X"],
      7: ["Q", "Z"]
    }

    let points = 0;
    let length = string.length;
    if (length >= 7 && length <= 10) { points += 8 }; 
    for (let letter of string) {
    
      let elementScore =
      (pointSystem[1].includes(letter)) ? 1    
      :(pointSystem[2].includes(letter)) ? 2
      :(pointSystem[3].includes(letter)) ? 3 
      :(pointSystem[4].includes(letter)) ? 4 
      :(pointSystem[5].includes(letter)) ? 5 
      :(pointSystem[6].includes(letter)) ? 8 
      :(pointSystem[7].includes(letter)) ? 10
      :points = 0

      points += elementScore
    }
    return points;
  }
  
}


// Do not remove this line or your tests will break!
export default Adagrams;
