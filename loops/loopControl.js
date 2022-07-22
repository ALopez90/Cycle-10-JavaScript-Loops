// NOTE Description: It's a great way to skip the rest of the loop and restart the loop!

// NOTE Example:
// Example One done with integers.
for (let i = 0; i < 10; i++) {
    // some code
    // console.log(i);

    // Check if a certain number is met. If so, ignore it.
    if (i === 7) {
        continue;
    }
    else {
        console.log(i);
    }
}

// Example Three! Loop through an array of strings. If the current string is _______, continue (meaning ignore the rest of the code), else print!

let juices = ["Apple", "Orange", "Grape", "Cranberry"];

for (let z = 0; z < juices.length; z++) {
    if (juices[z] === "Grape") { // Check for "Grape"
        juices[z] = "cat"; // Change the value to 'cat'
        continue; // ignore the rest of the code
    } else {
        console.log(juices[z]); // print each item (ignores "Grape")
    }
}
console.log(juices);


/***************************/
// NOTE Description: The best way to end the loop!

// NOTE Example:

// Example One done with an array of strings.
let clothes = ["Skirt", "Dress", "Pants", "Scarf", "Hat"];

for (let j = 0; j < clothes.length; j++) {
    let clothingItem = clothes[j]; // get the current element

    // Check for a specific clothing item. If it matches, change the value AND break out of the loop.
    if (clothingItem === "Pants") {
        clothes[j] = "Dog"; // Change the current value
        console.log(clothes); // What the array looks like after!
        break; // ends the loop
    } else {
        console.log("Current item: " + clothingItem);
    }
}

// Example Two done with integers.
for (let k = 0; k < 10; k++) {
    if (k == 6) {
        break;
    }
    else {
        console.log(k);
    }
}