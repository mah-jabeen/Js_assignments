// 1
// var char = prompt("Enter a character:");
// if (ascii >= 48 && ascii <= 57) {
//     alert(char + " is a number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert(char + " is an uppercase letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     alert(char + " is a lowercase letter.");
// } else {
//     alert(char + " is not a number or letter.");
// }

// 2
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//     alert("The larger number is: " + num2);
// } else {
//     alert("Both numbers are equal.");
// }

// 3
// var number = +prompt("Enter a number:");

// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

// 4
// var char = prompt("Enter a single character:");

//     var lowerChar = char.toLowerCase();

//     if (lowerChar === "a" || lowerChar === "e" || lowerChar === "i" || lowerChar === "o" || lowerChar === "u") {
//         alert("True, the character is a vowel.");
//     } else {
//         alert("False, the character is not a vowel.");
//     }


// 5
// var correctPassword = "mySecret123";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password");
// }

// 6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// alert(greeting);

// 7
// var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");

// if (time >= 0 && time < 1200) {
//     alert("It's " + (time === 0 ? 12 : time / 100) + " AM");
// } else if (time >= 1200 && time < 1300) {
//     alert("It's " + (time === 1200 ? 12 : time / 100) + " PM");
// } else if (time >= 1300 && time <= 2359) {
//     alert("It's " + ((time - 1200) / 100) + " PM");
// } else {
//     alert("Please enter a valid time between 0000 and 2359.");
// }