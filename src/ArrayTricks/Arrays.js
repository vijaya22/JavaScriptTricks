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
