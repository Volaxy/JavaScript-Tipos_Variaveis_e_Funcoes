// **********
// VAR
var height = 3;
var length = 5;

// It is possible to use a variable without declaring it for use
area = height * length;
console.log(area);

// When the JavaScript executes, he read all the file before run the program, so it declares all variables and maps them first
var area;

// **********
// LET
// A variable declared with let can only be used in the same scope in which it is defined
let shape2 = "rectangle";
let height2 = 5;
let length2 = 10;

let area2;
if(shape2 === "rectangle") {
    area2 = height2 * length2;
} else {
    area2 = height2 * length2 / 2;
}

console.log(area2);

// To use a variable of type "let", it must be declared before being used (see line 17)
// let area;

// **********
// CONST
const shape3 = "square";
const height3 = 10;
const length3 = 10;

// As the value of the variable will change throughout the code, the recommended type is "let"
let area3;
if(shape3 === "square") {
    area3 = height3 * length3;
} else {
    area3 = height3 * length3 / 2;
}

console.log(area3);