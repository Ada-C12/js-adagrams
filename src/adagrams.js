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

    if(inputLength > lettersInHand.length){
      return false
    }

    for(let i = 0; i < inputLength; i++){
      if (lettersInHand.indexOf(input[i]) !== -1){
        lettersInHand = lettersInHand.toString().replace(input[i], '');
      } else {
        return false
      }
    }
    return true 
  },

    //now we wanna check every letter in the word 
    //for a letter, look up the matching letter in the Letters object above
    //add its value (points) to the score
  scoreWord(word) {
    const letters = { 
      "A": 1, "B": 3,
      "C": 3, "D": 2, 
      "E": 1, "F": 4,
      "G": 2, "H": 4,
      "I": 1, "J": 8,
      "K": 5, "L": 1,
      "M": 3, "N": 1,
      "O": 1, "P": 3,
      "Q": 10, "R": 1,
      "S": 1, "T": 1,
      "U": 1, "V": 4,
      "W": 4, "X": 8,
      "Y": 4, "Z": 10 
    };

    let score = 0;
    
    (word.length > 6 && word.length < 11 ? score += 8 : score += 0);

    // for (const letterTile of word) {
      //do stuff 
    // }
    let w = word.toUpperCase()
    w.split('').forEach(function(letterTile){
      score += (letters[letterTile]);
    });
    return score 
  },

};


// Do not remove this line or your tests will break!
export default Adagrams;
