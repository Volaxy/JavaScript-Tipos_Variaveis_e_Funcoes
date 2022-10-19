// If the function is called through a variable, it cannot be called before the function is assigned to it.
console.log(sum(1, 2));

const sum = function(x, y) { return x + y }

console.log(sum(1, 2));