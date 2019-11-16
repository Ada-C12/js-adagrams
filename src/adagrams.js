const LETTER_POOL = { A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, 
  R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, 
  J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1 };

const Adagrams = {
  drawLetters() {
    let lettersArray = []

    for (let key in LETTER_POOL) {
      for (let i = 0; i < LETTER_POOL[key]; i += 1) {
        lettersArray.push(key);
      }
    }

    let hand = []
    for (let i = 0; i < 10; i += 1) {
      let random = lettersArray[Math.floor(Math.random() * lettersArray.length)];
      hand.push(random);
    }
    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray  = input.split('')
    const clone = lettersInHand.slice(0);

    for (let i in inputArray) {      
      if (clone.includes(inputArray[i])) {
        let index = clone.indexOf(inputArray[i]);
        (clone.splice(index, 1));
      }
      else {
        return false;
      }
    }
    return true;
  },

  //wave3
  scoreWord(word) {
  //?? create a score chart

  }
};

// Adagrams.usesAvailableLetters('DOG', ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])

// Do not remove this line or your tests will break!
export default Adagrams;

