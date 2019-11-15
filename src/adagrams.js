import { log } from "util";

const Adagrams = {
  drawLetters() {
    const letters = {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4, 
    "E": 12, 
    "F": 2,
    "G": 3, 
    "H": 2,
    "I": 9, 
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1 
  }

  let lettersClone = {...letters};
  let hand = [];
  let lettersKeys = Object.keys(lettersClone);

  while (hand.length < 10) {
    let tile = lettersKeys[Math.floor(Math.random() * 26) + 1];
    let tileCount = lettersClone[tile];
    if (tileCount > 0) {
      lettersClone[tile] -=1
      hand.push(tile)
    }
  }

  return hand
  }, 
  usesAvailableLetters(input, lettersInHand) {    
    let inputArray = input.split("");
    let result;

    let false_check
    inputArray.forEach(letter => {
      if (lettersInHand.includes(letter) == true) {
        lettersInHand.splice(lettersInHand.indexOf(letter),1);
        result = true;
      } else {
        false_check = false;
      }
    });

    if (false_check === false) {
      return false_check
    } else {
      return result
    }

  },
  scoreWord(word) {
    const score_chart = { 
    1: ["A", "E", "I", "O", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  }

    let score_total = 0;
    let word_array = word.toUpperCase().split("");

    word_array.forEach(function (letter) {
      Object.keys(score_chart).forEach(function (key) {
        if (score_chart[key].includes(letter)) {
          score_total += parseInt(key);
        }
      })
    })

    if (word.length > 6) {
      score_total += 8
    }
    
    return score_total;
  }
};

// console.log(Adagrams.usesAvailableLetters("GOOD", ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X']))

// Do not remove this line or your tests will break!
export default Adagrams;
