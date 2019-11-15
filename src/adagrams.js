const Adagrams = {
  drawLetters() {
    const letters = { 
      "A": 9, "B": 2,
      "C": 2, "D": 4, 
      "E": 12, "F": 2,
      "G": 3, "H": 2,
      "I": 9, "J": 1,
      "K": 1, "L": 4,
      "M": 2, "N": 6,
      "O": 8, "P": 2,
      "Q": 1, "R": 6,
      "S": 4, "T": 6,
      "U": 4, "V": 2,
      "W": 2, "X": 1,
      "Y": 2, "Z": 1 
    };

    const keys = Object.keys(letters);
    const hand = [];

    while (hand.length < 10) {
      let randomTile = keys[Math.floor(Math.random() * keys.length)]
      let tileCount = letters[randomTile];
      if (tileCount > 0){
        letters[randomTile] -= 1;
        hand.push(randomTile)
      }
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) { 
    let inputLength = input.length;
    let inputUpperCase = input

    if(inputLength > lettersInHand.length){
      return false
    }

    for(let i = 0; i < inputLength; i++){
      if (lettersInHand.indexOf(inputUpperCase[i]) !== -1){
        lettersInHand = lettersInHand.toString().replace(input[i], '');
      } else {
        return false
      }
    }
    return true 
  }

  scoreWord(word) {
    let score = 0
  }

};
// Do not remove this line or your tests will break!
export default Adagrams;
