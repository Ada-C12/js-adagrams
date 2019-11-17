const Adagrams = {
  drawLetters() {
    // eslint-disable-next-line max-len
    const letters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

    const shuffleLetters = function(array) {
      //used online resources to piece this together
      let i = array.length - 1;
      while (i > 0) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i--;
      }
      return array;
    };

    const randomOrder = shuffleLetters(letters)

    const createHand = function(array) {
      const drawn = []
      while (drawn.length < 10) {
        const letter = array[0]
        drawn.push(letter);
        array.shift();
      } 
      return drawn;
    };
    return(createHand(randomOrder));
     
  },


  usesAvailableLetters(word,drawn) {
  },
  
};

// Do not remove this line or your tests will break!
export default Adagrams;
