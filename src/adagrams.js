const Adagrams = {
  drawLetters() {
    const alphabet = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ';
    const lettersInHand = [];

    for (let i = 0; i < 10; i++) {
      lettersInHand.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {  
    let result = true;
    
    for (let i = 0; i < (input.length); i++) {
      if (lettersInHand.includes(input[i]) === false) {
        result = false;
      } else {
        lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
      }
    }
    return result;
  },

  scoreWord(word) {
    const score = { A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2, 
    B:3, C:3, M:3, P:3, F:4, H:4, V:4, W:4, Y:4, K:5, J:8, X:8, Q:10, Z:10 }; 

    let points = 0;
    const wordCheck = word.toUpperCase();

    if (wordCheck.length > 6) {
      points += 8;
    }

    for (let i = 0; i < (wordCheck.length); i++) {
        points += score[wordCheck[i]];
    }
      return points;
  },

  highestScoreFrom(words) {
    let scores = [];

    //Loops through the array of words and calling the method scoreWords to get the scores
    for (let i = 0; i < (words.length); i++) {
      scores.push(Adagrams.scoreWord(words[i]));
    }

    // The Math.max.apply(null, array) finds the max value on the array scores
    // The function indexOf finds the value for the index with the max value
    let correct = { word: words[scores.indexOf(Math.max.apply(null, scores))], score: Math.max.apply(null, scores) };

    // Still need to work on the tie-breaking rules for Wave 4:
    return correct;
  },
};


// I ran each function bewlow and tested also on the console to troubleshoot failing tests etc.
// console.log(Adagrams.highestScoreFrom(["APPLE", "BLUE", "PIE"]))
// console.log(Adagrams.drawLetters());
// console.log(Adagrams.usesAvailableLetters('APPLE', ['A', 'P', 'P', 'L', 'E']));
// console.log(Adagrams.usesAvailableLetters('APPLES', ['A', 'P', 'P', 'L', 'E']));
// console.log(Adagrams.scoreWord('AVAILABLE'))

// Do not remove this line or your tests will break!
export default Adagrams;
