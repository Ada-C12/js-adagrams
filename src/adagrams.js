const Adagrams = {
  drawLetters() {
    let letterPool = (
      "A".repeat(9) +
      "B".repeat(2) +
      "C".repeat(2) +
      "D".repeat(4) +
      "E".repeat(12) +
      "F".repeat(2) +
      "G".repeat(3) +
      "H".repeat(2) +
      "I".repeat(9) +
      "J" +
      "K" +
      "L".repeat(4) +
      "M".repeat(2) +
      "N".repeat(6) +
      "O".repeat(8) +
      "P".repeat(2) +
      "Q" +
      "R".repeat(6) +
      "S".repeat(4) +
      "T".repeat(6) +
      "U".repeat(4) +
      "V".repeat(2) +
      "W".repeat(2) +
      "X" +
      "Y".repeat(2) +
      "Z"
    ).split("");
    let hand = [];

    for (let i = 0; i < 10; i++) {
      letterPool.sort(() => Math.random() - 0.5);
      hand.push(letterPool.pop());
    }

    return hand;
  },

  usesAvailableLetters(input, hand) {
    let split = input.toUpperCase().split("");
    let copy = hand.slice(0);

    for (let letter in split) {
      if (copy.includes(split[letter])) {
        copy.splice(copy.indexOf(split[letter]), 1);
      } else {
        return false;
      }
    }
    return true;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
