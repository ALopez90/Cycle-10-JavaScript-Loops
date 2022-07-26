/**
 * Write a program that simulates the following:
 * 1. Luggage is loaded into containers as it arrives.
 * 2. When weight is full, the container is loaded into the aircraft (max 40lbs.)
 * 3. At the destination, the containers are unloaded from the plane LIFO order. (last in, first out)
 * 4. Luggage is then handed back individually
 * 
 * Input: [30, 5, 6]
 * Key Point #1 Loaded into containers: [[30,5], [6]]
 * Key Point #2 LIFO Order: [[6],[30,5]]
 * Output: [6, 30, 5]
 * 
 * @param {string} input array of integers
 * @returns reordered array
 */
function luggageLoading(input) {
    // NOTE 1. CHALLENGE: Retrieve the comma seperated values and convert to array of int
    const Luggage = input.split(',').map(integer => {
        return Number(integer);
    });

    let currWeight = 0,
        maxWeight = 40,
        singleContainer = [],
        finalContainers = [],
        rejectedLuggage = [];

    // NOTE 2a. When weight is full, the container is loaded into the aircraft (max 40lbs.)
    for (let i = 0; i < Luggage.length; i++) {
        let currLuggage = Luggage[i],
            newWeight = currWeight + currLuggage;

        // If there's room, add the luggage onto the single container
        if (newWeight <= maxWeight) {
            currWeight = newWeight;

            singleContainer.push(currLuggage);
        }

        // If the single container is not empty AND there ISNT room, add the single container to the final array
        if ((currWeight !== 0) && (newWeight >= maxWeight)) {

            // If it exceeds the max weight, we reject the luggage. Othewise we can go ahead and add it to the final output.
            if (currLuggage > maxWeight && i !== Luggage.length - 1) {
                rejectedLuggage.push(currLuggage); // add to rejected array
                continue; // at this point, ignore the rest of the code for this luggage
            } else {
                finalContainers.push(singleContainer); // add to final array
            }

            currWeight = currLuggage; // set current weight to be the new luggage in the loop
            singleContainer = []; // reset current single container to remove the old values
            singleContainer.push(currLuggage); // add the current luggage back
        }

        // If it's a luggage that exceeds or meets the max weight, add to it's own container and push it to the final array.
        if ((currWeight == 0) && (newWeight >= maxWeight)) {
            singleContainer = []; // reset current container

            // If it exceeds the max weight, we reject the luggage. Othewise we can go ahead and add it as it's own container.
            if (currLuggage > maxWeight) {
                rejectedLuggage.push(currLuggage);
            } else {
                finalContainers.push([currLuggage]);
            }
        }

        // If there are no more values, just add it to the final array
        if (i == Luggage.length - 1) {
            // If it exceeds the max weight, we reject the luggage. Othewise we can go ahead and add it as it's own container.
            if (currLuggage > maxWeight) {
                rejectedLuggage.push(singleContainer);
                continue; // at this point, ignore the rest of the code for this luggage
            } else {
                finalContainers.push(singleContainer);
            }
        }
    };

    // NOTE 2b. Array of containers loaded onto the plane
    console.log("Key Point #1: ");
    console.log(finalContainers);

    // NOTE 3. Reorder opposite way (LIFO)
    let reOrderedContainers = finalContainers.reverse();
    console.log("Key Point #2: ");
    console.log(reOrderedContainers);

    // Merge the arrays into one - quick Google search ;)
    let finalArray = [].concat.apply([], reOrderedContainers);

    // NOTE BONUS 4. Rejected luggages
    console.log("Key Point #3: ");
    console.log(rejectedLuggage);

    // NOTE 5. Final array of luggage
    console.log("Output: ");
    return finalArray;
};

let intArr = [30, 5, 6, 7, 10, 5, 35, 40, 50, 5, 65, 3, 33],
    str = "30,5,6,7,10,5,35,40,50,5,65,3,33";
console.log(luggageLoading(str));

// TODO What about the case that the values are out of order? Then what?