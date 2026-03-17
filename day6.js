// Logical Operators

// AND &&
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR ||
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT !
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true
console.log(!"");     // true
console.log(!"hi");   // false

// Truthy/Falsy with && ||
console.log(0 && "Shubham");       // 0
console.log("" && "hello");        // ""
console.log("Shubham" && 21);      // 21
console.log(0 || "Shubham");       // Shubham
console.log("" || "hello");        // hello
console.log("Shubham" || "Rahul"); // Shubham

// !! Double NOT
console.log(!!"Shubham"); // true
console.log(!!0);         // false
console.log(!!"");        // false