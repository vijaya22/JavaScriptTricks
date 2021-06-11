/* Arrays Tricks- */

/**
 * Finding Maximum in an array 
 * use Math.max(...array) to find maximum in an array.
 * @param {number[]} numArray
 * @return {number} 
 */
function findMaxInArray(numArray){
    return Math.max(...numArray);
}
let maxOfArray = findMaxInArray([1,3,5,6,2,11,3,5]);
console.log(`Maximun in array [1,3,5,6,2,11,3,5] : ${maxOfArray}`);

/**
 * Finding Minimum in an array 
 * use Math.min(...array) to find minimum in an array.
 * @param {number[]} numArray
 * @return {number} 
 */
function findMinInArray(numArray){
    return Math.min(...numArray);
}
let minOfArray = findMinInArray([1,3,5,6,2,11,3,5]);
console.log(`Minimun in array [1,3,5,6,2,11,3,5] : ${minOfArray}`);

/**
 * Comparing two arrays
 * use JSON.stringfy to convert both the arrays into string 
 * and then use the equal operator to match them
 * @param {number[]} numArr1
 * @param {number[]} numArr2  
 * @return {boolean}
 */
function compareArrays(numArr1, numArr2){
    return JSON.stringify(numArr1) == JSON.stringify(numArr2)
}

let ifArraysAreEqual1 = compareArrays([1,2,3],[1,2,3])
console.log(`Are arrays equal ? ${ifArraysAreEqual1}`)

let ifArraysAreEqual2 = compareArrays([1,2,4],[1,2,3])
console.log(`Are arrays equal ? ${ifArraysAreEqual2}`)
