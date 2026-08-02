document.addEventListener("DOMContentLoaded", () => {
  // animal list, variables
  const animal = [
    {name: "Lion",
      fact: "I am the only big cat that lives in groups called prides",},
    {name: "Honey Badger",
      fact: "I am considered among the most fearless animals in the world, renowned for their incredibly thick, loose skin, immense intelligence, and insatiable appetite.",},
    {name: "Hippo",
      fact: "I am famous for spending much of their time in the water despite not actually being able to swim.",},
    {name: "Killer Whale",
      fact: "I am the world's largest dolphins! These ocean apex predators are highly intelligent, culturally complex, and incredibly widespread, rivaled in habitat range only by humans.",},
    {name: "Crocodile",
      fact: "I an ancient apex predators that have outlived the dinosaurs. They boast the animal kingdom's strongest bite and possess the ability to go up to a year without eating.",},
    {name: "Eagle",
      fact: "I am a majestic birds of prey renowned for their unparalleled vision, massive nests, and impressive aerial courtship displays.",},
  ];
 const funFact = document.querySelector("#fact");
  const scoreDisplay = document.getElementById("score-board");
  const startButton = document.getElementById("start-btn"); 

  if (!funFact) {
    console.error("Error: Make sure your HTML has an element like <p id='fact'></p>");
    return;
  }
<script src="src/index.js"></script>
  function startGame() {
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
  if (startButton) {
    startButton.addEventListener("click", startGame);
  } else {
    console.error("Error: Missing a button with id='start-btn' in your HTML.");
  }
});