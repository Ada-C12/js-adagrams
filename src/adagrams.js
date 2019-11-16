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

    let i = 0

    while ( i <= 9) {
      hand.push(letterPool[Math.floor(Math.random()*letterPool.length)]);
      i += 1
    }
    return hand
  }, 

  usesAvailableLetters(input, lettersInHand) {
    let lettersAvailable = true

    const checkForLetter = function(letter) {
      if (lettersInHand.includes(letter)) {
        let index = lettersInHand.indexOf(letter)
        lettersInHand.splice(index, 1);
        
      } else {
        // console.log(`Letter is ${letter}`);
        // console.log(`lettersInHand is ${lettersInHand}`);
        lettersAvailable = false;
      }
    }

    input.split('').forEach(checkForLetter);
    return lettersAvailable
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
