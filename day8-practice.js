// Problem 1 - Grade System
let score = 82;

if(score >= 90) {
    console.log("Grade: A+");
} else if(score >= 80) {
    console.log("Grade: A");
} else if(score >= 70) {
    console.log("Grade: B");
} else if(score >= 60) {
    console.log("Grade: C");
} else if(score >= 35) {
    console.log("Grade: D");
} else {
    console.log("Grade: F — Fail!");
}

// Problem 2 - Temperature
let temp = 35;

if(temp >= 40) {
    console.log("Bahut garmi hai!");
} else if(temp >= 30) {
    console.log("Garmi hai!");
} else if(temp >= 20) {
    console.log("Normal hai!");
} else if(temp >= 10) {
    console.log("Thanda hai!");
} else {
    console.log("Bahut thanda hai!");
}

// Problem 3 - Prompt se
let userAge = prompt("Age likho:");

if(userAge >= 18) {
    console.log("Adult — vote kar sakta hai!");
} else if(userAge >= 13) {
    console.log("Teenager!");
} else {
    console.log("Child!");
}

// Problem 4 - Tricky
let x = 0;
let y = "";
let z = "Shubham";

if(x) {
    console.log("x truthy hai!");
} else if(y) {
    console.log("y truthy hai!");
} else if(z) {
    console.log("z truthy hai!"); // yeh chalega!
} else {
    console.log("Sab falsy hai!");
}