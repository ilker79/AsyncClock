//Select the hand
const hand = document.querySelector(".hand");

// Move the hand of a 🕗 every second using setInterval, 360 degrees in 60 seconds
//hand.style.transform = `rotate(6deg)`; // example of how to rotate the hand

//write a function to change the position of the hand.
//create a variable and loop to increment the degree

// let i = 0;
// function changeHand() {
//   hand.style.transform = `rotate(${i}deg)`;
//   i = i + 6;
//   console.log(i);
// }
// setInterval(changeHand, 1000);

//Bonus task
let date = new Date();
console.log(date.getSeconds());
