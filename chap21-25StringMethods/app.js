// 1
// var firstname= prompt("enter your first name:");
// var lastname= prompt("enter your last name:");
// var fullname;
// fullname= firstname+lastname;
// alert("Welcome " + fullname);

// 2
// var fave= prompt("enter your favourite mobile phone model");
// document.write("My favourite phone is: " + fave +"<br>");
// lengthy= fave.length;
// document.write("Length of string "+ lengthy);

// 3
// var letter="Pakistani";
// document.write("String: " + letter );
// mystr= letter.indexOf("n");
// document.write(" <br>Index of 'n': " + mystr );

// 4
// var letter="Hello World";
// document.write("String: " + letter );
// mystr= letter.lastIndexOf("l");
// document.write(" <br>Last Index of 'l': " + mystr );

// 5
// var letter="Pakistani";
// document.write("String: " + letter );
// mystr= letter.charAt(3);
// document.write("<br>Character at index 3: " + mystr );

// 6
// var firstName = "mahjabeen";
// var lastName = "akhtar";
// var fullName = firstName + " " + lastName;
// console.log(fullName); 

// 7
// var city="Hyderabad";
// document.write("City: " + city );
// city= city.replace("Hyderabad","Islamabad");
// document.write("<br>After replacement: " + city );

// 8
// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// message= message.replace(/and/g,"&");
// document.write(message);

// 9
// var value="472";
// document.write("Value: " +value);
// document.write("<br>Type: " + typeof(value));
// value2= Number(value);
// document.write("<br>Value: " + value2);
// document.write("<br>Type: " + typeof(value2));

// 10
// userinput= prompt("Enter a word");
// document.write("User input: " +userinput);
// document.write("<br>Upper case: " +userinput.toUpperCase());

// 11
// var str = "hello world, how are you?";
// var words = str.split(' ');
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();   

// }
// var titleCaseStr = words.join(' ');
// console.log(titleCaseStr); 


//12
// var num = 35.36;
// var strNum = num.toString().replace(".", "");
// document.write("The result is: " + strNum);

// 13
// var specialChars = [33, 44, 46, 64];
// var username;
// var isValid;
// var i;
// do {
//     username = prompt("Enter your username: ");
//     isValid = true;

//     for (i = 0; i < username.length; i++) {
//         if (specialChars.indexOf(username.charCodeAt(i)) !== -1) {
//             isValid = false;
//             break;
//         }
//     }

//     if (isValid) {
//         alert("Username '" + username + "' is valid!");
//     } else {
//         alert("Invalid username. Please avoid using @, ., ,, and !");
//     }

// } while (!isValid);

// 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchByUser = prompt("Enter any item name:").toLowerCase();

// var found = false; 
// var index; 

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === searchByUser) {
//         found = true;
//         index = i;
//         break;
//     }
// }

// if (found) {
//     document.write("It's a " + arr[index] + " at index " + index);
// } else {
//     document.write("Item not found. Please enter a correct item.");
// }

// 15
