const Adagrams = {
  startingLetters: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B","B","C","C","D","D","D","D","E","E","E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R","R", "R", "R", "R", "S", "S", "S", "S", "T", "T","T","T","T","T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"],

  drawLetters() {
    let copyLetters = Adagrams.startingLetters.map(num => num)
    let playersLetters = [];
    for (let i = 0; i < 10; i +=1 ) {
      let index = Math.floor(Math.random() * copyLetters.length)
      let letter = copyLetters[index]
      playersLetters.push(letter);
      copyLetters.splice(index, 1);
    }
    return playersLetters;
  }

};
console.log(Adagrams.drawLetters())
// Do not remove this line or your tests will break!
export default Adagrams;
