// externally-accessed functions
const Adagrams = {
  // hand of drawn letters
  drawLetters(){
    // Is reference for number of letters that will populate the bucket
    const alphaRef = { a: 9, b: 2, c: 2, d: 4, e: 12, f: 2, g: 3, h: 2, i: 9, j: 1, k: 1, l: 4, m: 2, n: 6, o: 8, p: 2, q: 1, r: 6, s: 4, t: 6, u: 4, v: 2, w: 2, x: 1, y: 2, z: 1 };

    // initially empty bucket
    let bucket = [];

    // iterates over array, defining the letter and value. It then pushes the letter into the bucket array according to the value
    for ( const character in alphaRef ) {
      let value = alphaRef[character];
      let letter = character;
      let i = 0;
      while (i < value) {
        bucket.push(letter.toUpperCase())
        i++
      };
    };

    // shuffles bucket array 
    const shuffleArray = function (array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      };
    };

    // calls shuffling function
    shuffleArray(bucket);

    // hand that will be populated by now shuffled bucket
    let hand = [];

    // populates hand without destroying / altering bucket
    for (let i = 0; i < 10; i++) {
      hand.push(bucket[i])
    };
    return hand
  },

  usesAvailableLetters(input, lettersInHand){
    // evaluates if hand uses only available letters
    
    //creates object (handyObject) that will be used as a lookup hash equivalent with the values being the number of occurences for a sinle letter. Once populated, it iterates over the input, decrementing the values 
    let handyObject = {};

    for(let i = 0; i < lettersInHand.length; i++){
      if(!Object.keys(handyObject).includes(lettersInHand[i])) {
        let key = lettersInHand[i];
        Object.assign(handyObject, {[key]: 1});
      }
      else {
        handyObject[lettersInHand[i]] += 1; 
      }
    }

    for(let i = 0; i < input.length; i++) {
      if(!Object.keys(handyObject).includes(input[i])) {
        return false;
      }
      else if (handyObject[input[i]] === 0 ) {
        return false;
      }
        else {
        handyObject[input[i]] -= 1;
      }
    }
    return true;
  },

  scoreWord(word){
    // iterates over the string that is passed in from the user, decrementing the values in handyObject. if it finds that a letter is missing, it returns false or if it uses more letters than were in the hand that was passed to the user. EX: [A, B, C, X, X, X, X, X, X, X] & "AAA" would return false because there's only 1 A present

    // point reference by letter
    const pointRef = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};

    let score = 0;

    if (word.length === 0 ) {
      return 0;
    }

    else {
      for(let i = 0; i < word.length; i++) {
        const digWord = word.toUpperCase();
        score += pointRef[digWord[i]];
      }
      if (word.length > 6) {
        score += 8;
      }
    return score;
    }
  }
};


// Do not remove this line or your tests will break!
export default Adagrams;
