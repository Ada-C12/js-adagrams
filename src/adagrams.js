const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPool = {'A':9, 'B':2, 'C':2, 'D':4, 'E':12, 'F':2, 'G':3, 'H':2, 'I':9, 'J':1, 'K':1, 'L':4, 'N':6, 'O':8, 'P':2, 'Q':1, 'R':6, 'S':4, 'T':6,'U':4, 'V':2, 'W':2, 'X':1, 'Y':2, 'Z':1 }

    

    let lettersInHand = [];

    // add logic for re-drawing a letter if total count of letters in pool have already been drawn
    
    for (let index = 0; index < 10; index++) {
      // code below courtesy of https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
      let randomLetter = letterPool[Math.floor(Math.random() * letterPool.length)];
      lettersInHand.push(randomLetter)
    }
    return playerHand
  }

  usesAvailableLetters(input, lettersInHand)

};

// Do not remove this line or your tests will break!
export default Adagrams;
