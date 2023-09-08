/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("[Question#1]", sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */
let numbers = [];
let j = 5;
while (j <= 15) {
  numbers.push(j);
  j++;
}
const numbersString = numbers.join(", ");
console.log("[Question#2]", numbersString);

/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let k = 10;
while (k <= 30) {
  if (k % 2 === 0) {
    console.log("[Question#3]", k);
  }
  k++;
}

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
let numberPower = [];
z = 1;
while (z ** 2 <= 1000) {
  z++;
  numberPower = z;
}
console.log("[Question#4]", numberPower);
/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */
let reversedString = "";
let m = "HelloWorld".length - 1;
while (m >= 0) {
  reversedString += "HelloWorld"[m];
  // Decrementamos el valor de `i` en 1
  m--;
}
console.log("[Question#5]", reversedString);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
let string = "banana";
let count = 0;
let n = 0;
while (n < string.length) {
  if (string[n] === "a") {
    count++;
  }
  n++;
}
console.log("[Question#6]", count);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */
let factorial = 1;
let f = 1;
while (f <= 5) {
  factorial *= f;
  f++;
}
console.log("[Question#7]", factorial);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
let p = 100;
while (p >= 80) {
  console.log("[Question#8]", p);
  p--;
}

/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
let num1 = 56;
let num2 = 98;
while (num1 != num2) {
  if (num1 > num2) {
    num1 = num1 - num2;
  } else {
    num2 = num2 - num1;
  }
}
console.log("[Question#9]", num1, num2);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */
let oddSum = 0;
let q = 1;
while (q <= 50) {
  if (q % 2 === 1) {
    oddSum += q;
  }
  q++;
}
console.log("[Question#10]", oddSum);
