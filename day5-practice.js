// Problem 1 - Age Check
let age = 20;
console.log(age > 18);    // true
console.log(age < 60);    // true
console.log(age >= 18);   // true

// Problem 2 - Password Check
let password = "abc";
console.log(password.length < 8);        // true
console.log(password === "");             // false
console.log(password === "abc123");       // false

// Problem 3 - Cart Amount
let cartAmount = 450;
let discount = 100;
console.log(cartAmount < 499);            // true
console.log(cartAmount + discount >= 499); // true

// Problem 4 - Tricky
console.log(0 == false);        // true  - value same
console.log(0 === false);       // false - type alag
console.log("" == false);       // true  - dono falsy
console.log("" === false);      // false - type alag
console.log(null == undefined); // true  - special case
console.log(null === undefined);// false - type alag