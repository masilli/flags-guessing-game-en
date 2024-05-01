let countries = [];
let originalCountries = []; // Declare the originalCountries array outside the fetch block

fetch('js/countries.json')
  .then(response => response.json())
  .then(data => {
    countries = data;
    //console.log(countries); // Log the entire countries array
    //console.log(countries.map(country => country.countryNamePt)); // Log the names of the countries
    originalCountries = [...countries];
    //console.log(originalCountries);
    //console.log(originalCountries.map(country => country.countryNamePt));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// declare elements
const flagImg = document.querySelector("#flag img");
const answerButtons = document.querySelectorAll(".answer");
const shuffleButton = document.querySelector(".shuffle");

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to select a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to remove an item from an array
function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

// tries and points
let correctAnswers = 0;
let incorrectAnswers = 0;

let usedCountries = [];

// Track the number of answers
let totalAnswers = 0;

// Variables to track streaks
let correctStreak = 0;
let incorrectStreak = 0;

// answer buttons
function handleButtonClick(event) {
  const clickedButton = event.target;
  const clickedcountryNamePt = clickedButton.textContent;

  // right & wrong answers elements
  const correctAnswersElement = document.querySelector("#correct .score");
  const incorrectAnswersElement = document.querySelector("#incorrect .score");

  // Remove previous classes from all buttons
  answerButtons.forEach((otherButton) => {
    otherButton.classList.remove("correct", "incorrect");
  });

  // Check if clicked option matches selectedName
  if (clickedcountryNamePt === selectedName) {
    clickedButton.classList.add("correct");
    correctAnswers += 1;
    
    correctAnswersElement.classList.remove("highlight-animation");
    void correctAnswersElement.offsetWidth;
    correctAnswersElement.classList.add("highlight-animation");
  } else {
    clickedButton.classList.add("incorrect");

    // Highlight the correct answer
    answerButtons.forEach((button) => {
      if (button.textContent === selectedName) {
        setTimeout(() => {
          button.classList.add("correct");
        }, 150);
      }
    });

    incorrectAnswers += 1;
    incorrectAnswersElement.classList.remove("highlight-animation");
    void incorrectAnswersElement.offsetWidth;
    incorrectAnswersElement.classList.add("highlight-animation");
  }

  // Write the right and wrong answers
  correctAnswersElement.textContent = correctAnswers;
  incorrectAnswersElement.textContent = incorrectAnswers;

  totalAnswers++; // Increment total answers

  // Check if clicked option matches selectedName
  if (clickedcountryNamePt === selectedName) {
    // Increment correct answers streak and reset incorrect streak
    correctStreak++;
    incorrectStreak = 0;

    // Show message for correct streak
    switch (correctStreak) {
      case 5:
        displayMessage("5 já cá cantam. Continua assim!");
        break;
      case 10:
        displayMessage("10 certas, és um chico esperto!");
        break;
      case 25:
        displayMessage("Uau! 25 de seguida!");
        break;
      case 50:
        displayMessage("Incrível! 50 certas!");
        break;
      case 75:
        displayMessage("75?! Pareces uma enciclopédia!");
        break;
      case 99:
        displayMessage("99!!! Será que consegues o pleno?");
        break;
      case 100:
        displayMessage("Parabéns! Conseguiste!!!");
        break;
      default:
        break;
    }
  } else {
    // Increment incorrect answers streak and reset correct streak
    incorrectStreak++;
    correctStreak = 0;

    // Show message for incorrect streak
    switch (incorrectStreak) {
      case 3:
        displayMessage("Oh não! 3 de seguida...");
        break;
      case 5:
        displayMessage("Hey! Tás a dormir?");
        break;
      case 10:
        displayMessage("10 ao lado! Olha... estudasses!");
        break;
      case 20:
        displayMessage("Tantas erradas... assim não vais lá!");
        break;
      default:
        break;
    }
  }

  // Generate new options after a delay
  setTimeout(() => {
    generateOptions();
  }, 600);
}

// Function to display messages
function displayMessage(message) {
  const popupElement = document.querySelector("#popup");
  popupElement.textContent = message;
  popupElement.style.opacity = 1;
  setTimeout(() => {
    popupElement.style.opacity = 0;
  }, 2000);
}

// Attach event listener to answer buttons
answerButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// country name variable
let selectedName;

// Function to generate options
function generateOptions() {
  // Make a copy of the countries array
  const countriesCopy = [...originalCountries];

  // Check if there are enough countries in the array
  if (countriesCopy.length < 4) {
    console.error("Not enough countries in the array!");
    return; // Exit the function to prevent further execution
  }

  // Check if the game has ended
  if (totalAnswers >= 100) {
    endGame();
    return; // Exit function
  }

  // Randomly select a country that hasn't been used before
  let selectedCountry;
  do {
    selectedCountry = getRandomItem(countriesCopy);
  } while (usedCountries.includes(selectedCountry.countryNamePt));

  // Add the selected country to the array of used countries
  usedCountries.push(selectedCountry.countryNamePt);

  // Get the ISO code and name of the selected country
  const selectedIsoCode = selectedCountry.isoCode;
  selectedName = selectedCountry.countryNamePt;
  console.log(selectedName);

  // add respective image
  flagImg.src = selectedCountry.flag4x3;

  // Remove the selected country from the array
  removeItem(countriesCopy, selectedCountry);

  // Randomly select three other countries
  const otherCountries = [];
  for (let i = 0; i < 3; i++) {
    const randomCountry = getRandomItem(countriesCopy);
    otherCountries.push(randomCountry.countryNamePt);
    removeItem(countriesCopy, randomCountry);
  }

  // how many answers
  console.log("Total answers at generateOptions: " + totalAnswers);

  // Combine the names of the selected country and other countries
  const allcountryNamePts = [selectedName, ...otherCountries];

  // Shuffle the array of country names
  const shuffledNames = shuffleArray(allcountryNamePts);

  // Assign each name to a button
  answerButtons.forEach((button, index) => {
    button.classList.remove("correct", "incorrect");
    button.textContent = shuffledNames[index];
  });

}

// declare endGameUi
const endGameUi = document.getElementById("end-game");

// Function to handle end of game
function endGame() {
  // Display final report
  console.log("Game over! Total answers:", totalAnswers);
  console.log("Correct answers:", correctAnswers);
  console.log("Incorrect answers:", incorrectAnswers);

  // You can also update the UI to indicate end of game
  endGameUi.style.display = "grid";

  const endCorrect = document.querySelector(".end-score #correct .score");
  endCorrect.textContent = correctAnswers;
  const endIncorrect = document.querySelector(".end-score #incorrect .score");
  endIncorrect.textContent = incorrectAnswers;
}

// Attach click event listener to the shuffle button
if (shuffleButton) {
  shuffleButton.addEventListener("click", () => {
    location.reload();
  });
} else {
  console.error("Shuffle button element not found!");
}

// Play button
const startScreen = document.getElementById("start-game");
const gameScreen = document.getElementById("game-screen");
const playButton = document.getElementById("btn-start-game");
const replayButton = document.getElementById("replay");
const showFlag = document.getElementById("flag");
const answersWrapper = document.querySelector(".answers-wrapper");
//const questionTitle = document.querySelector(".question-title");
const answerScore = document.querySelectorAll(".answers-score");

if (playButton) {  
  playButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "grid";
    //questionTitle.style.opacity = "0";

    answerScore.forEach(element => {
      element.style.opacity = "1";
    });

    showFlag.style.display = "grid";
    answersWrapper.style.display = "grid";
    generateOptions();
  });
} else {
  console.error("Play button not found!");
}

if (replayButton) {  
  replayButton.addEventListener("click", () => {
    location.reload();
  });
} else {
  console.error("Play button not found!");
}