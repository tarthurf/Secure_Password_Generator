// creating arrays
let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let symbol = [" ", ",", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "", "^", "`", "{", "|", "}", "~", "[", "]"];

// Prompt for what charcters the user wants
// This will change to a less intrusive method later, used mainly for testing at this point

let howLong = prompt("How long would you like your password to be? (Enter a number between 8 - 128)");

alert("Please select what characters you would like to be in your password:");

let useAlpha = confirm("Would you like to use letters?");

let useCaps = confirm("Would you like your letters to be randomly capitalized?")

let useNumb = confirm("Would you like to use numbers?");

let useSymbol = confirm("Would you like to use symbols?");
