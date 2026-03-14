// String Properties
let name = "Shubham";
console.log(name.length);           // 7
console.log(name[0]);               // S
console.log(name[name.length - 1]); // m

// String Methods
let fullName = "  Shubham Rajput  ";
console.log(fullName.trim());
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.includes("Rajput"));
console.log(fullName.replace("Rajput", "Kumar"));
console.log(fullName.split(" "));

// Template Literal
let age = 21;
console.log(`Hello ${name}, age ${age}`);