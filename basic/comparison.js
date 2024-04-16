

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
console.log(null <= 0); 

/** rest comparison operator treats null differently 
 * than == operator as null is converted to zero by the rest of 
 * the comparison operator while == does not convert null to zero.
 */

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// -- 

console.log("2" === 2);