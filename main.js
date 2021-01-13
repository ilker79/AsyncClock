//Select the hand
const hand = document.querySelector(".hand");

// Move the hand of a 🕗 every second using setInterval, 360 degrees in 60 seconds
hand.style.transform = `rotate(6deg)`; // example of how to rotate the hand
//write a fucntion to change the position of the hand.
//create a variable and loop to increment the degree
function changeHand() {
  for (let i = 0; i < 360; i += 6) {
    hand.style.transform = `rotate(${i}deg)`;
  }
}
changeHand();
