/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */
let color = "red";
let feeling;

switch (color) {
  case "red":
    feeling = "passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "neutral";
}
console.log("[Question #1]: ", feeling);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */
const day = "Monday";
let typeOfDay;

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    typeOfDay = "Working day";
    break;
  case "Saturday":
  case "Sunday":
    typeOfDay = "Weekend";
}
console.log("[Question #2]: ", typeOfDay);

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */
const score = 10;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("[Question #3]: ", grade);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */
const fruit = "banana";
let typeOfFruit;

switch (fruit) {
  case "strawberries":
  case "blueberries":
  case "raspberries":
    typeOfFruit = "berry";
    break;
  default:
    typeOfFruit = "Not a berry";
}
console.log("[Question #4]: ", typeOfFruit);

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */
const month = "August";
let quarter;

switch (month) {
  case "January":
  case "February":
  case "March":
    quarter = "1st quarter";
    break;
  case "April":
  case "May":
  case "June":
    quarter = "2nd quarter";
    break;
  case "July":
  case "August":
  case "September":
    quarter = "3rd quarter";
    break;
  case "October":
  case "November":
  case "December":
    quarter = "4th quarter";
    break;
}
console.log("[Question #5]: ", quarter);

/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */
const number = 9;
let size;

switch (true) {
  case number >= 1 && number <= 3:
    size = "small";
    break;
  case number >= 4 && number <= 6:
    size = "medium";
    break;
  case number >= 7 && number <= 9:
    size = "large";
    break;
}
console.log("[Question #6]: ", size);

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */
const pet = "cow";
let typeOfPet;

switch (pet) {
  case "dog":
    typeOfPet = "Canine";
    break;
  case "cat":
    typeOfPet = "Feline";
    break;
  default:
    typeOfPet = "Unknown";
}
console.log("[Question #7]: ", typeOfPet);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */
const transportMode = "car";
let speed;

switch (transportMode) {
  case "plane":
    speed = "Fast";
    break;
  case "car":
    speed = "Medium";
    break;
  case "bicycle":
    speed = "Slow";
    break;
}
console.log("[Question #8]: ", speed);

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */
const direction = "S";
let directionName;

switch (direction) {
  case "N":
    directionName = "North";
    break;
  case "S":
    directionName = "South";
    break;
  case "E":
    directionName = "East";
    break;
}
console.log("[Question #9]: ", directionName);

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */
const drink = "coke";
let typeOfDrink;

switch (drink) {
  case "Water":
    typeOfDrink = "H2O";
    break;
  case "Coffee":
    typeOfDrink = "C8H10N4O2";
    break;
  default:
    typeOfDrink = "Unknown";
}
console.log("[Question #10]: ", typeOfDrink);
