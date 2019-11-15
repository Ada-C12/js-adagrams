
const letterDistribution = {
  A : 9, B : 2, C : 2, D : 4,
  E : 12, F : 2, G : 3, H : 2,
  I : 9, J : 1, K : 1, L : 4,
  M : 2, N : 6, O : 8, P : 2,
  Q : 1, R : 6, S : 4, T : 6,
  U : 4, V : 2, W : 2, X : 1,
  Y : 2, Z : 1
}

const letterScore = {
  A : 1, E : 1, I : 1, O : 1, U : 1, L : 1, N : 1, R : 1, S : 1, T : 1,
  D : 2, G : 2,
  B : 3, C : 3, M : 3, P : 3,
  F : 4, H : 4, V : 4, W : 4, Y : 4,
  K :	5,
  J : 8, X : 8,
  Q : 10, Z : 10,
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
  },

  scoreWord(word) {
    let cleaned_word = word.toUpperCase();
    let score = 0;

    for(let i = 0; i < cleaned_word.length; i++ ) {
      score += letterScore[cleaned_word[i]];
    };

    if (cleaned_word.length > 6 && cleaned_word.length < 11) {
      score += 8;
    };

    return score;
  }
}



// Do not remove this line or your tests will break!
export default Adagrams;
