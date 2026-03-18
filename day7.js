// If Statement

// Simple if
let age = 20;
if(age >= 18) {
    console.log("Vote kar sakta hai!");
}

// String check
let name = "Shubham";
if(name) {
    console.log("Hello " + name);
}

// Number check
let marks = 30;
if(marks >= 35) {
    console.log("Pass!");
}

// User input ke saath
let userAge = prompt("Teri age kya hai?");
if(userAge >= 18) {
    console.log("Tu adult hai!");
}
if(userAge < 18) {
    console.log("Tu minor hai!");
}

// Logical operators ke saath
let hasId = true;
if(age >= 18 && hasId) {
    console.log("Entry mil sakti hai!");
}

let hasCard = false;
let hasCash = true;
if(hasCard || hasCash) {
    console.log("Payment ho sakti hai!");
}

// Login check
let userName = "Shubham";
let password = "abc123";
if(userName && password) {
    console.log("Login successful!");
}

// Cart check
let cartAmount = 600;
if(cartAmount >= 500) {
    console.log("Free delivery!");
}