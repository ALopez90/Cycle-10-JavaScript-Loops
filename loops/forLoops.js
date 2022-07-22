// initializer: starting value
// condition: "run this code if true" (return true/false)
// iteration: adds on to the initial value to continue the loop

// NOTE Description: The "for" loop is the most common loop that's used and is typically used to run a chunk of code a certain amount of times.

// NOTE Syntax:
for (initializer; condition; iteration) {
    // code block
}

// NOTE Example:
// initializer: let i = 0
// condition: i <= 5
// iteration: i++
for (let i = 0; i <= 5; i++) {
    console.log(i); //code block
}

let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let j = 0; j < shoppingList.length; j++) {
    console.log(shoppingList[j]);
}

// NOTE Method One: Print out only the items that start with "P"
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let k = 0; k < shoppingList.length; k++) {
    if (shoppingList[k][0] === "P") {
        console.log(shoppingList[k]);
    }
}

// NOTE Method Two: Print out only the items that start with "P"
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let l = 0; l < shoppingList.length; l++) {
    if (shoppingList[l].startsWith("P")) { // .startsWith works with strings only
        console.log(shoppingList[l]);
    }
}

// NOTE Method One: Print out only one specific item (Done with string matching)
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let m = 0; m < shoppingList.length; m++) {
    if (shoppingList[m] === "Tortilla") {
        console.log(shoppingList[m]);
    }
}

// NOTE Method Two: Print out only one specific item (Done with indexing)
let shoppingList = ["Apples", "Eggs", "Pepper", "String Cheese", "Tortilla", "Papaya"];

for (let n = 0; n < shoppingList.length; n++) {
    if (n == 4) {
        console.log(shoppingList[n]);
    }
}

// NOTE Do It Yourself -- Loop through an array of string elements of animals. Only print out the last 2 elements.

// Method One: Point to specific index
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey"];

for (let z = 0; z < zoo.length; z++) {
    console.log(zoo[3], zoo[4]);
}

// Method Two: Increased the value of the initializer
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey"];

for (let a = 3; a < zoo.length; a++) {
    console.log(zoo[a]);
}

// Method Three: Used slice -- Useful when you don't know the number of elements in an array.
// Prints a new array with only the last two elements. (does not permanently change the array)
let zoo = ["Giraffe", "Lion", "Tiger", "Bear", "Monkey", "Elephant"];
console.log(zoo.slice(-2));
console.log(zoo); // still the same after!