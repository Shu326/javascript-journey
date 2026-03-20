// Switch Statement

// Example 1 - Days
let day = "Monday";

switch(day) {
    case "Monday":
        console.log("Kaam ka din!");
        break;
    case "Saturday":
        console.log("Half day!");
        break;
    case "Sunday":
        console.log("Holiday!");
        break;
    default:
        console.log("Normal day!");
}

// Example 2 - Grade
let grade = "A";

switch(grade) {
    case "A":
        console.log("Outstanding!");
        break;
    case "B":
        console.log("Good!");
        break;
    case "C":
        console.log("Average!");
        break;
    default:
        console.log("Fail!");
}

// Example 3 - Break without
let num = 1;
switch(num) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
// Output: One, Two, Three!

// Nested If-Else
let age = 20;
let hasId = true;

if(age >= 18) {
    console.log("Age ok!");
    if(hasId) {
        console.log("ID bhi hai — Entry!");
    } else {
        console.log("ID nahi — No Entry!");
    }
} else {
    console.log("Age kam hai — No Entry!");
}

// Example 2 - Nested
let marks = 80;
let attendance = 75;

if(marks >= 35) {
    if(attendance >= 75) {
        console.log("Pass + Attendance ok!");
    } else {
        console.log("Pass but Attendance kam!");
    }
} else {
    console.log("Fail!");
}