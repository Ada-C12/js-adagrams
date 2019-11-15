const allLetters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", 
"E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I",
"I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", 
"O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S",
"T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z" ]

const Adagrams = {
  
  drawLetters() {
    let letters = allLetters
    let hand = [];
    for (let i = 0; i < 10; i ++) {
      let index = Math.floor(Math.random() * letters.length)
      let rand = letters[index];
      hand.push(rand);
      letters.splice(index, 1);
    }
    return hand;
  },

  usesAvailableLetters(word, drawn) {
    if (word.length > 10) {
      return false; 
    }
    
    let x = true;
    let j = 0;
    let i = 0;
    
    while (x === true && j < word.length) {
      if (drawn.includes(word[i])) {
        let x = drawn.indexOf(word[i])
        drawn.splice(x, 1);
        i ++;
        j ++;
      } else {
        x = false;
      }
    }
    return x;
  },

  scoreWord(word) {
    let score = 0;
    const correctWord = word.toUpperCase()
    if (correctWord.length >= 7) {
      score += 8;
    }
   
    for (let i = 0; i < correctWord.length; i ++) {
      
      if(["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(correctWord[i])) {
        score += 1;
      } else if(["D", "G"].includes(correctWord[i])) {
        score += 2;
      } else if(["B", "C", "M", "P"].includes(correctWord[i])) {
        score += 3;
      } else if(["F", "H", "V", "W", "Y"].includes(correctWord[i])) {
        score += 4;
      } else if(["K"].includes(correctWord[i])) {
      score += 5;
      } else if(["J", "X"].includes(correctWord[i])) {
      score += 8;
      } else if(["Q", "Z"].includes(correctWord[i])) {
      score += 10;
      }
    }
    return score; 
  },

  highestScoreFrom (array) {
    let words = []
    array.forEach(function(word)) {
      const word = {
        length: word.length,
        score: scoreWord(word)
      }
      words.push(word)
    }

    let max = {
      length: 0,
      score: 0
    }
    words.forEach(function(played)) {
      if (played.score > max.score) || (played.score === max.score && played.length > max.length)
    }
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
