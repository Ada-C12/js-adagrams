const poolOfLetters = ( 
  "A".repeat(9) + 
  "B".repeat(2) + 
  "C".repeat(2) + 
  "D".repeat(4) + 
  "E".repeat(12) + 
  "F".repeat(2) + 
  "G".repeat(3) + 
  "H".repeat(2) + 
  "I".repeat(9) + 
  "J".repeat(1) + 
  "K".repeat(1) + 
  "L".repeat(4) + 
  "M".repeat(2) + 
  "N".repeat(6) + 
  "O".repeat(8) + 
  "P".repeat(2) + 
  "Q".repeat(1) + 
  "R".repeat(6) + 
  "S".repeat(4) + 
  "T".repeat(6) + 
  "U".repeat(4) + 
  "V".repeat(2) + 
  "W".repeat(2) + 
  "X".repeat(1) + 
  "Y".repeat(2) + 
  "Z".repeat(1)
  ).split('');

const Adagrams = {
  // thank you stackoverflow: https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
  shuffle(letterbank) {
    for (let i = 0; i < letterbank.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (letterbank.length - i));

        let temp = letterbank[j];
        letterbank[j] = letterbank[i];
        letterbank[i] = temp;
    }
  },

  drawLetters() {
    let poolOfLettersCopy = [...poolOfLetters]
    this.shuffle(poolOfLettersCopy)
    return poolOfLettersCopy.slice(0,10);
  },

  usesAvailableLetters(input, lettersInHand) {
    let handHash = new Object();
    for (l in lettersInHand) {
      if (handHash.hasOwnProperty(l)) {
        handHash[l] += 1;
      }
      else {
        handHash[l] = 1; 
      }
    }
    console.log(handHash);
  }
};

// WAVE 2
// forin loop
// undefined not null
// if not in hand, pop off (don't use an object, keep as array)
// console.log(Adagrams.drawLetters());

// // logic for wave 2 here
// // if input .includes(lettersInHand);
// return true
// // elseif return false: quantity or lettersInHand

//     usesAvailableLetters(input, lettersInHand)
//     //  if pool.includes?(lettersInHand)
//     // return true

// uses_available_letters(){
//   let uses_available_letters(word, letters_in_hand)
//   hand_hash = letters_in_hand.uniq.map { |x| [x, letters_in_hand.count(x)] }.to_h
//   word_array = word.upcase.split("")
//   letter_check = []

//   word_array.map do |letter|
//     if hand_hash[letter].class == Integer
//       if hand_hash[letter] >= 1
//         hand_hash[letter] -= 1
//         letter_check << "True"
//       elsif hand_hash[letter] == 0
//         letter_check << "False"
//         end
//         else
//           letter_check << "False"
//         end
//       end
//       return letter_check.include?("False") ? false : true
//     end



// //         // wave 3
// //     // return false 
// //     // function to score words: scoreWord (put this in Adagrams object)
// //     // word (string)
// //     // returns integer representing points
// //     // each letter in word has points value
// //     // if length is 7,8,9,10, +8 points to score

// //     const scoreWord = 
// //     split('')
// //     // map letters
// //     // if X const, add 1 etc
// //     catagoryOne = ['A','E','I','O','U','L','N','R','S','T'] = 1
// //     catagoryTwo = ['D','G'] = 2
// //     catagoryThree = ['B','C','M','P'] = 3
// //     catagoryFour = ['F','H','V','W','Y'] = 4
// //     catagoryFive = ['K'] = 5
// //     catagorySix = ['J','X'] = 8
// //     catagorySeven = ['Q','Z'] = 10


// //     if scoreWord == catagoryOne += 1
// //     elsif scoreWord == catagoryTwo += 2
// //     elsif scoreWord == catagoryThree += 3
// //     elsif scoreWord == catagoryFour += 4
// //     elsif scoreWord == catagoryFive += 5
// //     elsif scoreWord == catagorySix += 8
// //     elsif scoreWord == catagorySeven += 10

// //     if scoreWord.length == 7 || 8 || 9 || 10
// //     += 8 score 


// Do not remove this line or your tests will break!
export default Adagrams;


