let countries = [];
let originalCountries = []; // Declare the originalCountries array outside the fetch block

fetch("js/countries.json")
  .then((response) => response.json())
  .then((data) => {
    countries = data;
    //console.log(countries); // Log the entire countries array
    //console.log(countries.map(country => country.countryNamePt)); // Log the names of the countries
    originalCountries = [...countries];
    //console.log(originalCountries);
    //console.log(originalCountries.map(country => country.countryNamePt));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// declare elements
const flagImg = document.querySelector("#flag img");
const answerButtons = document.querySelectorAll(".answer");
const shuffleButton = document.querySelector(".shuffle");
const correctAnswersElement = document.querySelector("#correct .score");
const incorrectAnswersElement = document.querySelector("#incorrect .score");
const popupElement = document.querySelector("#popup");
const endGameUi = document.getElementById("end-game");
const startScreen = document.getElementById("start-game");
const gameScreen = document.getElementById("game-screen");
const playButton = document.getElementById("btn-start-game");
const replayButton = document.getElementById("replay");
const showFlag = document.getElementById("flag");
const answersWrapper = document.querySelector(".answers-wrapper");
const answerScore = document.querySelectorAll(".answers-score");
const endCorrect = document.querySelector(".end-score #correct .score");
const endIncorrect = document.querySelector(".end-score #incorrect .score");

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
  return array; // Return the modified array for chaining
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
  const clickedCountryName = clickedButton.textContent;
  const isCorrect = clickedCountryName === selectedName;

  // Remove previous classes from all buttons
  answerButtons.forEach((otherButton) => {
    otherButton.classList.remove("correct", "incorrect");
  });

  // Update score and UI based on correct/incorrect answer
  if (isCorrect) {
    // Handle correct answer
    clickedButton.classList.add("correct");
    correctAnswers++;
    correctStreak++;
    incorrectStreak = 0;
    
    // Animate correct score
    correctAnswersElement.classList.remove("highlight-animation");
    void correctAnswersElement.offsetWidth; // Force reflow
    correctAnswersElement.classList.add("highlight-animation");
    
    // Show streak message
    displayStreakMessage(true);
  } else {
    // Handle incorrect answer
    clickedButton.classList.add("incorrect");
    incorrectAnswers++;
    incorrectStreak++;
    
    // Highlight the correct answer
    answerButtons.forEach((button) => {
      if (button.textContent === selectedName) {
        setTimeout(() => {
          button.classList.add("correct");
        }, 150);
      }
    });
    
    // Animate incorrect score
    incorrectAnswersElement.classList.remove("highlight-animation");
    void incorrectAnswersElement.offsetWidth; // Force reflow
    incorrectAnswersElement.classList.add("highlight-animation");
    
    // Show streak message and reset correct streak
    displayStreakMessage(false);
    correctStreak = 0;
  }

  // Update score displays
  correctAnswersElement.textContent = correctAnswers;
  incorrectAnswersElement.textContent = incorrectAnswers;
  totalAnswers++;

  // Generate new options after a delay
  setTimeout(() => {
    generateOptions();
  }, 600);
}

// Function to display streak messages
function displayStreakMessage(isCorrect) {
  if (isCorrect) {
    // Show message for correct streak
    switch (correctStreak) {
      case 5:
        displayMessage("5 in a row! Keep it up!");
        break;
      case 10:
        displayMessage("10 correct! You're on fire!");
        break;
      case 25:
        displayMessage("Wow! 25 in a row!");
        break;
      case 50:
        displayMessage("Incredible! 50 correct!");
        break;
      case 75:
        displayMessage("75?! You're like an encyclopedia!");
        break;
      case 99:
        displayMessage("99!!! Can you make it perfect?");
        break;
      case 100:
        displayMessage("Congratulations! You did it!!!");
        break;
      default:
        break;
    }
  } else {
    // Show message for incorrect streak
    switch (incorrectStreak) {
      case 3:
        displayMessage("Oh no! 3 in a row...");
        break;
      case 5:
        displayMessage("Hey! Are you sleeping?");
        break;
      case 10:
        displayMessage("10 wrong! Should have studied...");
        break;
      case 20:
        displayMessage("So many mistakes... you won't get far like this!");
        break;
      default:
        break;
    }

    // Check if the correct streak is interrupted
    if (correctStreak >= 10 && correctStreak < 25) {
      displayMessage("Oh no! You had " + correctStreak + " correct...");
    } else if (correctStreak >= 25 && correctStreak < 49) {
      displayMessage("You were at " + correctStreak + " without failing.");
    } else if (correctStreak >= 49 && correctStreak < 50) {
      displayMessage("Oh!!! You almost reached 50!");
    } else if (correctStreak >= 50 && correctStreak < 74) {
      displayMessage("After " + correctStreak + " correct, you miss this one?");
    } else if (correctStreak >= 75 && correctStreak < 99) {
      displayMessage(correctStreak + " without error, and now this?");
    } else if (correctStreak >= 99) {
      displayMessage("HOW??? You missed the last one!");
    }
  }
}

// Function to display messages
function displayMessage(message) {
  popupElement.textContent = message;
  popupElement.style.opacity = "1";
  popupElement.style.top = "40px";
  setTimeout(() => {
    popupElement.style.opacity = "0";
    popupElement.style.top = "20px";
  }, 3000);
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
  } while (usedCountries.includes(selectedCountry.countryName));

  // Add the selected country to the array of used countries
  usedCountries.push(selectedCountry.countryName);

  // Get the ISO code and name of the selected country
  const selectedIsoCode = selectedCountry.isoCode;
  selectedName = selectedCountry.countryName;

  // add respective image
  flagImg.src = selectedCountry.flag4x3;

  // Remove the selected country from the array
  removeItem(countriesCopy, selectedCountry);

  // Randomly select three other countries
  const otherCountries = [];
  for (let i = 0; i < 3; i++) {
    const randomCountry = getRandomItem(countriesCopy);
    otherCountries.push(randomCountry.countryName);
    removeItem(countriesCopy, randomCountry);
  }

  // Combine the names of the selected country and other countries
  const allOptions = [selectedName, ...otherCountries];

  // Shuffle the array of country names
  const shuffledNames = shuffleArray(allOptions);

  // Assign each name to a button
  answerButtons.forEach((button, index) => {
    button.classList.remove("correct", "incorrect");
    button.textContent = shuffledNames[index];
  });
}

// Function to handle end of game
function endGame() {
  // Update UI to indicate end of game
  endGameUi.style.display = "grid";
  endCorrect.textContent = correctAnswers;
  endIncorrect.textContent = incorrectAnswers;
}

// Function to start the game
function startGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "grid";
  
  // Reset scores
  correctAnswers = 0;
  incorrectAnswers = 0;
  totalAnswers = 0;
  correctStreak = 0;
  incorrectStreak = 0;
  usedCountries = [];
  
  // Update score displays
  correctAnswersElement.textContent = "0";
  incorrectAnswersElement.textContent = "0";
  
  // Show game elements
  answerScore.forEach((element) => {
    element.style.opacity = "1";
  });
  
  showFlag.style.display = "grid";
  answersWrapper.style.display = "grid";
  
  // Generate first question
  generateOptions();
}

// Function to restart the game
function restartGame() {
  location.reload();
}

// Attach event listeners
if (shuffleButton) {
  shuffleButton.addEventListener("click", restartGame);
} else {
  console.error("Shuffle button element not found!");
}

if (playButton) {
  playButton.addEventListener("click", startGame);
} else {
  console.error("Play button not found!");
}

if (replayButton) {
  replayButton.addEventListener("click", restartGame);
} else {
  console.error("Replay button not found!");
}
