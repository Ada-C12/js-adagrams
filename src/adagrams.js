// import { objectExpression } from "@babel/types";

const Adagrams = {
  // because member of Adagrams, no const like increment in arrow function example
  //don't use arrow functions as members of objects
  //can be inside function inside object (okay as callback function)
  makeLetters() {
    const alphabetObject = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1,
    };
    const alphabetArray = [];
    for (let key in alphabetObject) {
      let i = alphabetObject[key];
      while (i > 0) {
        alphabetArray.push(key);
        i -= 1;
      }
    }
  return alphabetArray;
  }
// adapted from Fisher-Yates Shuffle
  shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
  }
  drawLetters() {
    let shuffled = shuffle(makeLetters());
    let lettersInHand = shuffled.slice(0, 10);
    return lettersInHand;
  }

  usesAvailableLetters = function(input, lettersInHand) {
    let handCollection = {}
    lettersInHand.forEach((letter) => {
      if (handCollection[letter] == null) {
        handCollection[letter] = 1
      }
      else {
        handCollection[letter] += 1
      }
      })
      // cannot break out of a foreach loop! use a different kind of loop
      for(const letter in input.toUpperCase().split('')) {
      if (Object.keys(handCollection).includes(letter)) {
        handCollection[letter] -= 1;
        if (handCollection[letter] < 0) {
          return false;
        }
      }
      else if (!Object.keys(handCollection).includes(letter)) {
        return false;
        }
    return true
    })
    }



    //put all letters w count in a "hash", then check input against


  // },
// };
// use THIS to call make letters once i put them both within Adagrams

console.log(usesAvailableLetters('test', drawLetters()))
// Do not remove this line or your tests will break!
// export default Adagrams;