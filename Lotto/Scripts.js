/*
So this week challenge lotto
How this works is this
You must allow the user to input a single number and compare that single number to a random generate 5 numbers
If there is a match with any of the 5 numbers it must indicate
Numbers generated can not be higher then the value of 45 or equal 0. Ensure restrictions are also implemented
Enjoy the Code
*/
const array = [];
const message1 = 'Number selected matches, you WON!!!!!!'
const message2 = 'No matches, You LOST!!!!!!'
let number = prompt("Enter number between 1 and 45");
if (number<1 || number>49)
{
    alert("Number must be between 1 and 45");
    number = prompt("Enter number between 1 and 45");
}
document.getElementById("number").innerHTML = number;


for (let x = 0; x < 6; x++)
array.push((Math.random() * 45).toFixed(0));
document.getElementById("Lotto").innerHTML = array;

if(array.includes(number)){
document.getElementById("message").innerHTML = message1;
}else{
    document.getElementById("message").innerHTML = message2;
}
