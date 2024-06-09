/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.
*/
//1. Write a function named within5Of100 with a number parameter called num. 
function within5Of100(num) {
 //2. Num should be within the range of 95 and 105 inclusively. 
 //3. Will make this with an if statement to check if num is greater than and equal to 95 and less than or equal to 105. 
  if (num >= 95 && num <= 105) { 
//4. if it is true return true.
    return true;
  } 
//5. Else if it is not, return false.
  return false; 
}

console.log(within5Of100(94));  //=> false
console.log(within5Of100(95));  //=> true
console.log(within5Of100(100)); //=> true
console.log(within5Of100(105)); //=> true
console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?

//1. Write a function named challengeQ with three parameters called num, X and Y.
function challengeQ(num, X, Y) {
//2. Num should be within the range of X and another number called Y. 
//3. Using an if statement, check to see if num is greater than or equal to y minus x 
//3a. and if num is less than or equal to x plus y. 
    if (num >= Y - X && num <= X + Y) {
//4. if num does return true. 
        return true;
    }
//5. if num does not return false.
    return false; 
}

console.log(challengeQ(80, 90, 120)); // true
console.log(challengeQ(6, 1, 0)); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
