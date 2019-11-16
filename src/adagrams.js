const Adagrams = {
  drawLetters() {
    const alphabet = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ';
    const lettersInHand = [];

    for (let i = 0; i < 10; i++) {
      lettersInHand.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return lettersInHand;
  },

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
