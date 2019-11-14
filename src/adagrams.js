const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letters = {
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

    let keysOnly = Object.keys(letters);
    let hand = [];

    while (hand.length < 10){
      let tile = keysOnly[Math.floor(Math.random() * keysOnly.length)];
      let tileCount = letters[tile];
      if (tileCount > 0){
        letters[tile] -= 1;
        hand.push(tile);
      }
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let wordArray = input.toUpperCase().split('');

    for(let i = 0; i < input.length; i++){
      if (lettersInHand.includes(wordArray[i]) == false){
        return false;
      } else {
        let letterIndex = lettersInHand.indexOf(wordArray[i]);
        lettersInHand.splice(letterIndex,1);
      }
    }
    return true;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
