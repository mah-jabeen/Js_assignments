// 1
// var flowers;
// flowers = ["rose", "lily", "rosemary", ["jasmine", "sunflower", "tulip"]];

// 2
// var rows=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// console.log(rows);

// 3
// for (var i=1; i<=10; i++){
//     document.write(i + "<br>");
// }

// 4
// var num= +prompt("enter any number you want to print table of");
// var lengthoftable= +prompt("till which number you want to print table");
// document.write("Multiplication Table of " + num);
// document.write("<br> Length " + lengthoftable + "<br>");
// for(var i=0; i<=lengthoftable; i++){
//     document.write( num + " *" + i + " = " + num*i + "<br>");
// }

// 5
// var fruits = ["apple", "banana", "mango", "orange", 
//     "strawberry"] ;
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// 6
// a
// document.write("Counting: ");
// for(var i=1; i<=15; i++){
//     document.write( i + " , ");
// }

// b
// document.write("Reverse counting: ");
// for(var i=10; i>=1; i--){
//     document.write( i + " , ");
// }

// c
// document.write("Even: ");
// for(var i=0; i<=20; i+=2){
//     document.write( i + " , ");
// }

// d
// document.write("Odd: ");
// for(var i=1; i<=20; i+=3){
//     document.write( i + " , ");
// }

// e
// document.write("Series: ");
// for(var i=0; i<=20; i+=2){
//     document.write( i + "k, ");
// }

// 7
// var A=["cake","apple pie","cookie","chips","patties"];
// var searching= prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am").toLowerCase();
// var found=false;
// for (var i=0; i<A.length; i++){
//     if(A[i]===searching){
//         document.write(searching+ " is available at index " + i + " in our bakery" );
//         found=true;
//         break;
//     }
// }
// if(!found){
//     document.write(" We are sorry. "+ searching+ " is not available in our bakery");

// }

// 8
// var A=[24,53,78,91,12];
// document.write(A);
// var largest = A[0]; 
// for(var i=1; i<A.length; i++){
//   if (A[i] > largest) {
//     largest = A[i]; 
// }
// }
// document.write("<br>The largest number is:", largest);

// 9
// var A=[24,53,78,91,12];
// document.write(A);
// var smallest = A[0]; 
// for(var i=1; i<A.length; i++){
//   if (A[i] < smallest) {
//     smallest = A[i]; 
// }
// }
// document.write("<br>The smallest number is:", smallest);

// 10
// for (var i=1; i <= 20; i++){
//     document.write(5*i + " , ");
    
// }