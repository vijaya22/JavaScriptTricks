/* String Tricks- */
/**
 * Strings are immutable.
 * They cannot be changed.
 */

/** use trim() to remove trailing whitespaces at start and end of a string */
let string1 = " abc def ";
string1 = string1.trim().replace(" ", ".");
console.log('after using trim:::', string1);  //replace space with '.' in output string

/**
 * To iterate a sting we can use for...of loop
 */
for (char of string1) {
    console.log('char:: ', char);
}

