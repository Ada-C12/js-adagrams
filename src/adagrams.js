let allLetters = {
  A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1 }; //this is now an object

// const drawLetters = function() {//doesnt work with this, sorry
  let letters = [];
  for(let letter in allLetters) {
    for(let i = 0; i < allLetters[letter]; i += 1) {
      letters.push(letter);
    }
  }

const myHand = [];

for(let i = 0; i < 10; i += 1) {
  const myShuffledLetters = Math.floor(Math.random(letters) * (letters.length));
    myHand.push(letters[myShuffledLetters]);

  }


const Adagrams = { //this is wave one

  drawLetters() {
    return myHand
  }

}



// Do not remove this line or your tests will break
export default Adagrams;