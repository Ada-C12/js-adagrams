const Adagrams = {
  startingLetters: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B","B","C","C","D","D","D","D","E","E","E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R","R", "R", "R", "R", "S", "S", "S", "S", "T", "T","T","T","T","T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"],

  drawLetters() {
    let copyLetters = Adagrams.startingLetters.map(num => num)
    let playersLetters = [];
    for (let i = 0; i < 10; i +=1 ) {
      let index = Math.floor(Math.random() * copyLetters.length)
      let letter = copyLetters[index]
      playersLetters.push(letter);
      copyLetters.splice(index, 1);
    }
    return playersLetters;
  },

  usesAvailableLetters(word, lettersInHand) {
    let handValues = {};

    lettersInHand.forEach(function(letter){
      if (handValues[letter] == null){
        handValues[letter] = 1
      } else {
        handValues[letter] += 1
      }
    });

    let valid = true; 

    word.split('').forEach(function(letter){
      if ((handValues[letter] === undefined) || (handValues[letter] === 0)){
        valid = false
      } 
      else {
       handValues[letter] -= 1
       console.log(handValues)
      };
    })
    return valid
  },

  scoreWord(word){
    const letterScore = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5, J: 8, X: 8, Q: 10, Z: 10
    };

    let score = 0;
    const bonusPoints = [7, 8, 9, 10];

    if (bonusPoints.includes(word.length)) {
      score += 8
    }

    word.toUpperCase().split('').forEach(function(letter){
      score += letterScore[letter]
    });

    return score

  }

};
console.log(Adagrams.drawLetters())
// Do not remove this line or your tests will break!
export default Adagrams;


