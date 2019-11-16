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
    
    // turn draw random letter into an anonymous function? or a helper function?
    
    // continue this loop until there are ten letters in the player hand 
    for (let index = 0; lettersInHand.length < 10; index++) {
      // code for random courtesy of https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
      // pull a random letter from the letter pool array
      let randomLetter = letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
      // condition: if adding the letter to the player hand would exceed the count of letters in the pool, redraw 
      let count = lettersInHand.reduce((total, letter) => total + (letter === randomLetter), 0);
      if (count == letterPoolHash[randomLetter]) {
          randomLetter = letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
        } else { // add the letter to player hand array
          lettersInHand.push(randomLetter)
        }
      }
    return lettersInHand
  },
  
  usesAvailableLetters(input, lettersInHand) {
    
    // turn hand array into a hash map that we can compare to input
    let handHash = {};
  
  lettersInHand.forEach(letter => {
    if (handHash[letter] == null) {
      handHash[letter] = 1
    } else {
      handHash[letter] += 1
    }
  });

    let inputArray = input.toUpperCase().split('')
    
    // remove input letters from handHash. If letter is not in hash, return false.
  inputArray.forEach(letter => {
    if (handHash[letter] == null) {
      return false;
    } else {
      handHash[letter] -= 1;
    }
    });

  // loop over handHash: if letter count in input is ever greater than letter count in hash, return false. Else return true. 
      for (let index = 0; index < inputArray.length; index++) {
        if (handHash[inputArray[index]] < 0 || handHash[inputArray[index]] == null) {
          return false;
        }
        }
        return true;
    }
  }

// Do not remove this line or your tests will break!
export default Adagrams;
