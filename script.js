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

let password = [];

let chance = 0

// Checkbox objects
let alpha = document.getElementById("letterCheck");
let caps = document.getElementById("capsCheck");
let numb = document.getElementById("numberCheck");
let symbols = document.getElementById("symbolCheck");

// create generate button dom element
if (test === 2) {
    function noCap() {
        if (alpha.checked === false && caps.checked === true) {
            console.log(`caps = ${caps.checked} \nalpha = ${alpha.checked}`);
            alert("You cannot capitalize letters that don't exist!");
        } else {
            generate()
        }
    }
}

// This function will generate a random number
function valSelect(array) {
    for (let i = 0; i < array.length; i++) {
        
    }
}            

let chance = Math.random();

function generate() {
    for (let i = 0; i < output.length; i++) {
        if (chance < .25) {
            if (letterCheck === true) {
                password.pop()
            }
        } else if (chance > .25 && chance < .50) {
            
        } else if (chance > .50 && chance < .75) {
            
        } else if (chance > .75 && chance < .99) {
            
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

function generate() {
    for (let i = 0; i < output.length; i++) {
        
    }
    
}

arrayLoop(letter)
arrayLoop(symbol)
// Generate numbers function

// generate password