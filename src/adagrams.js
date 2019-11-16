const Adagrams = {
  drawLetters() {
    const poolOfLetters = [['A', 9], ['B', 2], ['C', 2], ['D', 4], ['E', 12], ['F', 2], ['G', 3], ['H', 2], ['I', 9], ['J', 1], ['K', 1], ['L', 4], ['M', 2], ['N', 6], ['O', 8], ['P', 2], ['Q', 1], ['R', 6], ['S', 4], ['T', 6], ['U', 4], ['V', 2], ['W', 2], ['X', 1], ['Y', 2], ['Z', 1]];

    let totalLetters = [];

    poolOfLetters.forEach(function(letter) {
      for(let i = 0; i < letter[1]; i++) {
        totalLetters.push(letter[0]);
      }
    })

    let drawHand = [];

    for (let i = 0; i < 10; i++) {
      const rand = totalLetters[Math.floor(Math.random() * totalLetters.length)];
      drawHand.push(rand);
    }

    return drawHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let i = 0;
    
    while (i < input.length) {
      if (!lettersInHand.includes(input[i])) {
        return false;
      } else if (lettersInHand.includes(input[i])) {
        let index = lettersInHand.indexOf(input[i]);
        lettersInHand.splice(index, 1)
      }
      i++;
    }
    
    return true 
  },

  scoreWord(word) {
    word = word.toUpperCase()
    let scorePoints = 0;

    const scoreBoard = [['A', 1], ['E', 1], ['I', 1], ['O', 1], ['U', 1], ['L', 1], ['N', 1], ['R', 1], ['S', 1], ['T', 1], ['D', 2], ['G', 2], ['B', 3], ['C', 3], ['M', 3], ['P', 3], ['F', 4], ['H', 4], ['V', 4], ['W', 4], ['Y', 4], ['K', 5], ['J',8], ['X',8], ['Q',10], ['Z',10]];

    for (let i = 0; i < word.length; i++) {
      scoreBoard.forEach(function(score) {
        if (word[i] == score[0]) {
          scorePoints += score[1];
        }
      });
    }

    if (word.length >= 7) {
      scorePoints += 8
    }

    return scorePoints
  },
};


// Do not remove this line or your tests will break!
export default Adagrams;
