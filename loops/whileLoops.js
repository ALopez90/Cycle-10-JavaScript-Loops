// initializer: starting value
// condition: "run this code if true" (return true/false)
// iteration: adds on to the initial value to continue the loop

// NOTE Description: The most simple looping statement in JavaScript! Loops through a chunk of code as long as the condition is true.

// NOTE Syntax:
let i = 0; // initializer

while (condition) {
    // chunk of code
    i++; // iteration - 0, 1
    ++i; // 1
}

// NOTE Example:
// True/Success
let j = 0;

while (j <= 5) {
    console.log(j);
    j++;
}

// False/Fail
// Fails because the condition was never true!
let k = 0; // initializer

while (k > 5) {
    console.log(k);
    k++;
    console.log("Current val: " + k);
}
