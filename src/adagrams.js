const Adagrams = {
  drawLetters() {
    // eslint-disable-next-line max-len
    const letters = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];

    const shuffleLetters = function(array) {
      //used online resources to piece this together
      let i = array.length - 1;
      while (i > 0) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i--;
      }
      return array;
    };

    const randomOrder = shuffleLetters(letters)

    const createHand = function(array) {
      const drawn = []
      while (drawn.length < 10) {
        const letter = array[0]
        drawn.push(letter);
        array.shift();
      } 
      return drawn;
    };
    return(createHand(randomOrder));
     
  },


  usesAvailableLetters(input, lettersInHand) {
    const hand = {}
    let outcome = true
    lettersInHand.forEach(element => {
      if (hand[element]) {
        hand[element] += 1;
      } else {
        hand[element] = 1;
      }
    });
  
    const letters = input.split('')

    letters.forEach(char => {
      if (hand[char] < 0) {
        outcome = false;
      } else if (hand[char]) {
        hand[char] -= 1;
      } else {
        outcome = false;
      } 
    });
    return outcome;
    
  },

  scoreWord(input) {
    const letterPoints = {
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

    let total = 0
    const word = input.toUpperCase()

    if (word.length > 6) {total += 8}

    const letters = word.split('')
    letters.forEach(char => {
      total += letterPoints[char]
    });
    return total
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
