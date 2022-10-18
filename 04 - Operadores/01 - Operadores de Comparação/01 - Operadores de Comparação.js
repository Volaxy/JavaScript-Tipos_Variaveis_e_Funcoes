// == (Implied Comparison)

const number = 5;
const text = "5";

console.log("Number: ", typeof number);
console.log("Text: ", typeof text);

// The "==" compares only the value of the variable
console.log(number == text);

// The "===" compares the type and the value of the variable
console.log(number === text);

// Explicit Conversion
Number(); // Transforms a variable in a "number"
String(); // Transforms a variable in a "string"