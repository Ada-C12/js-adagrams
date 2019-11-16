const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPoolHash = {'A':9, 'B':2, 'C':2, 'D':4, 'E':12, 'F':2, 'G':3, 'H':2, 'I':9, 'J':1, 'K':1, 'L':4, 'N':6, 'O':8, 'P':2, 'Q':1, 'R':6, 'S':4, 'T':6,'U':4, 'V':2, 'W':2, 'X':1, 'Y':2, 'Z':1 };

    const letterPoolArray =  ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B',
    'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G',
    'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'I', 'J', 'K', 'L', 'L', 'L', 'L', 'N', 'N', 'N', 'N',
    'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P',
    'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S',
    'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U',
    'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];

    let lettersInHand = [];
    
    // turn draw letter into an anonymous function? or a helper function?
    
    // continue this loop until there are ten letters in the player hand 
    for (let index = 0; lettersInHand.length < 10; index++) {
      // code for random courtesy of https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
      // pull a random letter from the letter pool array
      let randomLetter = letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
      // condition: if adding the letter to the player hand would exceed the count of letters in the pool, redraw 
      let count = lettersInHand.reduce((n, x) => n + (x === randomLetter), 0);
      if (count == letterPoolHash[randomLetter]) {
          randomLetter = letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
        } else { // add the letter to player hand array
          lettersInHand.push(randomLetter)
        }
      }
    return lettersInHand
  }
  

  // usesAvailableLetters(input, lettersInHand)

};

// Do not remove this line or your tests will break!
export default Adagrams;
