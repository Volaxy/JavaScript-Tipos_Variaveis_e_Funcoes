// Implicit Conversion
const number = 123;
const stringNumber = "123";

console.log(number == stringNumber); // true
// The JavaScript converts the number type to string to concat the two values
console.log(number + stringNumber); // 123123

// Explicit Conversion
console.log(Number(stringNumber) + number);
