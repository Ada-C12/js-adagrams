const Adagrams = {
  lettersPool: {
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
  },
  
  getAllLetters() {
    let lettersArray = []
    for (const letter in this.lettersPool) {
      for (let i = 0; i < this.lettersPool[letter]; i++){
        lettersArray.push(letter)
      }
    }
    return lettersArray
  },
  
  drawLetters() {
    // Implement this method for wave 1
    let letters = [...this.getAllLetters()]
    const myLetters = []
    for (let i = 0; i < 10; i++){
      // select a random index
      let index = Math.floor(Math.random() * letters.length)
      
      let letter = letters[index]
      myLetters.push(letter)
      
      // swap them with the last letter, then pop it out, save a lot of time than deleting directly
      let lastLetter = letters[letters.length - 1]
      letters[letters.length - 1] = letter
      letters[index] = lastLetter
      letters.pop()
    }
    return myLetters
  },
  
  usesAvailableLetters(input, lettersInhand) {
    let lettersObject = {}
    lettersInhand.forEach(function (letter) {
      if (lettersObject[letter]){
        lettersObject[letter]++
      } else {
        lettersObject[letter] = 1
      }
    })
    console.log(lettersObject)
    let result = true
    input.toUpperCase().split('').forEach(function (letter) {
      if (lettersObject[letter] && lettersObject[letter] > 0) {
        lettersObject[letter]--
      } else {
        result = false
      }
    })
    return result
  },
  
  lettersValue: {
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
  },
  
  scoreWord(word) {
    let wordPoint = 0
    word.toUpperCase().split('').forEach(letter => {
      wordPoint += this.lettersValue[letter]
    })
    if (word.length > 6) {
      wordPoint += 8
    }
    return wordPoint
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;