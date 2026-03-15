// Math Operators
let a = 10, b = 3;
console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.33
console.log(a % b);   // 1
console.log(a ** b);  // 1000

// Math Methods
console.log(Math.sqrt(25));    // 5
console.log(Math.pow(2, 8));   // 256
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.round(4.5));  // 5
console.log(Math.random());    // random!

// Random 1-10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// NaN aur Infinity
console.log(10 / 0);       // Infinity
console.log("abc" * 2);    // NaN
console.log(isNaN("abc")); // true