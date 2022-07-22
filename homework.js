/**
 * Write a program that simulates the following:
 * 1. Luggage is loaded into conatiners as it arrives.
 * 2. When weight is full, container is loaded into the aircraft (max 40lbs.)
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

    // 2. When weight is full, container is loaded into the aircraft (max 40lbs.)
    console.log(containers); // Key Point #1

    // 3. Reorder containers LIFO order
    console.log(reOrderedContainers); // Key Point #2

    // 4. Return new reordered array of integers
    return finalArray;
};

console.log(luggageLoading([30,5,6]));