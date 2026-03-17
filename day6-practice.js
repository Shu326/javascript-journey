// Problem 1 - Age Check
let age = 17;
let hasParentPermission = true;

console.log(age >= 18 && hasParentPermission); // false
console.log(age >= 18 || hasParentPermission); // true

// Problem 2 - Default Name
let userName = "";
let defaultName = "Guest";

console.log(userName || defaultName); // Guest

// Problem 3 - Login Check
let userEmail = "shubham@gmail.com";
let userPassword = "abc123";

console.log(userEmail && userPassword); // abc123

// Problem 4 - Tricky
console.log(0 || "" || "Shubham" || 0); // Shubham
console.log(1 && 2 && 3 && 0);          // 0
console.log(!!"");                        // false
console.log(!!0);                         // false
console.log(!!"hello");                   // true