var lodash = require('lodash');
/* Object Tricks - */

/** When an object variable is copied, the reference is copied, but the object itself is not duplicated. */
let user = {
    name: 'Hugh'
}
let admin = user;
admin.name = 'Pete'
console.log('user.name::', user.name);

/**
 * To avoid above situation, we should make a clone of the object and then assgin changes to it.
 */

let cloneUser = Object.assign({}, user);
cloneUser.name = 'Vain';

/**
 * But this doesn't work correctly when object keys refer to another object (nested objects).
 * To clone nested objects we deep clone objects using recursive Object.assign() or 
 * _.cloneDeep(Obj)
 * We can also use JSON.parse(JSON.stringify()) to do deep clone of objects.
 */
let address = {
    name: {
        firstName: 'Anil',
        lastName: 'Rajak'
    },
    country: 'India'
}
let cloneAddress = lodash.cloneDeep(address);
console.log('cloned address::::', cloneAddress);

let clonedAddress2 = JSON.parse(JSON.stringify(address));
console.log('cloned by JSON method::', clonedAddress2);

/** 
 * Objects are truthy in if()
 */
let userObj = {
    name: 'John'
}
if (userObj) {
    console.log('objects are always truthy.')
}

/**
 * To iterate over the properties(keys) present in an object
 * we can use for...in loop
 */
let tvAd = {
    airDate: new Date(12 / 5 / 2021),
    company: 'Abc'
}
for (prop in tvAd) {
    console.log(`${prop} : ${tvAd[prop]}`);
}

/**
 * We can't use another object as a key in objects
 */

/**
 * Object.entries() returns the array of key/value pairs from an object.
 * For eg- let desciption = {
 *     name:'John',
 *     age:30
 * }
 * Object.entries(description) = [['name','John'],['age',30]]
 */

/**
 * Object.fromEntries() creates a object from an array of key value pairs
 */

 /**
  * Use invert function from lodash to invert key:value in objects
  */
let obj = {
    name : 'sri',
    age:31
}
const invertedObj = lodash.invert(obj);
console.log('x::',invertedObj);