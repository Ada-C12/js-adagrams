const letterDistribution = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
}

const allLetters = []

for (let letter in letterDistribution) {
  let i = 0;
  while (i < letterDistribution[letter]) {
    allLetters.push(letter);
    i += 1;
  }
}

// https://css-tricks.com/snippets/javascript/shuffle-array/
allLetters.sort(function() { return 0.5 - Math.random() });

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    return allLetters.slice(0, 10);
  },
};


console.log(Adagrams.drawLetters())


// •	Returns an array of ten strings
// o	Each string should contain exactly one letter
// o	These represent the hand of letters that the player has drawn
// •	The letters should be randomly drawn from a pool of letters
// o	This letter pool should reflect the distribution of letters as described in the table below
// o	There are only 2 available C letters, so drawLetters cannot ever return more than 2 Cs
// o	Since there are 12 Es but only 1 Z, it should be 12 times as likely to draw an E as a Z
// •	Invoking this function should not change the pool of letters
// o	Imagine that the user returns their hand to the pool before drawing new letters









// Do not remove this line or your tests will break!
export default Adagrams;
