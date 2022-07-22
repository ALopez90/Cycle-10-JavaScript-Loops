// NOTE Continue
// NOTE Description: It's a great way to skip the rest of the loop and restart the loop!

// NOTE Example:
// Example One: Working with integers.

for (let r = 0; r < 8; r++) {
    if (r == 4) {
        continue; // skips the value 4
    } else {
        console.log(r);
    }
};

// Example Two: Loop through an array of strings.

let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatos"];

for (let v = 0; v < veggies.length; v++) {
    // Will ignore all elements that does not equal to "Beets"
    if (veggies[v] !== "Beets") {
        continue;
    } else {
        console.log(veggies[v]);
    }
};


/***************************/
// NOTE Break
// NOTE Description: The best way to end the loop!

// NOTE Example:

// Example One: Working with integers.
for (let x = 0; x <= 10; x++) {
    // Will stop the loop completely once it reaches 7
    if (x == 7) {
        break;
    } else {
        console.log(x);
    }
};

// Example Two: Working with an array of strings.
let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatos"];

for (let n = 0; n < veggies.length; n++) {
    if (veggies[n] == "Cilantro") {
        break;
        console.log() // anything after the break will never occur!
    } else {
        console.log(veggies[n]);
    }
};