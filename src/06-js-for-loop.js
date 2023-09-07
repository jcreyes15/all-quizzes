/**
 *
 * This quiz is to test your knowledge of For-Loop.
 *
 * 1. When you finish the quiz, create a branch on you repository
 * 2. Submit to your lead
 */

// Quiz on For-loops and Biblical Trivia

// Question 1: Count the number of occurrences of the letter 'a' in the name "Abraham".
let name1 = "Abraham";
let count1 = 0;
for (let i = 0; i < name1.length; i++) {
  if (name1[i].toLowerCase === "a") {
    count1++;
  }
}
console.log("[Question#1: ]", count1); // Answer should be: 3

// Question 2: Reverse the string "Moses"
let name2 = "Moses";
let reversedName2 = "";
for (let j = name2.length - 1; j >= 0; j--) {
  reversedName2 += name2[j];
}
console.log("[Question#2: ]", reversedName2); // Answer should be: sesoM

// Question 3: Sum the integers from 1 to 12 (the number of sons of Jacob).
let sum3 = 0;
for (let k = 1; k <= 12; k++) {
  sum3 += k;
}
console.log("[Question#3: ]", sum3); // Answer should be: 78

// Question 4: Create a string that contains the first 5 books of the Old Testament separated by a comma.
let books4 = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
let bookString4 = books4.join(", ");
console.log("[Question#4: ]", bookString4); // Answer should be: Genesis, Exodus, Leviticus, Numbers, Deuteronomy

// Question 5: Count the number of vowels in the name "Jerusalem".
let name5 = "Jerusalem";
let count5 = 0;
for (let m = 0; m < name5.length; m++) {
  if ("aeiou".includes(name5[m])) {
    count5++;
  }
}
console.log("[Question#5: ]", count5); // Answer should be: 3

// Question 6: Find the product of the numbers 1 to 5.
let product6 = 1;
for (let n = 1; n <= 5; n++) {
  product6 *= n;
}
console.log("[Question#6: ]", product6); // Answer should be: 120

// Question 7: Create a string from an array that tells the story of David and Goliath.
let story7 = ["David", "fought", "Goliath", "and", "won."];
let storyString7 = story7.join(" ");
console.log("[Question#7: ]", storyString7); // Answer should be: David fought Goliath and won.

// Question 8:let phrase8 = "In The Beginning";
let phrase8 = "In The Beginnng";
let acronym8 = "";
let words8 = phrase8.split(" ");
for (let p = 0; p < words8.length; p++) {
  acronym8 += words8[p][0];
}
console.log("[Question#8: ]", acronym8); // Answer should be: ITB

// Question 9: Convert the string "Noah" to uppercase.
let name9 = "Noah";
let upperName9 = name9.toUpperCase();
console.log("[Question#9: ]", upperName9); // Answer should be: NOAH

// Question 10: Find the length of the string "Revelation" without using the `.length` property.
let name10 = "Revelation";
let length10 = 0;
for (let r = 0; name10[r] !== undefined; r++) {
  length10++;
}
console.log("[Question#10: ]", length10); // Answer should be: 9

// Question 11: Count the number of occurrences of the letter 'e' in the word "Jericho".
let city11 = "Jericho";
let count11 = 0;
for (let s = 0; s < city11.length; s++) {
  if (city11[s] === "e" || city11[s] === "E") {
    count11++;
  }
}
console.log("[Question#11: ]", count11); // Answer should be: 1

// Question 12: Reverse the string "Bethlehem
let town12 = "Bethlehem";
let reversedTown12 = "";
for (let t = town12.length - 1; t >= 0; t--) {
  reversedTown12 += town12[t];
}
console.log("[Question#12: ]", reversedTown12); // Answer should be: mehtelhteB

// Question 13: Sum the integers from 1 to 40 (the number of days of Jesus' temptation).
let sum13 = 0;
for (let u = 1; u <= 40; u++) {
  sum13 += u;
}
console.log("[Question#13: ]", sum13); // Answer should be: 820

// Question 14: Concatenate the list of the Twelve Apostles into a single string separated by a comma.
let apostles14 = [
  "Peter",
  "James",
  "John",
  "Andrew",
  "Philip",
  "Bartholomew",
  "Matthew",
  "Thomas",
  "James",
  "Thaddeus",
  "Simon",
  "Judas"
];
let apostlesString14 = apostles14.join(", ");
console.log("[Question#14: ]", apostlesString14); // Answer should be: Peter, James, John, Andrew, Philip, Bartholomew, Matthew, Thomas, James, Thaddeus, Simon, Judas

// Question 15: Count the number of consonants in the name "Isaiah".

let name15 = "Isaiah";
let count15 = 0;
for (let w = 0; w < name15.length; w++) {
  if (!"AEIOUaeiou".includes(name15[w])) {
    count15++;
  }
}
console.log("[Question#15: ]", count15); // Answer should be: 3

// Question 16: Find the product of the numbers from 3 to 7.
let product16 = 1;
for (let x = 3; x <= 7; x++) {
  product16 *= x;
}
console.log("[Question#16: ]", product16); // Answer should be: 2520

// Question 17: Create a string from an array that tells the story of Jonah and the Whale.
let story17 = ["Jonah", "was", "swallowed", "by", "a", "whale."];
let storyString17 = story17.join(" ");
console.log("[Question#17: ]", storyString17); // Answer should be: Jonah was swallowed by a whale.

// Question 18: Create an acronym from the phrase "Garden Of Eden".
let phrase18 = "Garden Of Eden";
let acronym18 = "";
let words18 = phrase18.split(" ");
for (let z = 0; z < words18.length; z++) {
  acronym18 += words18[z][0];
}
console.log("[Question#18: ]", acronym18); // Answer should be: GOE

// Question 19: Convert the string "Canaan" to lowercase.
let name19 = "Canaan";
let lowerName19 = name19.toLowerCase();
console.log("[Question#19: ]", lowerName19); // Answer should be: canaan

// Question 20: Find the length of the string "Exodus" without using the `.length` property.
let name20 = "Exodus";
let length20 = 0;
for (let bb = 0; name20[bb] !== undefined; bb++) {
  length20++;
}
console.log("[Question#20: ]", length20); // Answer should be: 6
