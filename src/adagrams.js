const Adagrams = {
  drawLetters() {
    const letterDistr = {
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

    const letterArr = [];

    // for-let-of source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    for (let [key, value] of Object.entries(letterDistr)) {
      while (value > 0) {
        letterArr.push(key);
        value -= 1;
      }
    }
    
    let hand = [];

    let i = 0;
    while (i < 10) {
      // << 0 is using bitshifting to basically round to the nearest integer
      // source: https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
      hand.push(letterArr[ letterArr.length * Math.random() << 0 ])
      i += 1;
    }

    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) {
      return false;
    }
      
    let handCount = {};
    let inputCount = {};

    lettersInHand.forEach ( (letter) => {
      if (typeof handCount[letter] === 'undefined') {
        handCount[letter] = 0;
      }

      handCount[letter] += 1;
    });

    const inputArr = input.split('');

    inputArr.forEach ( (letter) => {
      if (typeof inputCount[letter] === 'undefined') {
        inputCount[letter] = 0;
      }

      inputCount[letter] += 1;
    });

    for (let letter in inputCount) {
      if (typeof handCount[letter] === 'undefined' || handCount[letter] < inputCount[letter]) {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {
    const scoreChart = {
      
    }
  },
};



// Do not remove this line or your tests will break!
export default Adagrams;
