// 1. Global Scope
let name = "Minakshi";

function showName() {
    console.log(name);
}

showName();

// 2. Function Scope
function testScope() {
    var age = 20;
    console.log(age);
}

testScope();

// 3. Block Scope
{
    let x = 10;
    const y = 20;

    console.log(x);
    console.log(y);
}

// 4. Hoisting with var
console.log(a);
var a = 50;

// 5. Function Hoisting
greet();

function greet() {
    console.log("Hello JavaScript");
}

// 6. let and const
let marks = 85;
const college = "Invertis University";

console.log(marks);
console.log(college);