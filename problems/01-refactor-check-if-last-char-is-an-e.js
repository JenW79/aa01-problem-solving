/*
Refactor checkIfLastCharIsAnE

Refactor the function `checkIfLastCharIsAnE` to have only one line of code in
the function code block instead of three lines of code.
*/

function checkIfLastCharIsAnE(str) {
    return lastChar = str[str.length - 1].toLowerCase() === "e";
}

console.log(checkIfLastCharIsAnE('stance')); //=> true
console.log(checkIfLastCharIsAnE('FLOAT'));  //=> false
console.log(checkIfLastCharIsAnE('PHONE'));  //=> true


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = checkIfLastCharIsAnE;
