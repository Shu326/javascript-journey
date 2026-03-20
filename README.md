# JavaScript Journey 🚀

My daily JavaScript learning journey.

## Day 1 - Data Types, Variables (let, const, var)
Files:
- `day1.js`
- `day1-practice.js`

## Day 2 - Dialog Boxes in JavaScript
Topics Covered:
- `alert()`
- `confirm()`
- `prompt()`

Files:
- `day2.js`
- `day2-practice.js`

## Day 3 - Strings in JavaScript
Topics Covered:
- String properties:
  - `length`
  - indexing (`str[0]`)
  - last character using `str[str.length - 1]`
- String methods:
  - `trim()`
  - `toUpperCase()`
  - `toLowerCase()`
  - `includes()`
  - `replace()`
  - `split()`
- Template literals:
  - `${variable}`

Files:
- `day3.js`
- `day3-practice.js`

  ## Day 4 - JavaScript Math & Numbers

## Topics Covered
- Math Operators
- Math Methods
- Random Number Generation
- NaN and Infinity

## Files
- day4.js
- day4-practice.js

## What I Learned
- Performed basic math operations in JavaScript
- Used Math methods like sqrt, pow, floor, ceil, round, and random
- Generated random numbers between 1 to 10
- Understood special values like NaN and Infinity

- # Day 5 - JavaScript Comparison Operators

## Topics Covered
- Comparison Operators
- Loose vs Strict Equality
- Loose vs Strict Inequality
- Relational Operators
- Truthy and Falsy Values

## Files
- day5.js
- day5-practice.js

## What I Learned
- Used `==` and `===` to compare values
- Understood the difference between loose and strict comparison
- Practiced `!=` and `!==`
- Used `>`, `<`, `>=`, and `<=`
- Learned how JavaScript handles truthy and falsy values

## Day 6 - Logical Operators in JavaScript
Topics Covered:
- `&&` (AND)
- `||` (OR)
- `!` (NOT)
- Truthy and Falsy values
- Using logical operators with strings and numbers
- `!!` (Double NOT for boolean conversion)

Practice:
- Age check using `&&` and `||`
- Default name using `||`
- Login check
- Tricky logical expressions

Files:
- `day6.js`
- `day6-practice.js`

- ## Day 7 - If Statements in JavaScript
Topics Covered:
- `if` statement
- Simple `if` conditions
- String check using `if`
- Number check using `if`
- User input with `prompt()`
- Using comparison operators inside `if`
- Using logical operators (`&&`, `||`) with `if`
- Truthy/Falsy checks in conditions

Practice:
- Marks check (Pass / Distinction / Outstanding)
- User input check with name and age
- Adult / Minor check
- Welcome message with conditions
- Tricky truthy value check

Files:
- `day7.js`
- `day7-practice.js`

- 
## Day 8 - If Else If Else in JavaScript
Topics Covered:
- `if`
- `else if`
- `else`
- Multiple condition checking
- Branching logic with comparison operators
- Using `prompt()` with conditional statements

Practice:
- Grade system using `if else if else`
- Temperature checker
- Age category checker (Adult / Teenager / Child)
- Cart discount logic
- User input based condition check

- // Problem 1 - Switch - Traffic Light
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

Files:
- `day8.js`
- `day8-practice.js`
## Goal
I am learning JavaScript daily and uploading my practice files to track progress.
