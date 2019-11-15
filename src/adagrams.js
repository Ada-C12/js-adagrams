
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
  // usesAvailableLetters(word, drawn) {
  
  //   const drawnObject = {};
  //   // build the object
    
  //   drawn.forEach((letter) => {
  //     if (drawnObject[letter]) {
  //       drawnObject[letter] += 1;
  //     }
  //     else {
  //       drawnObject[letter] = 1;
  //     }
  //   });
  

  //   const wordArray = word.split('');
    
  //   for (let i = 0; i < wordArray.length; i++ ) {
  //     let theWord = drawn[i];
  //     if (drawnObject[drawn[i]] > 0) {
  //     drawnObject[drawn[i]] -= 1;
  //     }
  //     else {
  //       return false;
  //     }
  //   };

  //   return true;
  // }
};

// Do not remove this line or your tests will break!
export default Adagrams;
