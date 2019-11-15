// move letterPool outside of the function

const Adagrams = {
  drawLetters() {
    // create a object/hash with letters and their counts
    const letterPool = {
      'A': 9,
      'B': 2,
      'C': 2,
      'D': 4,
      'E': 12,
      'F': 2,
      'G': 3,
      'H': 2,
      'I': 9, 
      'J': 1,
      'K': 1,
      'L': 4,
      'M': 2,
      'N': 6,
      'O': 8,
      'P': 2,
      'Q': 1,
      'R': 6,
      'S': 4,
      'T': 6,
      'U': 4,
      'V': 2,
      'W': 2,
      'X': 1,
      'Y': 2,
      'Z': 1,
    }
    // iterate through object and add keys to an array x amt of times depending
    // on their quantity
    let letterPoolList = [];

    for (let letter in letterPool) {
      for (let x = 0; x < letterPool[letter]; x+=1) {
        letterPoolList.push(letter);
      }
    }

    letterPoolList.sort(() => Math.random());
    
    letterPoolList = letterPoolList.slice(0,10);

    return letterPoolList;
  },
  usesAvailableLetters(word, drawn) {
    let valid;
    const wordArray = word.split('');
    
    for (const letter in wordArray) {
      if (drawn.includes(wordArray[letter]) === false) {
        valid = false;
        return valid;
      }
      else {
        let index = drawn.indexOf(wordArray[letter]);
        drawn.splice(index, 1);
        valid = true;
      }
    }
    return valid;
  },
  scoreWord(word) {
    let score;
    const wordArray = word.split('');
    const wordScores = {
      'A': 1,
      'E': 1,
      'I': 1,
      'O': 1,
      'U': 1,
      'L': 1,
      'N': 1,
      'R': 1,
      'S': 1,
      'T': 1,
      'D': 2,
      'G': 2,
      'B': 3,
      'C': 3,
      'M': 3,
      'P': 3,
      'F': 4,
      'H': 4,
      'V': 4,
      'W': 4,
      'Y': 4,
      'K': 5,
      'J': 8,
      'X': 8,
      'Q': 10,
      'Z': 10,
    }
    
    // takes in a string of characters - word
    // returns an integer with the total number of points for that word
    // if the length of the word is 7,8,9, or 10 +8 extra points


  }
};





// Do not remove this line or your tests will break!
export default Adagrams;
