// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*
i: a base
o: return a function that tests wheather given values is greater than base
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning function that takes a given value
    return function(value){
        //return if the value is greater than the base
        return value > base;
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */

/*
i: base
o: return function that tests if given value is less than base
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes a given value
    return function(value){
        //returning if the value is less than the given base
        return value < base;
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/*
i: single character
o: return a function that tests if given string startswith character
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //returning function that accepts a string
    return function(string){
        //accessing the first character in string and seeing if it matches startsWith no matter case
        if(string[0] === startsWith.toUpperCase() || string[0] === startsWith.toLowerCase()){
            //return true
            return true;
        } else{
            return false
        }
    }; 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //returning function that accepts a string
    return function(string){
        //accessing the last character and seeing if it matches endsWith no matter case
        if(string.charAt(string.length - 1) === endsWith.toUpperCase() || string.charAt(string.length - 1) === endsWith.toLowerCase()){
            //return true
            return true;
        }else {
            //return false if it does not match
            return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
i: array of stringsstring and a function to modify string
o: return an array of the strings - modified
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //creating an empty array 
    let newArray = [];
    //creating for loop over array
    for(var i = 0; i < strings.length; i++){ 
        //pushing strings to be modified onto new array
        newArray.push(modify(strings[i]));
        };
        //returning new array
        return newArray;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
i: an array of strings
o: return a boolean if it passed, return true if all passed
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //creating for loop
    for(var i = 0; i < strings.length; i++){
        //if the strings at the index equal the test function
        if (test(strings[i]) !== true){
            return false;
        }
    }
    return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}