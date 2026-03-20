// Problem 1 - Switch - Traffic Light
let light = "red";

switch(light) {
    case "red":
        console.log("Ruko!");
        break;
    case "yellow":
        console.log("Taiyar raho!");
        break;
    case "green":
        console.log("Jao!");
        break;
    default:
        console.log("Invalid light!");
}

// Problem 2 - Switch - Calculator
let operator = "+";
let a = 10;
let b = 5;

switch(operator) {
    case "+":
        console.log(a + b); // 15
        break;
    case "-":
        console.log(a - b); // 5
        break;
    case "*":
        console.log(a * b); // 50
        break;
    case "/":
        console.log(a / b); // 2
        break;
    default:
        console.log("Invalid operator!");
}

// Problem 3 - Nested If-Else
let userName = "Shubham";
let password = "abc123";
let isAdmin = true;

if(userName && password) {
    console.log("Login successful!");
    if(isAdmin) {
        console.log("Admin dashboard!");
    } else {
        console.log("User dashboard!");
    }
} else {
    console.log("Login failed!");
}

// Problem 4 - Nested - Shopping
let cartAmount = 600;
let isMember = true;

if(cartAmount >= 500) {
    if(isMember) {
        console.log("20% discount — Member!");
    } else {
        console.log("10% discount!");
    }
} else {
    if(isMember) {
        console.log("5% discount — Member!");
    } else {
        console.log("Koi discount nahi!");
    }
}