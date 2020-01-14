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

// empty array for password
let password = [];

// an object to be filled with a random number
let chance = 0;
console.log(`Chance Current: ${chance}`)

// Checkbox objects
let alpha = document.getElementById("letterCheck").value; 
let caps = document.getElementById("capsCheck").value;
let numb = document.getElementById("numberCheck").value;
let symbols = document.getElementById("symbolCheck").value;
caps = true;
alpha = true;
numb = true;
symbols = true;

// create generate button dom element
// if (test === 2) {
    function noCap() {
        if (alpha.checked === false && caps.checked === true) {
            alert("You cannot capitalize letters that don't exist!");
        }   else {
                generate()
        }
    }
// }

// this function adds a random number to the password array
// if (test === 2 ) {
    function addNum() {
        let z = Math.floor(Math.random()* 10);
        password.push(z)
    }
    addNum();
    console.log(`Number added to password:  ${password}`);  
// }

// this function generates a random number between 0.01-0.99
// if (test === 2) {
    function randNum() {
        chance = Math.random();
    }
    randNum();
    console.log(`Chance Current: ${chance}`);
// }

// This function will loop through an array, get a random index
function valSelect(array) {
    password.push(array[(Math.floor((Math.random()* array.length)+ 1))]);
}
valSelect(symbol);
console.log(`symbol added to password: ${password}`);


// This function generates a password
// if (test === 2) {
    function generate() {
        console.log(`Letters: ${alpha} \ncaps: ${caps} \nnumbers: ${numb} \nsymbols: ${symbols}`)
        console.log("start")
        for (let i = 0; i < output.length; i++) {
            randNum();
            console.log(`Function chance: ${chance}`)
            if (chance < .33) {
                if (caps === true) {
                    randNum();
                    if (chance < .50) {
                        let lowerAlpha = letter[(Math.floor((Math.random()* letter.length)+ 1))];
                        let lowAlpha = capAlpha.toUpperCase();
                    }   else {
                            if (alpha === true) {
                                valSelect(letter);
                            }
                        }   
                    }
                }   
                else if (chance > .33 && chance < .66) {
                    valSelect(symbol)
                }   else { addNum();
            }
        }
    }
// }