// 1
// var city;
// city=prompt("enter any city");
// if (city=== "karachi" ){
//     document.write("Welcome to city of lights")
// }else{
//     document.write("Hello");
// }

// 2
// var gender;
// gender=prompt("enter your gender");
// if(gender==="male"){
//     document.write("Good Morning!! Sir");
// }else if(gender==="female"){
//     document.write("Good Morning!! Ma'am");
// }else{
//     document.write("error");
// }

// 3
// var color;
// color=prompt(`enter any color from below
//     red,yellow,green`)
// if(color==="red" ){
//     document.write("Must stop");
// }else if(color === "yellow"){
//     document.write("Ready to move");
// }else if(color === "green"){
//     document.write("Move now");
// }else{
//     document.write("write correct color");
// }

// 4
// var fuel;
// fuel=prompt("enter fuel in your car in litres");
// if(fuel<0.25){
//     document.write("Please refill the fuel in your car");
// }else{
//     document.write("Your fuel is enough");
// }

// 5
// a)
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } // this will show alert

// b)
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } // this will not show alert

// c)
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } // this will show alert
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } // this will show alert

// d)
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } // will show alert

// e)
// if (true){ 
//     alert("True"); 
//     }  // this wil show alert
//     if (false){ 
//     alert("False"); 
//     } 

// f)
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     } // will show alert

// 6
// var marks_obt,percentage,total=300;
// marks_obt= +prompt("enter marks obtained in all three subjects out of 300:");
// document.write("<strong><h1> Marks Sheet </h1></strong><br><br><br>");
// percentage=(marks_obt/total)*100;
// if(percentage>=80){
//     document.write("<br>Total marks: " +total);
//     document.write("<br>Marks obtained: " +marks_obt);
//     document.write("<br>Percentage: " + percentage +"%");
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }else if(percentage>=70){
//     document.write("<br>Total marks: " +total);
//     document.write("<br>Marks obtained: " +marks_obt);
//     document.write("<br>Percentage: " + percentage +"%");
// document.write("<br>Grade: A");
// document.write("<br>Remarks: Good");
// }else if(percentage>=60){
//     document.write("<br>Total marks: " +total);
//     document.write("<br>Marks obtained: " +marks_obt);
//     document.write("<br>Percentage: " + percentage +"%");
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }else if(percentage<60){
//     document.write("<br>Total marks: " +total);
//     document.write("<br>Marks obtained: " +marks_obt);
//     document.write("<br>Percentage: " + percentage +"%");
// document.write("<br>Grade: Fail");
// document.write("<br>Remarks: Sorry");
// }else{
//     document.write("<br>write in numbers");
// }

// 7
// var num=3, userNum;
// userNum= +prompt("enter any number");
// if(num===userNum){
//     document.write("Bingo! Correct answer");
// }else if ((userNum+1)===num){
//     document.write("Close enough to the correct answer")
// }else{
//     document.write("wrong answer");
// }

// 8
// var num;
// num= +prompt("enter any number");
// if(num % 3 === 0) {
//     document.write("divisible of 3");
// }else{
//     document.write("not divisible by 3 ");
// }

// 9
// var num;
// num= +prompt("enter any number");
// if(num % 2 === 0) {
//     document.write("even");
// }else{
//     document.write("odd");
// }

// 10
// var temp;
// temp= +prompt("enter weather:");
// if(temp>40){
//     document.write(" “It is too hot outside.” ");

// }else if(temp>30){
//     document.write("“The Weather today is Normal.” ");

// }else if(temp>20){
//     document.write("“Today’s Weather is cool.” ");

// }else if(temp>10){
//     document.write("“OMG! Today’s weather is so Cool.” ");

// }else {
//     document.write("error");
// }


// 11
var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("Result: " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("Result: " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("Result: " + result);
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
        alert("Result: " + result);
    } else {
        alert("Error: Division by zero is not allowed.");
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
        alert("Result: " + result);
    } else {
        alert("Error: Division by zero is not allowed.");
    }
} else {
    alert("Invalid operation. Please enter one of +, -, *, /, %.");
}