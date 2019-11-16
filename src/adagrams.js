import { arrayExpression, conditionalExpression } from "@babel/types";
import { endianness } from "os";

const LETTER_POOL = {'A': 9, 'B': 2, 'C': 2, 'D':4, 'E':12, 'F': 2, 'G':3, 'H':2, 'I': 9, 'J': 1, 'K':1, 'L':4, 
'M':2, 'N': 6, 'O':8, 'P':2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V' : 2, 'W' :2, 
'X' : 1, 'Y': 2, 'Z': 1 };

const Adagrams = {
  
  drawLetters() {
  let letters = [];
  for(let key in LETTER_POOL){
    for(let i = 0; i < LETTER_POOL[key]; i += 1){
      letters.push(key);
    }
  };
  let hand = [];
  
  for(let i = 0; i < 10; i += 1){
    const rand = letters[Math.floor(Math.random() * letters.length)];
    hand.push(rand); 
  }
  return hand;
  },

 usesAvailableLetters(input, lettersHand) {
  //take lettersHand and then make an objectHash with a count of letters
  //then check input and then iterate through the the word check to see if that specific
  //char is in objHand hash and that the count > 0 if it is then subtract 1 from it else return false.abs

  let objHand = {};

  for (let letter of lettersHand) {
    if (objHand[letter]) {
      objHand[letter] += 1;
    } else {
      objHand[letter] = 1;
    }  
   }

  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (objHand[letter] && objHand[letter] > 0){
      objHand[letter] -= 1;
     } else {
     return false;
     }
  }
  return true;
  },

scoreWord(word){
//create score Object to hold score
//for letter in word go to letterScores object and its value.
//Once you get the value add it to totalscore
//once you are done go out of loop and return score.
const letterScores = {'A': 1, 'B': 3, 'C': 3, 'D':2, 'E':1, 'F': 4, 'G':2, 'H':4, 'I': 1, 'J': 8, 'K':5, 'L':1, 
'M':3, 'N': 1, 'O':1, 'P':3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V' : 4, 'W' :4, 
'X': 8, 'Y': 4, 'Z': 10 };

if (word === ""){
  return 0;
}
let totalScore = 0;

for (let i = 0; i < word.length; i++) {
  let letter = word[i].toUpperCase();
   totalScore += letterScores[letter];
   };
   return parseInt(totalScore); 


//iterate through the word and check each letters score in score word hash,
//if the word letter is in object then add the value to the score variable
//then check the length of each of the  

},









};

// Object.keys(LETTER_POOL).forEach(function(key){
//   for(let i = 0; i < LETTER_POOL[key]; i += 1){
//     letters.push(key);
//   }





// Do not remove this line or your tests will break!
export default Adagrams;
