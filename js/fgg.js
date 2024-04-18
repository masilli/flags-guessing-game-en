const countries = [
  {
    name: "Portugal",
    colors: ["vermelho", "verde"],
    continent: "Europa",
    isoCode: "pt",
  },
  {
    name: "Espanha",
    colors: ["vermelho", "amarelo"],
    continent: "Europa",
    isoCode: "es",
  },
  {
    name: "França",
    colors: ["azul", "branco", "vermelho"],
    continent: "Europa",
    isoCode: "fr",
  },
  {
    name: "Alemanha",
    colors: ["preto", "vermelho", "amarelo"],
    continent: "Europa",
    isoCode: "de",
  },
  {
    name: "Itália",
    colors: ["verde", "branco", "vermelho"],
    continent: "Europa",
    isoCode: "it",
  },
  {
    name: "Reino Unido",
    colors: ["vermelho", "branco", "azul"],
    continent: "Europa",
    isoCode: "gb",
  },
  {
    name: "Canadá",
    colors: ["vermelho", "branco"],
    continent: "América do Norte",
    isoCode: "ca",
  },
  {
    name: "Estados Unidos",
    colors: ["vermelho", "branco", "azul"],
    continent: "América do Norte",
    isoCode: "us",
  },
  {
    name: "Brasil",
    colors: ["verde", "amarelo", "azul"],
    continent: "América do Sul",
    isoCode: "br",
  },
  {
    name: "Austrália",
    colors: ["azul", "vermelho", "branco"],
    continent: "Oceânia",
    isoCode: "au",
  },
  {
    name: "Japão",
    colors: ["vermelho", "branco"],
    continent: "Ásia",
    isoCode: "jp",
  },
  {
    name: "China",
    colors: ["vermelho", "amarelo"],
    continent: "Ásia",
    isoCode: "cn",
  },
  {
    name: "Índia",
    colors: ["laranja", "branco", "verde"],
    continent: "Ásia",
    isoCode: "in",
  },
  {
    name: "México",
    colors: ["verde", "branco", "vermelho"],
    continent: "América do Norte",
    isoCode: "mx",
  },
  {
    name: "Rússia",
    colors: ["branco", "azul", "vermelho"],
    continent: "Europa/Ásia",
    isoCode: "ru",
  },
  {
    name: "África do Sul",
    colors: ["preto", "verde", "amarelo", "branco", "vermelho", "azul"],
    continent: "África",
    isoCode: "za",
  },
  {
    name: "Argentina",
    colors: ["azul", "branco"],
    continent: "América do Sul",
    isoCode: "ar",
  },
  {
    name: "Egipto",
    colors: ["preto", "branco", "vermelho"],
    continent: "África",
    isoCode: "eg",
  },
  {
    name: "Turquia",
    colors: ["vermelho", "branco"],
    continent: "Europa/Ásia",
    isoCode: "tr",
  },
  {
    name: "Indonésia",
    colors: ["vermelho", "branco"],
    continent: "Ásia",
    isoCode: "id",
  },
  {
    name: "Suécia",
    colors: ["azul", "amarelo"],
    continent: "Europa",
    isoCode: "se",
  },
  {
    name: "Finlândia",
    colors: ["azul", "branco"],
    continent: "Europa",
    isoCode: "fi",
  },
  {
    name: "Dinamarca",
    colors: ["vermelho", "branco"],
    continent: "Europa",
    isoCode: "dk",
  },
  {
    name: "Países Baixos",
    colors: ["vermelho", "branco", "azul"],
    continent: "Europa",
    isoCode: "nl",
  },
  {
    name: "Bélgica",
    colors: ["preto", "amarelo", "vermelho"],
    continent: "Europa",
    isoCode: "be",
  },
  {
    name: "República Checa",
    colors: ["branco", "vermelho", "azul"],
    continent: "Europa",
    isoCode: "cz",
  },
  {
    name: "Roménia",
    colors: ["azul", "amarelo", "vermelho"],
    continent: "Europa",
    isoCode: "ro",
  },
  {
    name: "Noruega",
    colors: ["vermelho", "branco", "azul"],
    continent: "Europa",
    isoCode: "no",
  },
  {
    name: "Suíça",
    colors: ["vermelho", "branco"],
    continent: "Europa",
    isoCode: "ch",
  },
  {
    name: "Áustria",
    colors: ["vermelho", "branco"],
    continent: "Europa",
    isoCode: "at",
  },
  {
    name: "Polónia",
    colors: ["branco", "vermelho"],
    continent: "Europa",
    isoCode: "pl",
  },
  {
    name: "Grécia",
    colors: ["azul", "branco"],
    continent: "Europa",
    isoCode: "gr",
  },
  {
    name: "Irlanda",
    colors: ["verde", "branco", "laranja"],
    continent: "Europa",
    isoCode: "ie",
  },
  {
    name: "Hungria",
    colors: ["vermelho", "branco", "verde"],
    continent: "Europa",
    isoCode: "hu",
  },
  {
    name: "Bulgária",
    colors: ["branco", "verde", "vermelho"],
    continent: "Europa",
    isoCode: "bg",
  },
  {
    name: "Estónia",
    colors: ["azul", "preto", "branco"],
    continent: "Europa",
    isoCode: "ee",
  },
  {
    name: "Letónia",
    colors: ["vermelho", "branco"],
    continent: "Europa",
    isoCode: "lv",
  },
  {
    name: "Lituânia",
    colors: ["amarelo", "verde", "vermelho"],
    continent: "Europa",
    isoCode: "lt",
  },
  {
    name: "Eslováquia",
    colors: ["branco", "azul", "vermelho"],
    continent: "Europa",
    isoCode: "sk",
  },
  {
    name: "Eslovénia",
    colors: ["branco", "azul", "verde"],
    continent: "Europa",
    isoCode: "si",
  },
  {
    name: "Chipre",
    colors: ["branco", "amarelo"],
    continent: "Europa",
    isoCode: "cy",
  },
  {
    name: "Quénia",
    colors: ["preto", "vermelho", "verde", "branco"],
    continent: "África",
    isoCode: "ke",
  },
  {
    name: "Nigéria",
    colors: ["verde", "branco"],
    continent: "África",
    isoCode: "ng",
  },
  {
    name: "Marrocos",
    colors: ["vermelho", "verde"],
    continent: "África",
    isoCode: "ma",
  },
  {
    name: "Tailândia",
    colors: ["vermelho", "branco", "azul"],
    continent: "Ásia",
    isoCode: "th",
  },
  {
    name: "Vietname",
    colors: ["vermelho", "amarelo"],
    continent: "Ásia",
    isoCode: "vn",
  },
  {
    name: "Coreia do Sul",
    colors: ["vermelho", "azul", "branco", "preto"],
    continent: "Ásia",
    isoCode: "kr",
  },
  {
    name: "Chile",
    colors: ["vermelho", "branco", "azul"],
    continent: "América do Sul",
    isoCode: "cl",
  },
  {
    name: "Colômbia",
    colors: ["amarelo", "azul", "vermelho"],
    continent: "América do Sul",
    isoCode: "co",
  },
  {
    name: "Peru",
    colors: ["vermelho", "branco", "vermelho"],
    continent: "América do Sul",
    isoCode: "pe",
  },
  {
    name: "Nova Zelândia",
    colors: ["preto", "branco", "azul"],
    continent: "Oceânia",
    isoCode: "nz",
  },
  {
    name: "Cuba",
    colors: ["vermelho", "branco", "azul"],
    continent: "América do Norte",
    isoCode: "cu",
  },
  {
    name: "Costa Rica",
    colors: ["azul", "branco", "vermelho", "amarelo"],
    continent: "América do Norte",
    isoCode: "cr",
  },
  {
    name: "Guatemala",
    colors: ["azul", "branco"],
    continent: "América do Norte",
    isoCode: "gt",
  },
  {
    name: "Jamaica",
    colors: ["dourado", "preto", "verde"],
    continent: "América do Norte",
    isoCode: "jm",
  },
  {
    name: "Ucrânia",
    colors: ["azul", "amarelo"],
    continent: "Europa",
    isoCode: "ua",
  },
  {
    name: "Islândia",
    colors: ["branco", "azul", "vermelho"],
    continent: "Europa",
    isoCode: "is",
  },
  {
    name: "Venezuela",
    colors: ["amarelo", "azul", "vermelho"],
    continent: "América do Sul",
    isoCode: "ve",
  },
  {
    name: "Equador",
    colors: ["amarelo", "azul", "vermelho"],
    continent: "América do Sul",
    isoCode: "ec",
  },
  {
    name: "Paraguai",
    colors: ["vermelho", "branco", "azul"],
    continent: "América do Sul",
    isoCode: "py",
  },
  {
    name: "Uruguai",
    colors: ["azul celeste", "branco", "amarelo dourado"],
    continent: "América do Sul",
    isoCode: "uy",
  },
  {
    name: "Bolívia",
    colors: ["vermelho", "amarelo", "verde"],
    continent: "América do Sul",
    isoCode: "bo",
  },
  {
    name: "Gana",
    colors: ["vermelho", "dourado", "verde", "preto"],
    continent: "África",
    isoCode: "gh",
  },
  {
    name: "Etiópia",
    colors: ["verde", "amarelo", "vermelho"],
    continent: "África",
    isoCode: "et",
  },
  {
    name: "Senegal",
    colors: ["verde", "amarelo", "vermelho"],
    continent: "África",
    isoCode: "sn",
  },
  {
    name: "Costa do Marfim",
    colors: ["laranja", "branco", "verde"],
    continent: "África",
    isoCode: "ci",
  },
  {
    name: "Irão",
    colors: ["verde", "branco", "vermelho"],
    continent: "Ásia",
    isoCode: "ir",
  },
  {
    name: "Israel",
    colors: ["azul", "branco"],
    continent: "Ásia",
    isoCode: "il",
  },
  {
    name: "Arábia Saudita",
    colors: ["verde", "branco"],
    continent: "Ásia",
    isoCode: "sa",
  },
  {
    name: "Malásia",
    colors: ["amarelo", "preto", "vermelho", "branco"],
    continent: "Ásia",
    isoCode: "my",
  },
  {
    name: "Filipinas",
    colors: ["azul", "vermelho", "amarelo"],
    continent: "Ásia",
    isoCode: "ph",
  },
  {
    name: "Palau",
    colors: ["azul claro", "amarelo", "vermelho", "preto", "branco"],
    continent: "Oceânia",
    isoCode: "pw",
  },
  {
    name: "Mônaco",
    colors: ["vermelho", "branco"],
    continent: "Europa",
    isoCode: "mc"
},
{
    name: "Liechtenstein",
    colors: ["azul", "vermelho", "amarelo"],
    continent: "Europa",
    isoCode: "li"
},
{
    name: "Eslovênia",
    colors: ["branco", "azul", "verde"],
    continent: "Europa",
    isoCode: "si"
},
{
    name: "Croácia",
    colors: ["vermelho", "branco", "azul"],
    continent: "Europa",
    isoCode: "hr"
},
{
    name: "Bósnia e Herzegovina",
    colors: ["azul", "amarelo", "branco"],
    continent: "Europa",
    isoCode: "ba"
},
{
    name: "Montenegro",
    colors: ["vermelho", "azul", "branco"],
    continent: "Europa",
    isoCode: "me"
},
{
    name: "Macedônia do Norte",
    colors: ["vermelho", "amarelo", "azul"],
    continent: "Europa",
    isoCode: "mk"
},
{
    name: "Sérvia",
    colors: ["vermelho", "azul", "branco"],
    continent: "Europa",
    isoCode: "rs"
},
{
    name: "Kosovo",
    colors: ["azul", "amarelo", "branco"],
    continent: "Europa",
    isoCode: "xk"
},
{
    name: "Albânia",
    colors: ["vermelho", "preto"],
    continent: "Europa",
    isoCode: "al"
},
{
    name: "Malta",
    colors: ["branco", "vermelho"],
    continent: "Europa",
    isoCode: "mt"
},
{
    name: "Jordânia",
    colors: ["verde", "branco", "preto"],
    continent: "Ásia",
    isoCode: "jo"
},
{
    name: "Líbano",
    colors: ["vermelho", "verde", "branco"],
    continent: "Ásia",
    isoCode: "lb"
},
{
    name: "Emirados Árabes Unidos",
    colors: ["verde", "branco", "vermelho"],
    continent: "Ásia",
    isoCode: "ae"
},
{
    name: "Omã",
    colors: ["vermelho", "branco", "verde"],
    continent: "Ásia",
    isoCode: "om"
},
{
    name: "Iêmen",
    colors: ["vermelho", "branco", "preto"],
    continent: "Ásia",
    isoCode: "ye"
},
{
    name: "Azerbaijão",
    colors: ["azul", "vermelho", "verde"],
    continent: "Ásia",
    isoCode: "az"
},
{
    name: "Geórgia",
    colors: ["vermelho", "branco"],
    continent: "Ásia",
    isoCode: "ge"
},
{
  name: "Armênia",
  colors: ["vermelho", "azul", "laranja"],
  continent: "Ásia",
  isoCode: "am"
  },
  {
  name: "Cazaquistão",
  colors: ["azul", "amarelo", "celeste"],
  continent: "Ásia",
  isoCode: "kz"
  },
  {
  name: "Uzbequistão",
  colors: ["azul", "branco", "verde"],
  continent: "Ásia",
  isoCode: "uz"
  },
  {
  name: "Tajiquistão",
  colors: ["vermelho", "branco", "verde", "azul"],
  continent: "Ásia",
  isoCode: "tj"
  },
  {
  name: "Quirguistão",
  colors: ["vermelho", "amarelo"],
  continent: "Ásia",
  isoCode: "kg"
  },
  {
  name: "Turcomenistão",
  colors: ["verde", "vermelho", "branco"],
  continent: "Ásia",
  isoCode: "tm"
  },
  {
  name: "Nepal",
  colors: "vermelho",
  continent: "Ásia",
  isoCode: "np"
  },
  {
  name: "Butão",
  colors: ["amarelo", "vermelho", "azul"],
  continent: "Ásia",
  isoCode: "bt"
  },
  {
  name: "Sri Lanka",
  colors: ["amarelo", "verde", "vermelho"],
  continent: "Ásia",
  isoCode: "lk"
  },
  {
  name: "Maldivas",
  colors: ["verde", "vermelho", "branco"],
  continent: "Ásia",
  isoCode: "mv"
  },
  {
  name: "Singapura",
  colors: ["vermelho", "branco"],
  continent: "Ásia",
  isoCode: "sg"
  },
  {
  name: "Camboja",
  colors: ["vermelho", "azul"],
  continent: "Ásia",
  isoCode: "kh"
  },
  {
  name: "Laos",
  colors: ["vermelho", "azul", "branco"],
  continent: "Ásia",
  isoCode: "la"
  },
  {
  name: "Myanmar (Birmânia)",
  colors: ["amarelo", "verde", "vermelho"],
  continent: "Ásia",
  isoCode: "mm"
  },
  {
  name: "Papua-Nova Guiné",
  colors: "vermelho, preto, ouro",
  continent: "Oceania",
  isoCode: "pg"
  },
  {
  name: "Ilhas Salomão",
  colors: ["azul", "verde", "amarelo"],
  continent: "Oceania",
  isoCode: "sb"
  },
  {
  name: "Fiji",
  colors: ["azul", "branco", "vermelho"],
  continent: "Oceania",
  isoCode: "fj"
  },

{
  name: "Nova Caledônia",
  colors: ["azul, verde, vermelho"],
  continent: "Oceania",
  isoCode: "nc"
  },
  {
  name: "Vanuatu",
  colors: ["vermelho", "verde", "preto", "amarelo"],
  continent: "Oceania",
  isoCode: "vu"
  },
  {
  name: "Samoa",
  colors: ["vermelho", "branco", "azul"],
  continent: "Oceania",
  isoCode: "ws"
  },
  {
  name: "Tonga",
  colors: ["vermelho", "branco"],
  continent: "Oceania",
  isoCode: "to"
  },
  {
  name: "Camarões",
  colors: ["verde", "vermelho", "amarelo"],
  continent: "África",
  isoCode: "cm"
  },
  {
  name: "República Democrática do Congo",
  colors: ["azul", "amarelo", "vermelho"],
  continent: "África",
  isoCode: "cd"
  }
];

console.log(countries.map(country => country.name));

// find duplicates
function findDuplicates(arr) {
  const seenNames = new Set();
  const duplicates = [];

  for (const element of arr) {
    const countryName = element.name; // Extract the country name

    if (seenNames.has(countryName)) {
      duplicates.push(element);
    } else {
      seenNames.add(countryName);
    }
  }

  return duplicates;
}

const duplicateCountries = findDuplicates(countries);

if (duplicateCountries.length > 0) {
  console.log("Duplicate countries found:", duplicateCountries);
} else {
  console.log("No duplicate countries found.");
}

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
const originalCountries = [...countries];

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
  } while (usedCountries.includes(selectedCountry.name));

  // Add the selected country to the array of used countries
  usedCountries.push(selectedCountry.name);

  // Get the ISO code and name of the selected country
  const selectedIsoCode = selectedCountry.isoCode;
  selectedName = selectedCountry.name;

  // Clear existing classes and add the base class "fi" for flag element
  flagElement.className = "fi";
  flagElement.classList.add("fi-" + selectedCountry.isoCode);

  // Remove the selected country from the array
  removeItem(countriesCopy, selectedCountry);

  // Randomly select three other countries
  const otherCountries = [];
  for (let i = 0; i < 3; i++) {
    const randomCountry = getRandomItem(countriesCopy);
    otherCountries.push(randomCountry.name);
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