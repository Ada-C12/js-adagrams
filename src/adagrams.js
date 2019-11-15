const Adagrams = {
  drawLetters() {
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
  }

  let lettersClone = {...letters};
  let hand = [];
  let lettersKeys = Object.keys(lettersClone);

  while (hand.length < 10) {
    let tile = lettersKeys[Math.floor(Math.random() * 26) + 1];
    let tileCount = lettersClone[tile];
    if (tileCount > 0) {
      lettersClone[tile] -=1
      hand.push(tile)
    }
  }

  return hand
  }, 
  usesAvailableLetters(input, lettersInHand) {
    lettersInHand = lettersInHand.toUpperCase();
    
    let handClone = lettersInHand.split("");
    input = input.toUpperCase();
    
    let inputArray = input.split("");
    let result;

    inputArray.forEach(letter => {
      if (handClone.includes(letter) == true) {
        // delete handClone[handClone.indexOf(letter)];
        handClone.splice(handClone.indexOf(letter),1);
        result = true;
      } else {
        result = false;
      }
    });

    return result
  },
  
};


// Do not remove this line or your tests will break!
export default Adagrams;
