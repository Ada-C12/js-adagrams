const Adagrams = {
  frequencies: [
    ["A",9],
    ["B", 2],
    ["C", 2],
    ["D", 4],
    ["E", 12],
    ["F", 2],
    ["G", 3],
    ["H", 2],
    ["I", 9],
    ["J", 1],
    ["K", 1],
    ["L", 4],
    ["M", 2],
    ["N", 6],
    ["O", 8],
    ["P", 2],
    ["Q", 1],
    ["R", 6],
    ["S", 4],
    ["T", 6],
    ["U", 4],
    ["V", 2],
    ["W", 2],
    ["X", 1],
    ["Y", 2],
    ["Z", 1],
  ],

  makeNewBag() {
    let bag = [];

    for (let i=0; i<this.frequencies.length; i++) {

      let entry = this.frequencies[i];

      for (let j=0; j<entry[1]; j++) {
        bag.push(entry[0]); 
      }
    }
    return bag;
  },
  
  drawLetters() {
    // draw 10 letters from newBag, return as array of 10 strings
    let newBag = this.makeNewBag();
    let tray = [];
    // console.log(newBag);

    for (let i=0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * newBag.length);

      // remove from bag...
      newBag.splice(randomIndex, 1);

      // ...add to player's tray
      tray.push(newBag[randomIndex]);
    }
    return tray;
  },

  remove(element, array) {
    // removes a single element from array
    let garbageIndex = array.indexOf(element);
    array.splice(garbageIndex, 1);
  },

  usesAvailableLetters(inputAnyCase, lettersInHand) {
    // input = string, supposedly made from the lettersInHand
    // lettersInHand = array of 10 single-letter strings
    // returns T if input is legit, else F
    let input = inputAnyCase.toUpperCase();

    for (let i=0; i<input.length; i++) {
      if (lettersInHand.includes(input[i])) {
        this.remove(input[i], lettersInHand);
      } else {
        return false;
      }
    }
    return true;
  },

  chart: [
    [['A','E','I','O','U','L','N','R','S','T'], 1],
    [['D','G'], 2],
    [['B','C','M','P'], 3],
    [['F','H','V','W','Y'], 4],
    [['K'], 5],
    [['J','X'], 8],
    [['Q','Z'], 10],
  ],

  scoreWord(wordAnyCase) {
    // evals word value according to chart, and returns integer of points
    let sum = 0;
    let word = wordAnyCase.toUpperCase();

    // assign value according to this.chart
    for (let i=0; i<word.length; i++) {
      for (let entry of this.chart) {
        if (entry[0].includes(word[i])) {
          sum += entry[1];
          break;
        }
      }
    }

    // extra 8 points if length = 7-10
    if ((word.length >= 7) && (word.length <= 10)){
      sum += 8;
    }

    return sum;
  },

  highestScoreFrom(words) {
    let results = { word: null, score: null, };
    
    const scores = words.map(word => Adagrams.scoreWord(word));
    const max = Math.max(...scores);
    results.score = max;

    // what if more than 1 scored the same max?
    // i got this line from stackoverflow https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
    const winners_indices = [...scores.keys()].filter(index => scores[index] === max);

    console.log(`scores = ${scores}`);
    console.log(winners_indices);

    if (winners_indices.length === 1) {
      results.word = words[winners_indices[0]];
    } else {
      // hierarchy for best winner: 10-letters > shortest > earliest-index
      let winners = winners_indices.map (index => words[index]);

      let winner10Letters = winners.filter(word => word.length === 10);
      console.log(winner10Letters);
      
      if (winner10Letters.length > 0 ) {
        results.word = winner10Letters[0];
      } else {
        // yeah this line below doesn't work...
        // let shortestWinners = winners.filter(word => Math.min(...word.length));
        // results.word = shortestWinners[0];
      }
    }

    return results;
  },

};

let words = ["haha", "quaz", "cat", "quiz"];
console.log(Adagrams.highestScoreFrom(words));
// Do not remove this line or your tests will break!
// export default Adagrams;
