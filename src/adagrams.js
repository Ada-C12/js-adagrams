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
    let garbage_index = array.indexOf(element);
    array.splice(garbage_index, 1);
  },

  usesAvailableLetters(input, lettersInHand) {
    // input = string, supposedly made from the lettersInHand
    // lettersInHand = array of 10 single-letter strings
    // returns T if input is legit, else F
    for (let i=0; i<input.length; i++) {

      if (lettersInHand.includes(input[i])) {
        this.remove(input[i], lettersInHand);
      } else {
        return false;
      }
    }
    return true;
  },

};

// console.log(Adagrams.usesAvailableLetters("abcda", ['a','b','c','d','e']));



// Do not remove this line or your tests will break!
export default Adagrams;
