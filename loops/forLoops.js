// initializer: starting value
// condition: "run this code if true" (return true/false)
// iteration: adds on to the initial value to continue the loop

// NOTE Description: The "for" loop is the most common loop that's used and is typically used to run a chunk of code a certain amount of times.

// NOTE Syntax:
for (initializer; condition; iteration) {
    // chunk code
}

// NOTE Examples:
// initializer: let i = 0
// condition: i <= 5
// iteration: i++

for (let i = 0; i <= 5; i++) {
    // chunk code
    console.log(i);
};

let dbz = ["Goku", "Vegeta", "Mr.Popo", "Tien", "Master Roshi"];

for (let j = 0; j < dbz.length; j++) {
    console.log(dbz[j]);
    // console.log(dbz);
    // console.log(j);
    // console.log(j + " " + dbz);
};

// NOTE Method One: Print out only the items that start with "T"
let fruits = ["Apple", "Orange", "Tomato", "Watermelon", "Jackfruit", "Tamarindo", "Kiwi", "Peach"];

for (let k = 0; k < fruits.length; k++) {
    // console.log(fruits[k]);
    // console.log(fruits[k][0]);
    if (fruits[k][0] == "T") {
        console.log(fruits[k]);
    }
};

// NOTE Method Two: Print out only the items that start with "T"
let fruits = ["Apple", "Orange", "Tomato", "Watermelon", "Jackfruit", "Tamarindo", "Kiwi", "Peach"];

for (let l = 0; l < fruits.length; l++) {
    if (fruits[l].startsWith("T")) {
        console.log(fruits[l]);
    }
};

// NOTE Method One: Print out only one specific item (Done with string matching)
let cycle10 = ["Michael", "Serafin", "Acquita", "Hiba", "Arelis", "Cesar", "Taizon", "Austin", "Noe", "Bencee", "Mejindra", "Sequona", "Torrontaye", "Christian", "Derick", "Rashaun", "Alex"];

for (let c = 0; c < cycle10.length; c++) {
    // Works, but not the preferred method
    // if (cycle10[c].startsWith("Taizon")) {
    //     console.log(cycle10[c]);
    // }
    if (cycle10[c] == "Taizon") {
        console.log(cycle10[c]);
    }
};

// NOTE Method Two: Print out only one specific item (Done with indexing)
let cycle10 = ["Michael", "Serafin", "Acquita", "Hiba", "Arelis", "Cesar", "Taizon", "Austin", "Noe", "Bencee", "Mejindra", "Sequona", "Torrontaye", "Christian", "Derick", "Rashaun", "Alex"];

for (let b = 0; b < cycle10.length; b++) {
    if (b === 14) {
        console.log(cycle10[b]);
    }
};


// infinite loop

for (let m = 5; m < 10; m--) {
    console.log(m);
};
