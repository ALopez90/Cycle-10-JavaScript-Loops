// NOTE Description: The most simple looping statement in JavaScript! Loops through a chunk of code as long as the condition is true.

// NOTE Syntax:
let i = 0; // initializer

while (condition) {
    // code block
    i++; // iteration -- add 1 to the current value
}

// NOTE Example:
// True/Success
let j = 1; // initializer

while (j <= 5) { // condition
    console.log("Current number is " + j + "!");

    // j++; // iteration -- adds 1 to the current value
    j+=2; // iteration -- adds 2 to the current value
}

// False/Fail
// Fails because the condition was never true!
let k = 10; // initializer

while (k < 10) { // condition
    console.log("Current number is less than 10! " + k);

    k++; // iteration -- adds 1 to the current value
}