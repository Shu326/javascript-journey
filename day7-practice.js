// Problem 1 - Marks Check
let marks = 75;

if(marks >= 35) {
    console.log("Pass!");
}
if(marks >= 75) {
    console.log("Distinction!");
}
if(marks > 90) {
    console.log("Outstanding!");
}

// Problem 2 - User Input
let userName = prompt("Naam likho:");
let userAge = prompt("Age likho:");

if(userName) {
    console.log("Hello " + userName + "!");
}
if(userAge >= 18) {
    console.log("Adult hai!");
}
if(userName && userAge >= 18) {
    console.log("Welcome " + userName + "!");
}

// Problem 3 - Tricky
let x = 0;
let y = "hello";
let z = null;

if(x || y || z) {
    console.log("Kuch toh hai!");
}
// y = "hello" truthy hai — isliye print hoga!