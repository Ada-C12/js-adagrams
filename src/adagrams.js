const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPool = ( "A" * 9 + "B" * 2 + "C" * 2 + "D" * 4 + "E" * 12 + "F" * 2 + "G" * 3 +
     "H" * 2 + "I" * 9 + "J" + "K" + "L" * 4 + "M" * 2 + "N" * 6 + "O" * 8 + "P" * 2 +
      "Q" + "R" * 6 + "S" * 4 + "T" * 6 + "U" * 4 + "V" * 2 + "W" * 2 + "X" +
       "Y" * 2 + "Z").toUpperCase().split('');

    shuffle(letterPool)

    const letterHand = letterPool.slice(0,10);

    return letterHand
  },

 usesAvailableLetters(input, lettersInHand) {

  let included = true;

  for (let i = 0; i < input.length; i += 1) {
    if ( lettersInHand.includes(input[i]) === false ) {
      return false;
    }
    else {
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1 );
    }
  }

  return included;
  },

  // scoreWord(word) {
  //   let points = 0;
  //   const pointsTable = {
  //     'A, E, I, O, U, L, N, R, S, T' : 1,
  //     'D, G' : 2,
  //     'B, C, M, P' : 3,
  //     'F, H, V, W, Y' : 4,
  //     'K' : 5,
  //     'J, X' : 8,
      
  //   };

  //   return points;
  // },
};

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

// console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;