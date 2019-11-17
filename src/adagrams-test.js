let inputArray = [ 'J', 'I', 'L', 'T' ]
let handHash = { L: 2, T: 1, I: 2, N: 1, O: 1, J: 1, D: 2 }


inputArray.forEach(letter => {
  if (handHash[letter] == null) {
    return false;
 } else {
   handHash[letter] -= 1;
 }
});

console.log(handHash)

for (let index = 0; index < inputArray.length; index++) {
  if (handHash[inputArray[index]] < 0 || handHash[inputArray[index]] == null) {
  console.log(`${inputArray[index]} is false`)
  } else {
  console.log(`${inputArray[index]} is true`)
  }
}