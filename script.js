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

let chance = 0;

// Checkbox objects
let alpha = document.getElementById("letterCheck");
let caps = document.getElementById("capsCheck");
let numb = document.getElementById("numberCheck");
let symbols = document.getElementById("symbolCheck");

// create generate button dom element
if (test === 1) {
    function noCap() {
        if (alpha.checked === false && caps.checked === true) {
            console.log(`caps = ${caps.checked} \nalpha = ${alpha.checked}`);
            alert("You cannot capitalize letters that don't exist!");
        } else {
            generate()
        }
    }
}

function addNum() {
    let z = Math.floor(Math.random()* 10);
    password.push(z)
}

function randNum() {
    let chance = Math.random();
}

// This function will loop through an array, get a random index
function valSelect(array) {
    password.push(array[(Math.floor((Math.random()* array.length)+ 1))]);
    console.log(password);
}            

if (test === 1) {
    function generate() {
    for (let i = 0; i < output.length; i++) {
        if (chance < .33) {
            if (letterCheck === true) {
                valSelect(letter);

            }
        } else if (chance > .33 && chance < .66) 

        {
            
        } else if (chance > .66 && chance < .99) {
            
        }   

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