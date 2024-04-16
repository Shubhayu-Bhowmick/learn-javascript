"use strict"; //treats the js code as it's newer version


/** dataypes -> 
 * null
 * undefined 
 * string - ""
 * boolean - true/false
 * number - can hold numbers upto 2^53
 * bigint - bigger numbers
 * symbol - unique
 */

console.log(typeof(undefined)); // output -  undefined
console.log(typeof(null)); // output - object


/** mainly two types of datatypes primitive and non primitive datatypes 
 * primitive datatypes -> stored directly in the memory where ever the variable is allocated
 * non primitive datatypes -> stores the reference of the data allocated in the memory
 * 
 * primitive datatypes -> Number, BigInt, String, Boolean, Symbol, Null, 
 * non primitive datatypes -> objects, functions, array
 * 
 */


function updateValue(num) {
    num = 10; // Changes local variable num
    console.log("Inside function:", num); // Output: 10
}

let x = 5;
console.log("Before function:", x); // Output: 5
updateValue(x); // Passes the value of x (5)
console.log("After function:", x); // Output: 5 (not affected)


function updateArray(arr) {
    arr.push(4); // Modifies the array passed in
    console.log("Inside function:", arr); // Output: [1, 2, 3, 4]
}

let myArray = [1, 2, 3];
console.log("Before function:", myArray); // Output: [1, 2, 3]
updateArray(myArray); // Passes a reference to myArray
console.log("After function:", myArray); // Output: [1, 2, 3, 4] (affected)
