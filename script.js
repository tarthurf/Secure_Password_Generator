// This function copies the contents of an element onto the clipboard
function copyToClipboard(id) {
  document.getElementById(id).select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
}

// This function generates a random number starting at 0 up to the length of the max
function randomUpToMax(max) {
  return Math.floor(Math.random() * max);
}

// Slider functionality
const slider = document.getElementById("charRange");
const sliderOutput = document.getElementById("sliderValue");
sliderOutput.innerHTML = slider.value;

// Slider output on html
slider.oninput = function () {
  sliderOutput.innerHTML = this.value;
}

// Arrays for letters, uppercase, symbols and numbers
const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const capsArray = lettersArray.map(e => e.toUpperCase());
const symbolsArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~", "[", "]"];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// empty array for password
let password = [];

const copyButton = document.getElementById("copy");
const passwordBox = document.getElementById("passwordBox");
const lettersCheckEl = document.getElementById("letterCheck");
const capsCheckEl = document.getElementById("capsCheck");
const numberCheckEl = document.getElementById("numberCheck");
const symbolsCheckEl = document.getElementById("symbolCheck");
const customSymbolsCheckEl = document.getElementById("customSymbolCheck");
lettersCheckEl.checked = true;
capsCheckEl.checked = true;
numberCheckEl.checked = true;
symbolsCheckEl.checked = false;
customSymbolsCheckEl.checked = false;

const customSymbolInputEl = document.createElement("textarea");
customSymbolInputEl.id = "symbol-input";
customSymbolInputEl.className = "form-control"
customSymbolInputEl.setAttribute("placeholder", "Add custom symbols here. Example: !*&$><")


function symbolChecker() {
  symbolsCheckEl.checked === false ?
  customSymbolsCheckEl.checked = false
  :
  null;

  if (customSymbolsCheckEl.checked === true) {
    document.getElementById("custom-symbol-input").appendChild(customSymbolInputEl)
  }
  else if (customSymbolsCheckEl.checked === false) {
    document.getElementById("symbol-input").remove()
  }
}

function generate() {
  password = [];
  const passwordLength = parseInt(sliderOutput.textContent)
  const alphaIsChecked = lettersCheckEl.checked;
  const capsIsChecked = capsCheckEl.checked;
  const numbIsChecked = numberCheckEl.checked;
  const symbolsIsChecked = symbolsCheckEl.checked;
  const customSymbolsIsChecked = customSymbolsCheckEl.checked;
  const possibleCharacters = [];
  if (alphaIsChecked) possibleCharacters.push(lettersArray);
  if (capsIsChecked) possibleCharacters.push(capsArray);
  if (numbIsChecked) possibleCharacters.push(numbersArray);
  if (symbolsIsChecked && !customSymbolsIsChecked) possibleCharacters.push(symbolsArray);
  if (symbolsIsChecked && customSymbolsIsChecked) {
    const customSymbols = (customSymbolInputEl.value).replace(/[a-z 0-9]/ig, "");
    const customSymbolsArray = customSymbols.trim().split("");
    possibleCharacters.push(customSymbolsArray);
    document.getElementById("symbol-input").value = "";
  };
  if (possibleCharacters.length) {
    let randI = 0
    for (let i = 0; i < passwordLength; i++) {
      randI = randomUpToMax(possibleCharacters.length);
      console.log(`random array index: ${randI}`);
      const randArray = possibleCharacters[randI];
      const randChar = randArray[randomUpToMax(randArray.length)];
      password.push(randChar);
    }
  } else {
    alert("Please select something.");
  }
  console.log(password);
  let stringPassword = password.join("");
  console.log(stringPassword);
  passwordBox.innerHTML = stringPassword;
}