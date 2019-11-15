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
    let valid
    const wordArray = word.split('')
    
    for (const letter in wordArray) {
      if (drawn.includes(wordArray[letter]) === false) {
        console.log('Kristina')
        valid = false;
        return valid;
      }
      else {
        console.log(drawn);
        let index = drawn.indexOf(wordArray[letter]);
        console.log( `Index ${index}: Letter ${letter}`);
        drawn.splice(index, 1);
        // console.log(drawn);
        valid = true;
      }
    }

    // wordArray.forEach(function(letter) {
    //   if (drawn.includes(letter) === false) {
    //     valid = false;
    //   }
    //   else {
    //     let index = drawn.indexOf(letter);
    //     console.log(index);
    //     drawn.splice(index, 1);
    //     console.log(drawn);
    //     valid = true;
    //   }
    // });

    return valid;
  },

};





// Do not remove this line or your tests will break!
export default Adagrams;
