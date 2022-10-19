// If the function not contains the "return", the default return is the "undefined"
function sum() {
    // This return a value when the function is executed
    return 2 + 2;
}

console.log(sum());

// This is a function inside a function, the function inside will be executed first
print(sum());