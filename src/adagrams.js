const Adagrams = {
  
  drawLetters() {
    const rawTiles = {
      A: 9, 
      B: 2, 
      C: 2, 
      D: 4, 
      E: 12, 
      F: 2, 
      G: 3, 
      H: 2, 
      I: 9, 
      J: 1, 
      K: 1, 
      L: 4, 
      M: 2, 
      N: 6, 
      O: 8, 
      P: 2, 
      Q: 1, 
      R: 6, 
      S: 4, 
      T: 6, 
      U: 4, 
      V: 2, 
      W: 2, 
      X: 1, 
      Y: 2, 
      Z: 1};

    const keys = Object.keys(rawTiles);

    const letterPool = [];

    for(const key in rawTiles) {
      let i = 0

      while (i <= rawTiles[key]) {
        letterPool.push(key);
        i += 1
      };
    };

    const hand = [];

    let i = 0;

    while ( i <= 9) {
      hand.push(letterPool[Math.floor(Math.random()*letterPool.length)]);
      i += 1
    }
    return hand;
  }, 

  usesAvailableLetters(input, lettersInHand) {
    let lettersAvailable = true;

    const checkForLetter = function(letter) {
      if (lettersInHand.includes(letter)) {
        let index = lettersInHand.indexOf(letter);
        lettersInHand.splice(index, 1);
        
      } else {
        // console.log(`Letter is ${letter}`);
        // console.log(`lettersInHand is ${lettersInHand}`);
        lettersAvailable = false;
      }
    }

    input.split('').forEach(checkForLetter);
    return lettersAvailable;
  },



  scoreWord(word) {
    const scoreChart = {
      "a": 1,
      "e": 1,
      "i": 1,
      "o": 1,
      "u": 1,
      "l": 1,
      "n": 1,
      "r": 1,
      "s": 1,
      "t": 1,
      "d": 2,
      "g": 2,
      "b": 3,
      "c": 3,
      "m": 3,
      "p": 3,
      "f": 4,
      "h": 4,
      "v": 4,
      "w": 4,
      "y": 4,
      "k": 5,
      "j": 8,
      "x": 8,
      "q": 10,
      "z": 10,
    };

    let wordScore = 0;
    const wordDowncase = word.toLowerCase();
  
    wordDowncase.split('').forEach( function(letter) {
      if (scoreChart[letter]) {
        wordScore += scoreChart[letter];
      };
    });

    if (wordDowncase.length >= 7) {
      wordScore += 8;
    }

    return wordScore


    // Make a score chart hash. 
    // Create a variable called wordScore
    // if given empty string, return a score of 0
    // Iterate through the word and if hash[letter], assign the value of that letter to the 
    // variable wordScore
    // additional points for length of the word can be added on later. 
    // calculate the length of the word and assign additional points if necessary
  },

}

// Do not remove this line or your tests will break!
export default Adagrams;
