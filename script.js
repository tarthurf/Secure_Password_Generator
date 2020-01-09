// testing condition
const test = 2;

// Slider functionality
let slider = document.getElementById("charRange");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

// Slider output on html
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Arrays for letters and symbols
let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let symbol = [" ", ",", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~", "[", "]"];

// Checkbox objects
let alpha = document.getElementById("letterCheck");
let caps = document.getElementById("capsCheck");
let numb = document.getElementById("numberCheck");
let symbols = document.getElementById("symbolCheck");

if (test === 1) {
    function noCap() {
        console.log(`caps ${caps.checked} \nalpha ${alpha.checked}`);
    }
}
// create generate button dom element
if (test === 1) {
    function noCap() {
        if (alpha.checked === false && caps.checked === true) {
            console.log(`caps = ${caps.checked} \nalpha = ${alpha.checked}`);
            alert("You cannot capitalize letters that don't exist!");

        }
    }
}


// check range and which parameters are enabled
function arrayLoop(arrayName) {
    let y = arrayName;
    for (let i = 0; i < y.length; i++) {
        console.log(y[i]);
    }
}

arrayLoop(letter)
arrayLoop(symbol)
// Generate numbers function

// generate password