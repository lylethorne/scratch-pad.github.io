// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

/*
i:value
o: return true if value is array, otherwise false
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //using if else chain to test if value is an array is true
   if(Array.isArray(value) === true){
    //return true
    return true;
   } else {
    //otherwise return false
    return false
   }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
/*
i: value
o: true if value is object - but not an array, date, or null
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //starting if block to test if value is an array 
    if(Array.isArray(value)){
        //returning false for object if value equals true in above
        return false;
        //using instanceof to search for Date constructor
    }else if (value instanceof Date){
        //returning false if value is true for dc
        return false;
        //using strict equality to compare
    }else if(value === null){
        //returning false if true
        return false;
    }else if(typeof value === 'object'){
        return true;
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //starting if chain checking for date
    if (value instanceof Date){
        //returning false if value is true for dc
        return false;
        //using strict equality to compare for null
    }else if(value === null){
        //returning false if true
        return false;
        //finally testing if an array or an object
    } else if(Array.isArray(value) === true || typeof value === 'object'){
        //return true
        return true;
    // YOUR CODE ABOVE HERE //
}
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}