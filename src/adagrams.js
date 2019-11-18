let allLetters = {
  A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1 }; 

  let letterScores = {
     A : 1, E : 1, I : 1, O : 1, U : 1, L : 1, N : 1,
     R : 1, S : 1, T : 1, D : 2, G : 2, B : 3, C : 3,
     M : 3, P : 3, F : 4, H : 4, V : 4, W : 4, Y : 4,
     K : 5, J : 8, X : 8, Q : 10, Z : 10 
  };

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
    }
    return true;
    },

  scoreWord(word) {
    let thisTotal = 0;
    const newWord = word.toUpperCase().split("");
      newWord.forEach((letter) => {
        thisTotal += letterScores[letter];
      });
      if (word.length >= 7) {
        return thisTotal + 8;
      } else {
        return thisTotal;
      }
  }
}

// console.log(Adagrams.usesAvailableLetters("hellll", ["K","H","E","L","L","O","P","A"]));
// console.log(Adagrams.scoreWord("aaaaaaaaa"));
// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break
// export default Adagrams;
