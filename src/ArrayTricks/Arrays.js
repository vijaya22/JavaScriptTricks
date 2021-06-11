/* Arrays Tricks- */

/**
 * Finding Maixmum in an array 
 * use Math.max(...array)
 */
function findMaxInArray(numArray){
    return Math.max(...numArray);
}
let maxOfArray = findMaxInArray([1,3,5,6,2,11,3,5]);
console.log(`Maximun in array [1,3,5,6,2,11,3,5] : ${maxOfArray}`);
