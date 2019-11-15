const Adagrams = {
 
  drawLetters() {
// //     // Implement this method for wave 1
  let letterPool = [
  Array(9).fill('A'),Array(2).fill('B'),Array(2).fill('C'),
  Array(4).fill('D'),Array(12).fill('E'),Array(2).fill('F'),
  Array(3).fill('G'),Array(2).fill('H'),Array(9).fill('I'),
  Array(1).fill('J'),Array(1).fill('K'),Array(4).fill('L'),
  Array(2).fill('M'),Array(6).fill('N'),Array(8).fill('O'),
  Array(2).fill('P'),Array(1).fill('Q'),Array(6).fill('R'),
  Array(4).fill('S'),Array(6).fill('T'),Array(4).fill('U'),
  Array(2).fill('V'),Array(2).fill('W'),Array(1).fill('X'),
  Array(2).fill('Y'),Array(1).fill('Z'),
  
  
  ].flat(2);

  let hand = [];

  for (let i = 0; i < 10; i += 1) {
    const randomIndex = Math.floor(Math.random() * 99);
    hand.push(letterPool[randomIndex]);
  }

  return hand;

  },

  usesAvailableLetters(word, hand) {
    let handObj = {};
    let result = true;

    hand.forEach(function(letter){
      if(handObj[letter] ){
        handObj[letter] += 1;
      }else{
        handObj[letter] = 1;
      }

    })

    word.split('').forEach(function(letter){
      if (handObj[letter]){
        handObj[letter] -= 1; 
        if (handObj[letter] == 0) {
          delete handObj[letter];
        } 
      }else {
        result = false;
      }
    })
    return result; 

  },

  scoreWord(word) {
    let score = 0;
    let letterScore = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    
    }
    word.toUpperCase().split('').forEach(function(letter){
      score += letterScore[letter]
    })
    if (word.length >= 7){
      score += 8 
    }

    return score;
  }
  

}



// Do not remove this line or your tests will break!
export default Adagrams;
