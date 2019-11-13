
const letterDistribution = {
  A : 9, B : 2, C : 2, D : 4,
  E : 12, F : 2, G : 3, H : 2,
  I : 9, J : 1, K : 1, L : 4,
  M : 2, N : 6, O : 8, P : 2,
  Q : 1, R : 6, S : 4, T : 6,
  U : 4, V : 2, W : 2, X : 1,
  Y : 2, Z : 1
}

function createLetterArray() {
  let letterArray = []
  Object.keys(letterDistribution).forEach(function(letter) {
    for(let i = 0; i < letterDistribution[letter]; i++) {        
      letterArray.push(letter);
    }
  });
  return letterArray
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Adagrams = {
  drawLetters() {
    let letterArray = createLetterArray()
    let drawnHand = []
    for(let i = 0; i < 10; i++) {   
      let randomIndex = getRandomInt(letterArray.length - 1)
      drawnHand.push(letterArray[randomIndex]);
      letterArray.splice(randomIndex , 1);
    }
    return drawnHand
  },
  
  usesAvailableLetters(word, drawn) {
    if (word.length > drawn.length) {
      return false
    };
    
    let hand = {}
    drawn.forEach (function(letter) {
      if (letter in hand) {
        hand[letter]++;
      } else {
        hand[letter] = 1;
      }
    });
    
    for(let i = 0; i < word.length; i++ ) {
      if (word[i] in hand && hand[word[i]] > 0) {
        hand[word[i]]--;
      } else {
        return false;
      }
    }
    return true;
  }
}





// Do not remove this line or your tests will break!
export default Adagrams;
