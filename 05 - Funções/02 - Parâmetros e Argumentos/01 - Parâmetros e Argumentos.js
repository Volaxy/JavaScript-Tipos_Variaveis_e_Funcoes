// When the function is defined, the values ​​that are between the "()" are called parameters.
// To declare a default value for some parameter, put an "=" followed by the value that the variable will have if it doesn't get an argument
function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}

// When the function is called, the values ​​passed to the function are called arguments.
console.log(sum(2, 2));
console.log(sum(29, 24));
console.log(sum(-20, 10));

// When an argument is not passed as a parameter, the value that is set for the variable in the function is "undefined" 
console.log(sum(2));


function nameAge(name, age) {
    return `My name is ${name} and my age is ${age}`;
}

// The order of parameters is followed according to the values ​​that were passed in the function call
console.log(nameAge(22, "Volaxy"));