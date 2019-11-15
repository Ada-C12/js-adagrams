const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const poolOfLetter = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6,
      O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };

  let avaLetters = [];
    for (let letter in poolOfLetter) {
      for (let i = 0; i < poolOfLetter[letter]; i++) {
        avaLetters.push(letter);
      }
    };

    let handOfLetters =[];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * avaLetters.length)
      let randomLetter = avaLetters[index];
      // remove the randomLetter from avaLetters array
      avaLetters.splice(index, 1);
      handOfLetters.push(randomLetter);
    };

    return handOfLetters;
  },
  // # wave2 code
  usesAvailableLetters(input, lettersInHand) {
    let userWord = input.toUpperCase();
    for (let letter of userWord) {
      if (lettersInHand.includes(letter)) {
        lettersInHand.splice(lettersInHand.indexOf(letter), 1);
      }
      else {
        return false;
      }
    }
    return true;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;








