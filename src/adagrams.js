// 1. Set up array data structure:
const pool = Array(9).fill('A').concat(
  Array(2).fill('B'), 
  Array(2).fill('C'),
  Array(4).fill('D'),
  Array(12).fill('E'),
  Array(2).fill('F'),
  Array(3).fill('G'),
  Array(2).fill('H'),
  Array(9).fill('I'),
  Array(1).fill('J'),
  Array(1).fill('K'),
  Array(4).fill('L'),
  Array(2).fill('M'),
  Array(6).fill('N'),
  Array(8).fill('O'),
  Array(2).fill('P'),
  Array(1).fill('Q'),
  Array(6).fill('R'),
  Array(4).fill('S'),
  Array(6).fill('T'),
  Array(4).fill('U'),
  Array(2).fill('V'),
  Array(2).fill('W'),
  Array(1).fill('X'),
  Array(2).fill('Y'),
  Array(1).fill('Z')
);
let POOL = pool;

const Adagrams = {

  drawLetters() {
    let i = 0;
    const lettersInHand = new Array(10);
    while (i < 10) {
      lettersInHand[i] = POOL[Math.floor(Math.random() * POOL.length)];
      i += 1;
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersObj = new Object();
    lettersInHand.forEach(function(element){
      if (lettersObj[element]) {
        lettersObj[element] += 1;
      } else {
        lettersObj[element] = 1;
      }
    });

    let j = 0;
    while (j < input.length) {
      if (lettersObj[input.charAt(j)]) {
        lettersObj[input.charAt(j)] -= 1;
      } else {
        return false;
      }
      j += 1;
    }

    let n = 0;
    while (n < lettersObj.length) {
      if (lettersObj[j] < 0) {
        return false;
      }
      n += 1; 
    }
    return true
  },

  scoreChart : {
    A : 1,
    E : 1,
    I : 1,
    O : 1,
    U : 1,
    L : 1,
    N : 1,
    R : 1,
    S : 1,
    T : 1,
    D : 2,
    G : 2,
    B : 3,
    C : 3,
    M : 3,
    P : 3,
    F : 4,
    H : 4,
    V : 4,
    W : 4,
    Y : 4,
    K : 5,
    J : 8,
    X : 8,
    Q : 10,
    Z : 10
  },

  scoreWord(word) {
    const final_word = word.toUpperCase();
    let score = 0;
    let m  = 0;
    while (m < final_word.length) {
      score += this.scoreChart[final_word.charAt(m)];
      m += 1;
    }

    switch (final_word.length) {
      case 7:
      case 8:
      case 9:
      case 10:
        score += 8;
        break;
    }

    return score
  },
}

// Do not remove this line or your tests will break!
export default Adagrams;