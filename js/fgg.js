let countries = [];
let originalCountries = []; // Declare the originalCountries array outside the fetch block

fetch('js/countries.json')
  .then(response => response.json())
  .then(data => {
    countries = data;
    //console.log(countries); // Log the entire countries array
    //console.log(countries.map(country => country.countryName)); // Log the names of the countries
    originalCountries = [...countries];
    //console.log(originalCountries);
    //console.log(originalCountries.map(country => country.countryName));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// fetch('js/countries.json')
//   .then(response => response.json())
//   .then(data => {
//     countries = data;
//     console.log(countries.map(country => country.name));

//     // Ensure countries is an array before using it
//     if (Array.isArray(countries)) {
//       // Assign the fetched data to the originalCountries array declared outside the fetch block
//       originalCountries = [...countries];
//       // Now you can use originalCountries
//     } else {
//       console.error('Countries data is not an array.');
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// define elements
const flagElement = document.getElementById("flag");
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
// let answers = 0; //not being used

let usedCountries = [];

// copy the original array
//const originalCountries = [...countries];

// Track the number of answers
let totalAnswers = 0;

// Function to handle button click
function handleButtonClick(event) {
  const clickedButton = event.target;
  const clickedCountryName = clickedButton.textContent;

  // right & wrong answers elements
  const correctAnswersElement = document.querySelector("#correct .score");
  const incorrectAnswersElement = document.querySelector("#incorrect .score");

  // Remove previous classes from all buttons
  answerButtons.forEach((otherButton) => {
    otherButton.classList.remove("correct", "incorrect");
  });

  // Check if clicked option matches selectedName
  if (clickedCountryName === selectedName) {
    clickedButton.classList.add("correct");
    correctAnswers += 1;
    
    correctAnswersElement.classList.remove("highlight-animation");
    void correctAnswersElement.offsetWidth;
    correctAnswersElement.classList.add("highlight-animation");

  } else {
    clickedButton.classList.add("incorrect");
    incorrectAnswers += 1;

    incorrectAnswersElement.classList.remove("highlight-animation");
    void incorrectAnswersElement.offsetWidth;
    incorrectAnswersElement.classList.add("highlight-animation");
  }

  // write the right and wrong answers
  correctAnswersElement.textContent = correctAnswers;
  incorrectAnswersElement.textContent = incorrectAnswers;

  totalAnswers++; // Increment total answers

  // Generate new options after a delay
  setTimeout(() => {
    generateOptions();
  }, 500);
}

// Attach event listener to answer buttons
answerButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// country name variable
let selectedName;

// Function to handle end of game
function endGame() {
  // Display final report
  console.log("Game over! Total answers:", totalAnswers);
  console.log("Correct answers:", correctAnswers);
  console.log("Incorrect answers:", incorrectAnswers);

  // You can also update the UI to indicate end of game
  const endGame = document.getElementById("end-game");
  endGame.style.display = "grid";

  const endCorrect = document.querySelector(".end-score #correct .score");
  endCorrect.textContent = correctAnswers;
  const endIncorrect = document.querySelector(".end-score #incorrect .score");
  endIncorrect.textContent = incorrectAnswers;
}

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

  // Clear existing classes and add the base class "fi" for flag element
  flagElement.className = "fi";
  flagElement.classList.add("fi-" + selectedCountry.isoCode);

  // Remove the selected country from the array
  removeItem(countriesCopy, selectedCountry);

  // Randomly select three other countries
  const otherCountries = [];
  for (let i = 0; i < 3; i++) {
    const randomCountry = getRandomItem(countriesCopy);
    otherCountries.push(randomCountry.countryName);
    removeItem(countriesCopy, randomCountry);
  }

  // how many answers
  console.log("Total answers at generateOptions: " + totalAnswers);

  // Combine the names of the selected country and other countries
  const allCountryNames = [selectedName, ...otherCountries];

  // Shuffle the array of country names
  const shuffledNames = shuffleArray(allCountryNames);

  // Assign each name to a button
  answerButtons.forEach((button, index) => {
    button.classList.remove("correct", "incorrect");
    button.textContent = shuffledNames[index];
  });

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
const playButton = document.getElementById("start-game");
const showFlag = document.getElementById("flag");
const answersWrapper = document.querySelector(".answers-wrapper");
const questionTitle = document.querySelector(".question-title");
const answerScore = document.querySelectorAll(".answers-score");

if (playButton) {  
  playButton.addEventListener("click", () => {
    playButton.style.display = "none";
    questionTitle.style.opacity = "0";

    answerScore.forEach(element => {
      element.style.opacity = "1";
  });

    showFlag.style.display = "block";
    answersWrapper.style.display = "grid";
    generateOptions();
  });
} else {
  console.error("Play button not found!");
}