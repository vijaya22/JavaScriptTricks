/* Map Tricks- */

/**
 * Create a new Map
 *
 */
let newMap = new Map();

/**
 * To get all keys in an array from a map
 * use map.keys() to get all keys iterator
 * then convert it into an array using Arrays.from();
 */
function getKeysList(){
    let exampleMap = new Map();
    exampleMap.set('a',1);
    exampleMap.set('b',1);
    return Array.from(exampleMap.keys());
}
let keyArr = getKeysList();
console.log('keyArr:::', keyArr);