/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/

function charactersNotQuiteAtTheEdge(str) {
  let char1 = str[1];
  let char2 = str[str.length - 2]; // change from 1 to 2 to get second to last char 
  return char1 + char2;
}

console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
