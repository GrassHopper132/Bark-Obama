import { startGame } from './gameLogic.js';

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn"); 

  if (startButton) {
    startButton.addEventListener("click", startGame);
  } else {
    console.error("Error: Missing a button with id='start-btn' in your HTML.");
  }
});