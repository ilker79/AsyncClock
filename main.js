//Select the hand

// Move the hand of a 🕗 every second using setInterval, 360 degrees in 60 seconds
//hand.style.transform = `rotate(6deg)`; // example of how to rotate the hand

// const hand = document.querySelector(".hand");
// let date = new Date().getSeconds();

// let i =0;
// let i = 6;
// function changeHand() {
//   hand.style.transform = `rotate(${i}deg)`;
//   i = i + 6;
// }
// setInterval(changeHand, 1000);

//write a function to change the position of the hand.
//create a variable and loop to increment the degree

//Seconds
const hand = document.querySelector(".hand");

function changeHand() {
  hand.style.transform = `rotate(${getSeconds()}deg)`;
}

function getSeconds() {
  let date = new Date();
  let seconds = date.getSeconds();
  // console.log(seconds);
  return seconds * 6;
}

//Minutes
const minuteHand = document.querySelector(".minute-hand");

function changeMinuteHand() {
  minuteHand.style.transform = `rotate(${getMinutes()}deg)`;
}
function getMinutes() {
  let date = new Date();
  let minutes = date.getMinutes();
  return minutes * 6;
}

function setIntervalForMinute() {
  while (getSeconds() === 0) {
    return 60000;
  }
}

//Hours
let hourHand = document.querySelector(".hour-hand");

function changeHourHand() {
  hourHand.style.transform = `rotate(${getHours()}deg)`;
}

function getHours() {
  let date = new Date();
  let hours = date.getHours();
  return hours * 30 + (getMinutes() / 6) * 0.5;
}

function setIntervalForHour() {
  while (getSeconds() === 0) {
    return 60000;
  }
}

setInterval(changeHand, 1000);
setInterval(changeMinuteHand, setIntervalForMinute());
setInterval(changeHourHand, setIntervalForHour());
