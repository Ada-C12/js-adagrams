const Adagrams = {
  drawLetters() {
//     // Implement this method for wave 1
    const availLetters = {'A':9, 'B':2, 'C':2, 'D':4, 'E':12, 'F':2, 'G':3, 'H':2, 'I':9, 'J':1, 'K':1, 'L':4, 'N':6, 'O':8, 'P':2, 'Q':1, 'R':6, 'S':4, 'T':6,'U':4, 'V':2, 'W':2, 'X':1, 'Y':2, 'Z':1 }

    let letterArray = []
    
    for (let letter in availLetters) {
      for (let x = 0; x < availLetters[letter]; x++){
        letterArray.push(letter);
      }
    }

    //Found Help with random on StackOverflow
    letterArray.sort(() => Math.random() - Math.random());

    letterArray = letterArray.slice(0,10);

    return letterArray;
  },
  
  usesAvailableLetters(input, lettersInHand) {
    const word = input.toUpperCase().split('');
    const hand = lettersInHand;
    console.log(hand);
    console.log(word);
    for (let letter in word) {
      const index = hand.indexOf(word[letter]);
      if (index < 0) {
        return false;
      } else {
        delete hand[index];
      }
      console.log(hand);
    }
    return true;
  },

  scoreWord(word) {
    const scoring = {1:['A','E','I','O','U','L','N','R','S','T'], 2:['D','G'], 3:['B','C','M','P'], 4:['F','H','V','W','Y'], 5:['K'], 8:['J','X'], 10:['Q','Z']}

    let score = 0;

    if(word.length >= 7) {
      score += 8;
    }
    
    const wordArray = word.toUpperCase().split('');

    for (let letter in wordArray) {
      for (const [k,v] of Object.entries(scoring)) {
        if (v.includes(wordArray[letter])===true){
          score += Number(k);
        }
      }
    }
    return score;
  },
};

// console.log(Adagrams);
// Do not remove this line or your tests will break!
export default Adagrams;
