// 1
// var num1=2, num2=2,
// total=num1+num2;
// document.write("Sum of " + num1 + " and " + num2+ " is " + total);

// 2
// var num1=2, num2=2,
// sub= num1-num2;
// multi= num1*num2;
// div= num1/num2;
// mod= num1%num2;
// document.write("Subtracion of " + num1 + " and " + num2+ " is " + sub);
// document.write("<br> Multiplication of " + num1 + " and " + num2+ " is " + multi);
// document.write("<br> Division of " + num1 + " and " + num2+ " is " + div);
// document.write("<br>Modulus of " + num1 + " and " + num2+ " is " + mod);

// 3
// var num;
// document.write("Value after variable declaration is: " + num);
// num=5;
// document.write("<br>Initial value: " + num);
// num++;
// document.write("<br>Value after increment is: " + num);
// num=num+7;
// document.write("<br>Value after addition is: " + num);
// num--;
// document.write("<br>Value after decrement is: " + num);
// num=num%3;
// document.write("<br>The remainder is: " + num);

// 4
// var ticket_price=600,quantity=5;
// cost=600*quantity;
// document.write("Total cost to buy " + quantity  + " tickets to a movie is " + cost + "PKR");

// 5
// var num, count=1 ;
// num = prompt("enter any number");
// document.write("Table of " + num);
// multi= num*count;
// document.write("<br>"+ num +" × 1 = " + multi);
// count++;
// multi= num*count;
// document.write( "<br>"+ num +" × 2 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 3 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 4 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 5 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 6 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 7 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 8 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 9 = " + multi);
// count++;
// multi= num*count;
// document.write("<br>"+num +" × 10 = " + multi);

// 6
// var celsius,fahrenheit;
// fahrenheit= prompt("Enter any number you want to convert in celsius");
// celsius = (fahrenheit-32)*5/9;
// document.write(celsius + "oC is" + " "+fahrenheit + "oF");
// celsius= prompt("Enter any number you want to convert in fahrenheit");
// fahrenheit = (celsius*9/5)+32;
// document.write("<br>" +fahrenheit + "oF is" + " "+ celsius + "oC");

// 7
var item1, item2, quantity1, quantity2, shipping;
item1=prompt("Price of item 1: ");
quantity1=prompt("Enter quantity of item1:");
item2=prompt("Price of item 2: ");
quantity2=prompt("Enter quantity of item2:");
shipping=prompt("Enter shipping charges:");
total= (item1*quantity1) + (item2*quantity2) + shipping;
document.write("<strong> Shopping Cart </strong><br><br><br>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping charges "+ shipping + "<br>");
document.write("Total cost of your order is " + total + "<br>");
