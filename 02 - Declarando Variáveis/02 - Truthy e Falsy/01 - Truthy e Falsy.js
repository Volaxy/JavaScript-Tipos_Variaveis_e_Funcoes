// 0 => false
// 1 => true

console.log(0 == false); // true
console.log("" == false); // true

console.log(1 == true); // true

// null
let varUndefined; // undefined
let varNull = null;

console.log(varUndefined);
console.log(varNull);


let number = 1;
let text = "Test";

// The "typeof" returns the variable type
console.log(typeof number);
console.log(typeof text);
console.log(typeof varUndefined);
console.log(typeof varNull);