// lets start java script
let first ="SHAKTHI";

console.log (' the name is ${first}');
// if condition

// switch statement
let a = 3;
    switch (a) {
      case 1:
        console.log ("Monday");
        break;
      case 2:
        console.log ("Tuesday");
        break;
      case 3:
        console.log ("Wednesday");
        break;
      case 4:
        Console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
        default :
        Console.log("no days");
        }		    



// condition
let percentage = 1 ;
if ( percentage>= 85 && percentage <= 100)
{
console.log ('distintion ');
}
else if ( percentage>= 75)
{
  console.log ('first class');
}
else if( percentage>= 65)
{
  console.log('second class');
}
else if(percentage>=35)
{
  console.log ('pass')
} 
else if ( percentage<35)
{
  console.log ('fail')
}
else 
{
  Console.log (' please do your study ')
}





 // loops are :-
 // * while
 // * do while
 // * for
 let num = 1;
 while (num <=15)
 {
   console.log (" hello "+ num);
   num = num +2;
 }
// post increament
 let x = 0;
 let y = 0;
 x = y++;
 console.log (x,y);
// pre increment
let x1 = 0;
 let y1 = 1;
 x1 = ++y1;
 console.log (x1,y1);


// do while
let age = 10;
do {
  console.log("the age is"+ age);
  age++;
}
while(age<=17)
{
  console.log ("your are not eligible for vote")
}