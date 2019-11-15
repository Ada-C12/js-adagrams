const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    // populate pool of numbers
    const poolOfLetters = [['A', 9], ['B', 2], ['C', 2], ['D', 4], ['E', 12], ['F', 2], ['G', 3], ['H', 2], ['I', 9], ['J', 1], ['K', 1], ['L', 4], ['M', 2], ['N', 6], ['O', 8], ['P', 2], ['Q', 1], ['R', 6], ['S', 4], ['T', 6], ['U', 4], ['V', 2], ['W', 2], ['X', 1], ['Y', 2], ['Z', 1]];

    let totalLetters = [];

    poolOfLetters.forEach(function(letter) {
      for(let i = 0; i < letter[1]; i++) {
        totalLetters.push(letter[0]);
      }
    })

    //draw 10 from pool of numbers
    let drawHand = [];

    for (let i = 0; i < 10; i++) {
      const rand = totalLetters[Math.floor(Math.random() * totalLetters.length)];
      drawHand.push(rand);
    }
    //return the hand
    return drawHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    // lettersInHand = drawLetters();
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

    //return true or false
  },
};


// Do not remove this line or your tests will break!
export default Adagrams;
