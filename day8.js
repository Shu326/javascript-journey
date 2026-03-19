// If - Else If - Else

// Example 1 - Marks
let marks = 75;

if(marks >= 90) {
    console.log("Outstanding!");
} else if(marks >= 75) {
    console.log("Distinction!");
} else if(marks >= 35) {
    console.log("Pass!");
} else {
    console.log("Fail!");
}

// Example 2 - Age
let age = 15;

if(age >= 18) {
    console.log("Adult hai!");
} else if(age >= 13) {
    console.log("Teenager hai!");
} else {
    console.log("Child hai!");
}

// Example 3 - Cart
let cartAmount = 300;

if(cartAmount >= 1000) {
    console.log("20% discount!");
} else if(cartAmount >= 500) {
    console.log("10% discount!");
} else if(cartAmount >= 200) {
    console.log("5% discount!");
} else {
    console.log("No discount!");
}

// Example 4 - Login
let userName = "Shubham";
let password = "abc123";

if(!userName) {
    console.log("Username bharo!");
} else if(!password) {
    console.log("Password bharo!");
} else if(userName && password) {
    console.log("Login successful!");
}