let letterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']

function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

const Adagrams = {
  drawLetters() {
    shuffle(letterPool);
    return letterPool.slice(0, 10);
  },
  usesAvailableLetters(input, lettersInHand) {
    let lettersObject = {};
    let outcome = true;

    // Put lettersIn Hand into a hash-like object
    lettersInHand.forEach((letter) => {
      if (lettersObject[letter] === undefined) {
        lettersObject[letter] = 1;
      } else {
        lettersObject[letter] += 1;
    }
  });

    // Put input into an array and compare each element to hash-like object
    input.split('').forEach((item) => {
      if (lettersObject.hasOwnProperty(item) && lettersObject[item] > 0) {
        lettersObject[item] -= 1;
      } else {
        outcome = false;
      }
    });
    return outcome;
  }
};



// Do not remove this line or your tests will break!
export default Adagrams;
