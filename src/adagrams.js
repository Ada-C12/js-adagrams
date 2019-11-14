const Adagrams = {
  
  letterPool: { A: 9, N: 6, B: 2, O: 8, C: 2, P: 2,
                D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4,
                G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, 
                J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2,
                M: 2, Z: 1 },

  drawLetters() {
    return Array(10).fill().map(_ => this.letters()[Math.floor(Math.random()*this.letters().length)]);
  },
  
  letters() {
    let pool = [];

    for(let letter in this.letterPool) {
      pool = pool.concat(Array(this.letterPool.letter).fill(letter));
    }

    return pool;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
