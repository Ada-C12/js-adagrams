const Adagrams = {
  drawLetters() {
    const alphabet = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ';
    const lettersInHand = [];

    for (let i = 0; i < 10; i++) {
      lettersInHand.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {  
    let result = true
    
    for (let i = 0; i < (input.length); i++) {
      if (lettersInHand.includes(input[i]) === false) {
        result = false;
      } else {
        lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
      }
    }
    return result
  },

};

// console.log(Adagrams.scoreWord('AVAILABLE'))
// console.log(Adagrams.usesAvailableLetters('APPLE', ['A', 'P', 'P', 'L', 'E']));
// console.log(Adagrams.usesAvailableLetters('APPLES', ['A', 'P', 'P', 'L', 'E']));

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
