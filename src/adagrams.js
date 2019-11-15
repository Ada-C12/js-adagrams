// Is reference for number of letters that will populate the bucket
const alphaRef = { a: 9, b: 2, c: 2, d: 4, e: 12, f: 2, g: 3, h: 2, i: 9, j: 1, k: 1, l: 4, m: 2, n: 6, o: 8, p: 2, q: 1, r: 6, s: 4, t: 6, u: 4, v: 2, w: 2, x: 1, y: 2, z: 1 };

// initially empty bucket
let bucket = [];

// teeny function to populate the bucket upon being passed in a letter
const letterPusher = (letter) => {bucket.push(letter)}

// iterates over array, defining the letter and value. Based on the value, it repeats letterPusher function for the letter
for ( const character in alphaRef ) {
  let value = alphaRef[character]
  let letter = character
  let i = 0
  while (i < value) {
    // letter.toUpperCase()
    letterPusher(letter.toUpperCase())
    i++
  };
}

// shuffles bucket array 
const shuffleArray = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// calls shuffling function
shuffleArray(bucket)

// hand that will be populated by now shuffled bucket
let hand = []

// populates hand without destroying / altering bucket
for (let i = 0; i < 10; i++) {
  hand.push(bucket[i])
}

const Adagrams ={
  drawLetters(){
    return hand
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
