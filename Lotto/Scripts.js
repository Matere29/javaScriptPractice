/*
So this week challenge lotto
How this works is this
You must allow the user to input a single number and compare that single number to a random generate 5 numbers
If there is a match with any of the 5 numbers it must indicate
Numbers generated can not be higher then the value of 45 or equal 0. Ensure restrictions are also implemented
Enjoy the Code
*/
const array = [];
let number = prompt("Enter number between 0 and 45");
if (number<0 || number>49)
{
    alert("Number must be between 0 and 45");
    number = prompt("Enter number between 0 and 45");
}
console.log("User selected: " + number);

//let x = (Math.random() * 45).toFixed(0)
for (let x = 0; x < 6; x++)
array.push((Math.random() * 45).toFixed(0));
console.log('Draw numbers:',array);

if(array.includes(number)){
   alert("number selected matches, you WON!!!!!!")
}else{
    alert("No matches, You LOST!!!!!!")   
}
