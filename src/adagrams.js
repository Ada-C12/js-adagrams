class Adagrams {
  static drawLetters() {

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
      'Z': 1
    };

    const letters = Object.keys(letterPool);
    const lettersLength = letters.length

    const letterInHand = [];

    for (let i = 0; i < 10; i += 1) {
      letterInHand.push(letters[Math.floor(Math.random() * lettersLength)]);
    }

    return letterInHand;
    
  }

  static usesAvailableLetters(input, lettersInHand) {
    const inputLetters = input.toUpperCase().split('');

    for (let i = 0; i < inputLetters.length; i += 1) {
      if (lettersInHand.includes(inputLetters[i])) {
        lettersInHand.splice(lettersInHand.indexOf(inputLetters[i]), 1);
      }

      else {
        return false;
      }
    }
    return true;
  }

  static scoreWord(word) {
    const scoreChart = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10
    }

    const wordArray = word.toUpperCase().split('');

    let total = 0;

    for (let i = 0; i  < wordArray.length; i += 1) {
      total += scoreChart[wordArray[i]]
    }

    if (wordArray.length > 6 && wordArray.length < 11) {
      total += 8
    }

    return total;
  }

  static highestScoreFrom(words) {
    let highestScore = 0;
    let bestWord = '';
    
    for (let i = 0; i < words.length; i += 1) {
      if (this.scoreWord(words[i]) > highestScore) {
        highestScore = this.scoreWord(words[i])
        bestWord = words[i]
      }

      else if (this.scoreWord(words[i]) === highestScore) {
        if ((words[i].length === 10 && bestWord.length != 10) || (words[i].length < bestWord.length && bestWord.length != 10)) {
          bestWord = words[i]
        }
      }
    }
    return { word: bestWord, score: highestScore };
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
