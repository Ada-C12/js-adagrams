const Adagrams = {

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
  };

  // push alphabet into array with number it is expected to occur
  let letterSet = []
  for 
  (let element in letters) {
    count = letters[element] + 1
    do {
      count -= 1
      letterSet.push(element);
    } while (count > 0);
  };



  // Using Fisher-Yates/Knuth Shuffle
  function drawLetters(array) {
    length = array.length - 1
    for (let i = length; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  let shuffledArr = drawLetters(letterSet)
  let selectedLetters = shuffledArr.slice(0,10)

  
    // Draws 10 letters 
    // If the letter is drawn, the value should decrease by one
    // A letter cannot be drawn if the value is 0
  // },
// };

// Do not remove this line or your tests will break!
export default Adagrams;
