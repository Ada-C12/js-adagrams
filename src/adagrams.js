const letterDistribution = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
}

const allLetters = []

for (let letter in letterDistribution) {
  let i = 0;
  while (i < letterDistribution[letter]) {
    allLetters.push(letter);
    i += 1;
  }
}



const scoreChart = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2, 
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}

const Adagrams = {
  drawLetters() {
    // https://css-tricks.com/snippets/javascript/shuffle-array/
    allLetters.sort(function() { return 0.5 - Math.random() });

    return allLetters.slice(0, 10);
  },
  usesAvailableLetters(input, lettersInHand) {
    let validWord = true;
    let userWord = input.toUpperCase().split("");

    userWord.forEach((char) => {
      let index = lettersInHand.indexOf(char);

      if (index === -1) {
        validWord = false;
        return;
      } else {
        lettersInHand.splice(index, 1)
      }
    })
    return validWord;
  },
  scoreWord(word) {
    let total = 0;

    let userWord = word.toUpperCase().split("");

    userWord.forEach((char) => {
      let points = scoreChart[char]

      total += points
    })

    if (userWord.length >= 7 && userWord.length <= 10) { 
      total += 8;
    }
    return total
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
