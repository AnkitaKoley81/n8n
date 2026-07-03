// test.js

console.log("Hello, GitHub!");

function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const user = "Ankita";

console.log(greet(user));

// Array example
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Numbers:", numbers);
console.log("Sum:", sum);

// Object example
const student = {
    name: "Ankita",
    course: "JavaScript",
    completed: false
};

console.log(student);
