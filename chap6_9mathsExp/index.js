// 1
// var num;
// num=prompt("enter a number:");
// document.write("Result:");
// document.write("<br>The value of a is: "+num);
// document.write("<br>==========================");
// document.write("<br><br>The value of ++a is: "+ ++num);
// document.write("<br>Now the value of a is: "+ num);
// document.write("<br><br>The value of a++ is: "+ num++);
// document.write("<br>Now the value of a is: "+num);
// document.write("<br><br>The value of --a is: "+ --num);
// document.write("<br>Now the value of a is: "+num);
// document.write("<br><br>The value of a-- is: "+ num--);
// document.write("<br>Now the value of a is: "+num);

// 2
// var a=2, b=1; // in end b will be 0
// var result= --a - --b + ++b + b--;
// document.write("a is" +a);
// document.write(" <br>b is" +b);
// --a; //1
// --a - --b; //1-0
//  --a - --b + ++b; //1-0+1
//  --a - --b + ++b + b--; //1-0+1+1
// document.write("<br>result is" +result);

// 3
// var name_;
// name_=prompt("enter your name");
// document.write("Welcome!! "+name_);

// 5
// var num, count=1;
// num=prompt("enter any number you want to print table of");
// if (!num || isNaN(num)) {
//     num = 5;
// }
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
// var eng,urdu,maths,
// totalmarks=100, allsub_total=300,
// obtmarks_e, obtmarks_u, obtmarks_m, total_obt;
// obtmarks_e=Number(prompt("enter obtained marks in english"));
// obtmarks_u=Number(prompt("enter obtained marks in urdu"));
// obtmarks_m=Number(prompt("enter obtained marks in maths" ));
// total_obt=obtmarks_u+obtmarks_m+obtmarks_e;
// var percentage= (total_obt/allsub_total)*100;
// var per_u= (obtmarks_u/totalmarks)*100;
// var per_m= (obtmarks_m/totalmarks)*100;
// var per_e= (obtmarks_e/totalmarks)*100;
// document.write("Subjects  Total Marks  Obtained Marks  Percentage");
// document.write("<br>English    " + totalmarks + "            " + obtmarks_e + "                 " + per_e + "%");
// document.write("<br>Maths      " + totalmarks + "            " + obtmarks_m + "                 " + per_m + "%");
// document.write("<br>Urdu       " + totalmarks + "            " + obtmarks_u + "                 " + per_u + "%");
// document.write("<br>       " + allsub_total + "  " + total_obt + "  " + percentage + "%");

