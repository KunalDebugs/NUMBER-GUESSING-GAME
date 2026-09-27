// console.log("hello world")
// let p=10;
// let q=5;
// console.log("sum is:",p+q);
// // this is a comment
// let pencilPrice=10;
// let eraserPrice=5;
// // console.log("the total price is",pencilPrice + eraserPrice,"ruppees.");
// console.log(`the total price is ${pencilPrice+eraserPrice} ruppees.`);

// //arithmetic operator
// let a=10;
// let b=20;
// console.log(a+b);
// console.log(`the difference between a and b is ${a-b}`);
// console.log(`the musltiplication of a and b is ${a*b}`);
// console.log(`the division between a and b is ${a/b}`);
// console.log(`the modulo bwtween a and b is ${a%b}`);
// console.log(`a to the power b is ${a**b}`);

// console.log(`over to the unary operators ${a++}`);
// console.log(++a);

// console.log(a--);
// console.log(--a);

// b=a;
// console.log(b);

// let age=23;
// console.log(age>23);
// console.log(age>=23);
// console.log(age!=32);
// console.log(age==23);

// //conditional statement 
// //if statemnent

// console.log("this is the line before if statement");
// let agee=3;
// if(agee>18){
//     console.log('you can vote ');
// }
// if(agee<18){
//     console.log("you can not vote");
// }
// console.log("this is the statement after if statement");

// console.log("traffic light system");
// let color="red";
// if (color=="red"){
//     console.log("stop broooooo light color is red");
// }
// if(color=="yellow"){
//     console.log("get ready broooo light color is yellow");
// }
// if(color=="green"){
//     console.log("lets gooooo boyss light color is greeeeeeeen")
// }

// let age=18
// if(age>18){
//     console.log("you can votee");
// }
// else if(age<18){
//     console.log("you can not vote");
// }
// else if(age==18){
//     console.log("bro you are 18 rn");
// }

// let marks=75;
// if (marks>=90){
//     console.log("grade is A");
// }
// else if(marks>=80){
//     console.log("grade is B");
// }
// else if(marks>=70){
//     console.log("grade is C");
// }
// else if(marks>=60){
//     console.log("grade is D");
// }

// let size='M';
// if (size=='XL'){
//     console.log(" price is rs 250");
// }
// else if(size=='L'){
//     console.log("price is 200rs");
// }
// else if(size=='M'){
//     console.log("price is 150rs");
// }
// else{
//     console.log('price is 100ers');
// }

//logical operators
//logical_and--> && and logical_or-->|| and logical_not-->!
// let str='abcd';
// if(str[0]==='a' && str.length>3){
//     console.log("it is a good string");
// }
// else{
//     console.log("it is no a good string")
// }

//switch case
// let color="red";
// switch(color)
// {
//     case "red":
//         console.log("stop beta");
//         break;
//     case "yellow":
//         console.log("wait start your engine");
//         break;
//     case "green":
//         console.log("lets gooooo ")
//         break;
//     default:
//         console.log("the traffic light is broken");
// }

//switch statement to print day of the week
//here we go!!!
// let day="saturdayy";
// console.log(`you entered ${day}`)
// switch(day)
// {
//     case "monday":
//         console.log("monday");
//         break;
//     case"tuesday":
//         console.log("tuesday");
//         break;
//     case"wednesday":
//         console.log("wednesday");
//         break;
//     case"thursday":
//         console.log("thursday");
//         break;
//     case"friday":
//         console.log("friday");
//         break;
//     case"saturday":
//         console.log("saturday");
//         break;
//     default:
//         console.log("abe yeh konsa din hota hai spelling sahi se likh le gawarrr");

// }

// let day=3;
// switch(day)
// {
//     case 1:
//         console.log("its monday");
//         break;
//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wednesday");
//         break;
//     case 4:
//         console.log("its thursday");
//         break;
//     case 5:
//         console.log("its friday");
//         break;
//     case 6:
//         console.log("its saturday");
//         break;
//     default:
//         console.log("bro atleast have some common sense there are only 7 days in a weeek");
// }

//alert!!!

// alert("boom baam incomming");

// console.error("this is an error msg");
// console.warn("this is a warning");
// let firstName = prompt("enter your name");
// console.log(firstName);

// let firstName=prompt("enter first name");
// let lastName=prompt("enter your last name");
// console.log("your name is: "+firstName + lastName);

// let firstName=prompt("enter first name");
// let lastName=prompt("enter your last name");
// console.log("your name is: "+firstName + lastName);
// alert("welcome!!"+
//     " "+firstName+" "+lastName);

//js problems...
//Q1.
// let number=10;
// if(number%10==0)
// {
//     console.log("good");
// }
// else
//     console.log("bad");

//Q2.
// userName=prompt("enter your name");
// age=prompt("enter your age");
// alert(userName+" "+age)

//ques 3
// let quater=3
// switch(quater)
// {
//     case 1:
//         console.log("january,february,march");
//         break;
//     case 2:
//         console.log("april,may june");
//         break;
//     case 3:
//         console.log("jult,august,september");
//         break;
//     case 4:
//         console.log("october,november,december");
//         break;
//     default:
//         console.log("not a valid quater number");
// }

//ques4

// let str="Apples";
// if(( str[0]=='A'||str[0]=='a' ) && str.length>5)
//     {
//         console.log("golden string");
//     }  
//     else{
//         console.log("not a golden string");
//     }

//ques 5

// let a=2;
// let b=12;
// let c=4;

// if((a>b)&&(a>c)){
//     console.log(`a is largest number and its value is: ${a}`);
// }
// else if((b>a)&&(b>c)){
//     console.log(`b is the largest number and its value is: ${b}`);
// }
// else{
//     console.log(`c is largest and its value is ${c}`);
// }

//ques 6
// let a=1234;
// let b=124;
// if(a[a.length]==b[b.length])
// {
//     console.log("they have same last digits ");
// }
// else{
//     console.log("they dont have same last digit");

// }

// let msg='  hello              ';
// console.log(msg);
// console.log(msg.trim());

// let password=prompt("set your password");
// console.log(password.trim());

// let msg="kunal bisht";
// console.log(msg.toLowerCase());
// console.log(msg.toUpperCase());

// let str="ilovecoding";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("g"));

// msg="helllo                ";
// console.log(msg.trim().toUpperCase());

// let msg="hellokunal";
// console.log(msg.slice(-4));

// let msg="hellokunalbisht";
// console.log(msg.replace('kunal','payal'));

//Q1.
// let msg="help!";
// console.log(msg.trim().toUpperCase());

//Q2.
// let str='apnacollege';
// console.log(str.slice(4).replace('l','t').replace('l','t'));

//ARRAYS:
// let students=["kunal","payal","mayank","deepika"];
// console.log(students[1][1]);
// console.log(students[1]);
// console.log(typeof students);

// let cars=['toyota','bmw','hero','honda'];
// cars.push='mercedes';
// console.log(cars);
// console.log(cars.pop());
// console.log(cars);