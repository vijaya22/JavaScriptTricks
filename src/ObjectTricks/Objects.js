const { add } = require('lodash');
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
