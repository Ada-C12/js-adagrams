Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@CEsGutierrez 
Code Pull requests 0 Projects 0 Wiki Security Pulse
js-adagrams/src/demo/adagrams.js
@tildeee tildeee rename 'game' to 'demo game' and all the appropriate files and commit…
f3a2b32 on May 19
45 lines (33 sloc)  892 Bytes
  
import Real from 'adagrams';

const Stub = {
  drawLetters() {
    const defaultLetters = ['H', 'E', 'L', 'L', 'O', 'W', 'O', 'R', 'L', 'D'];

    if(typeof Real.drawLetters === 'function') {
      return Real.drawLetters() || defaultLetters;
    }

    return defaultLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    if(typeof Real.usesAvailableLetters === 'function') {
      return Real.usesAvailableLetters(input, lettersInHand);
    }

    return true;
  },

  scoreWord(word) {
    if(typeof Real.scoreWord === 'function') {
      return Real.scoreWord(word);
    }

    return -1;
  },

  highestScoreFrom(words) {
    if(typeof Real.highestScoreFrom === 'function') {
      return Real.highestScoreFrom(words);
    }

    if(words.length < 1) return null;

    return {
      word: words[0],
      score: Stub.scoreWord(words[0]),
    };
  },
};

export default Stub;
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About