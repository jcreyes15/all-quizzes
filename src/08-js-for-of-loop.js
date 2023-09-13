/**
 * This quiz is to test your knowledge of for-of-Loop.
 *
 * 1. When you finish the quiz, create a PR on you repository
 * 2. Submit to your lead
 */

// Question 1: Loop through the array and print the names of the Apostles
const apostles = ["Peter", "James", "John", "Andrew", "Philip"];
for (const apostle of apostles) {
  console.log("[Question#1: ]", apostle);
}
// Answer should be: Peter, James, John, Andrew, Philip (each in a new line)

// Question 2: Calculate the sum of the ages of the Patriarchs
const patriarchAges = [930, 912, 905, 895];
let sumOfAges = 0;
for (const age of patriarchAges) {
  sumOfAges += age;
}
console.log("[Question#2: ]", sumOfAges);

// console.log(answer) // Answer should be: 3642

// Question 3: Print the plagues of Egypt
const plagues = ["Frogs", "Locusts", "Hail"];
for (const plague of plagues) {
  console.log("[Question#3: ]", plague);
}

// Answer should be: Frogs, Locusts, Hail (each in a new line)

// Question 4: Convert Bible books to uppercase
const books = ["Genesis", "Exodus", "Leviticus"];
const uppercasedBooks = [];
for (const book of books) {
  uppercasedBooks.push(book.toUpperCase());
}
console.log("[Question#4: ]", uppercasedBooks);

// Answer should be: GENESIS, EXODUS, LEVITICUS (each in a new line)

// Question 5: Count the number of times 'apple' appears in the array
const fruitsInEden = ["apple", "pear", "apple", "grape"];
let appleCount = 0;
for (const fruit of fruitsInEden) {
  if (fruit === "apple") {
    appleCount++;
  }
}
console.log("[Question#5: ]", appleCount);
// Answer should be: 2

// Question 6: Multiply all elements in the array by 2
const davidStones = [1, 2, 3];
const doubledStones = [];
for (const stone of davidStones) {
  doubledStones.push(stone * 2);
}
console.log("[Question#6: ]", doubledStones);
// Answer should be: [2, 4, 6]

// Question 7: Reverse the string
const nameOfGod = "Yahweh";
let reversedName = "";
for (let letter of nameOfGod) {
  // "hewhaY"            h      +  "aY"
  reversedName = letter + reversedName;
}
console.log("[Question#7: ]", reversedName);

// Answer should be: hewhaY

// Question 8: Create a sentence by adding spaces to words
let peaceBeUponYou = ["Peace", "be", "upon", "you"];
let sentence = "";
for (let word of peaceBeUponYou) {
  sentence += word + " ";
}
console.log("[Question#8: ]", sentence);

// Answer should be: Peace be upon you

// Question 9: Print out every other element from the array
const daysOfCreation = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"];
for (const day of daysOfCreation) {
  console.log("[Question#9: ]", day);
}
// Answer should be: Day1, Day3, Day5 (each in a new line)

// Question 10: Concatenate all the strings in the array
const attributesOfGod = ["Omnipotent", "Omnipresent", "Omniscient"];
let concatenatedAttributes = "";
for (let attribute of attributesOfGod) {
  concatenatedAttributes += attribute;
}
console.log("[Question#10: ]", concatenatedAttributes);
// Answer should be: OmnipotentOmnipresentOmniscient

// Question 11: Create a new array with only the numbers greater than 3
const biblicalNumbers = [1, 3, 7, 12];
const numbersGreaterThanThree = [];
for (const number of biblicalNumbers) {
  if (number > 3) {
    numbersGreaterThanThree.push(number);
  }
}
console.log("[Question#11: ]", numbersGreaterThanThree);

// Answer should be: [7, 12]

// Question 12: Calculate the product of all the elements in the array
const disciplesAges = [30, 25, 40, 50];
let productOfAges = 1;
for (const age of disciplesAges) {
  productOfAges *= age;
}
console.log("[Question#12: ]", productOfAges);

// Answer should be: 1500000

// Question 13: Replace 'Goliath' with 'David' in the array
let combatants = ["Soldier1", "Soldier2", "Goliath"];
let index = 0;
for (let combatant of combatants) {
  if (combatant === "Goliath") {
    combatants[index] = "David";
  }
  index++;
}
console.log("[Question#13: ]", combatants);

// Answer should be: ["David", "Soldier1", "Soldier2"]

// Question 14: Print the square of each element in the array
const squaresOfNumbers = [1, 2, 3, 4];
for (const number of squaresOfNumbers) {
  console.log("[Question#14: ]", number * number);
}

// Answer should be: 1, 4, 9, 16 (each in a new line)

// Question 15: Count the number of vowels in the string
const theWord = "Bible";
let vowelCount = 0;
for (const letter of theWord) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    vowelCount++;
  }
}
console.log("[Question#15: ]", vowelCount);

// Answer should be: 2

// Question 16: Print the elements that are divisible by 5
const numbersFromBible = [5, 10, 15, 20, 25];
for (const number of numbersFromBible) {
  if (number % 5 === 0) {
    console.log("[Question#16: ]", number);
  }
}

// Answer should be: 5, 10, 15, 20, 25 (each in a new line)

// Question 17: Create a new string where the first letter of each word is capitalized
const phrase = "in the beginning";
let capitalizedPhrase = "";
for (const word of phrase.split(" ")) {
  const capitalizedWord = word[0].toUpperCase() + word.slice(1);
  capitalizedPhrase += capitalizedWord + " ";
}
console.log("[Question#17: ]", capitalizedPhrase);

// Answer should be: In The Beginning

// Question 18: Create a new array where each element is double the original
const loavesAndFishes = [2, 5];
const doubledArray = [];
for (const element of loavesAndFishes) {
  doubledArray.push(element * 2);
}
console.log("[Question#18: ]", doubledArray);

// Answer should be: [4, 10]

// Question 19: Count the number of elements that are equal to 'manna'
const foodInDesert = ["manna", "quail", "manna", "manna"];
let mannaCount = 0;
for (const food of foodInDesert) {
  if (food === "manna") {
    mannaCount++;
  }
}
console.log("[Question#19: ]", mannaCount);

// Answer should be: 3

// Question 20: Create a new array by picking every 3rd element from the original array
const theCommandments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const everyThirdElement = [];
for (const [index, element] of theCommandments.entries()) {
  if (index % 3 === 0) {
    everyThirdElement.push(element);
  }
}
console.log("[Question#20: ]", everyThirdElement);

// Answer should be: [3, 6, 9]
