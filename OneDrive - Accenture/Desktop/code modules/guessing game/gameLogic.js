import { animal } from './animalData.js';

export function startGame() {
  const funFact = document.querySelector("#fact");
  const scoreDisplay = document.getElementById("score-board");

  if (!funFact) {
    console.error("Error: Make sure your HTML has an element like <p id='fact'></p>");
    return;
  }

  const randomIndex = Math.floor(Math.random() * animal.length);
  const chosenAnimal = animal[randomIndex];

  funFact.textContent = chosenAnimal.fact;

  setTimeout(() => {
    const userGuess = window.prompt("Guess the animal based on the fact!");

    if (userGuess && userGuess.toLowerCase().trim() === chosenAnimal.name.toLowerCase()) {
      if (scoreDisplay) scoreDisplay.textContent = "Status: You Win! ";
      window.alert("Correct! You win!");
    } else {
      if (scoreDisplay) scoreDisplay.textContent = "Status: Game Over! ";
      window.alert(`Wrong! The correct answer was ${chosenAnimal.name}.`);
    }
  }, 100);
}