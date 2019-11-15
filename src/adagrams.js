const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const poolOfLetter = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6,
      O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    };

    let avaLetters = [];
    for (let letter in poolOfLetter) {
      for (let i = 0; i < poolOfLetter[letter]; i++) {
        avaLetters.push(letter);
      }
    };

    let handOfLetters =[];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * avaLetters.length)
      let randomLetter = avaLetters[index];
      // remove the randomLetter from avaLetters array
      avaLetters.splice(index, 1);
      handOfLetters.push(randomLetter);
    };

    return handOfLetters;
  },
  // # wave2 code
  usesAvailableLetters(input, lettersInHand) {
    let userWord = input.toUpperCase();
    for (let letter of userWord) {
      if (lettersInHand.includes(letter)) {
        lettersInHand.splice(lettersInHand.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },

  // #Wave_3
  scoreWord(word) {
    if (word.length == 0) {
      return 0;
    }
    const onePointLetter = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    const twoPointLetter = ["D", "G"];
    const threePointLetter = ["B", "C", "M", "P"];
    const fourPointLetter = ["F", "H", "V", "W", "Y"];
    const fivePointLetter = ["K"];
    const eightPointLetter = ["J", "X"];
    const tenPointLetter = ["Q", "Z"];

    let letters = word.toUpperCase().split('');
    const scores = letters.map((letter) => {
      let letterScore = 0;

      if (onePointLetter.includes(letter)) {
        letterScore += 1;
      } else if (twoPointLetter.includes(letter)) {
        letterScore += 2;
      } else if (threePointLetter.includes(letter)) {
        letterScore += 3;
      } else if (fourPointLetter.includes(letter)) {
        letterScore += 4;
      } else if (fivePointLetter.includes(letter)) {
        letterScore += 5;
      } else if (eightPointLetter.includes(letter)) {
        letterScore += 8;
      } else if (tenPointLetter.includes(letter)) {
        letterScore += 10;
      }
      return letterScore;
    });


    let totalScore = scores.reduce((total, num) => total + num);
    if (letters.length >= 7) {
      totalScore += 8;
    }
    return totalScore;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;