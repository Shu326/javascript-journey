// problem 1 Esay
let name = "  shubham rajput  ";

console.log(name.trim());
console.log(name.toUpperCase());

//Problem 2 — Medium

let email="shubham@gmail.com";
console.log(email.replace("gmail","yahoo"))

//problem 3 - Medium;
let fullName = "Shubham Rajput";
let parts = fullName.split(" ");
console.log(parts); 
let firstName = parts[0];
console.log(firstName); 
let lastName = parts[1];
console.log(lastName); 
console.log(`First: ${firstName}, Last: ${lastName}`);

//problem 4 - tricky

let msg = "Hello World";

let length = msg.length;
let firstChar = msg.charAt(0);
let newMsg = msg.replace("World", "Jalna");
let upper = msg.toUpperCase();

// Template literal se print karo
console.log(`Length: ${length}`);
console.log(`First Char: ${firstChar}`);
console.log(`New Message: ${newMsg}`);
console.log(`Upper: ${upper}`);