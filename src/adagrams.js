let allLetters = {
  A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1 }; //this is now an object

  const Adagrams = { 
    drawLetters() {//doesnt work with this, sorry
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
    return myHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const wordInput = input.toUpperCase().split("");
    if (wordInput.length > lettersInHand.length) return false
    const howManyTimes = {}
    for(let i = 0; i < lettersInHand.length; i += 1) {
      let char = lettersInHand[i];
      if (howManyTimes[char]) {
        howManyTimes[char] += 1; //if it exists, increment
      } else {
        howManyTimes[char] = 1;
      }
  }

    for(let i = 0; i < wordInput.length; i += 1) {
      let char = wordInput[i];
      if (howManyTimes[char]) {
        if (howManyTimes[char] > 0) {
          howManyTimes[char] -= 1;
        } else {
          return false;
        } 
      } else if (!howManyTimes[wordInput[i]]) {
        return false;
      }
      return true;
    }

      
      
    
    }

}
console.log(Adagrams.usesAvailableLetters("hellll", ["K","H","E","L","L","O","P","A"]));
// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break
// export default Adagrams;

    // const input = input.toUpperCase().split(""); //now an array
    // const copyMyHand = [...myHand]; //copy of my hand

    //   if (copyMyHand.includes(input[i])).pop