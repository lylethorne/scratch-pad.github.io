// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/* 
i: string
o: new string all lowercase
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//declaring new string
var newString;
//using .toLowerCase()
newString = string.toLowerCase();
//returning newstring forced to lowercase
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/* 
i: string
o: new string all uppercase 
*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//declaring new string
var newString;
//using .toUpperCase()
newString = string.toUpperCase();
//returning new string
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/* 
i: string
o: return new string with dash-case and enforced lowercase
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//declaring new string
var newString;
/* 
assigning newString the value of the funtion toLowerCase, and calling it
with the input and a global replaceAll() to remove the spaces from a string and replace with '-' 
*/
newString = toLowerCase(string.replaceAll(' ', '-'));
//returning new string
return newString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/* 
i: string and a single character
o: returns true if string begins with character, or otherwise false
c: function is case insensitive 
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//turning string into an array
var newArray = string.split('');
    //using if else chain to compare the first index of newArray to char regardless upper or lower case
    if(newArray[0].toLowerCase() === char || newArray[0].toUpperCase() === char){
        //if they are the same return true
        return true;
    }else {
        //else return false
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/* 
i: string and a character
o: true if character is letter that string ends with regrdless of case, and false if it is not.
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//initailizing a variable to hold the last index of string length
var stringIndex = string[string.length - 1];
    //comparing it to char regardless of case to the last letter of string
    if(stringIndex === char.toLowerCase() || stringIndex === char.toUpperCase()){
    //return true if the char matches 
        return true;
    } 
        //return false if it does not
        return false;
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
i: two strings
o: two strings concatenated into one 
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //returning string one concatenated with string tw
return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //return a string joined from the arguments
return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
i: two strings
o: return of longest of two 
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //if else chain using length property for both strings
if(stringOne.length > stringTwo.length){
    //return string one if its longer
    return stringOne;
    //else if string one is shorter than string two
}else if( stringOne.length < stringTwo.length){
    //return string two
    return stringTwo;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
i: two strings
o: 1 x if first is higher,
    - 1 x if second is higher,
    0 if equal
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne > stringTwo){
        return -1;
     }else if(stringTwo > stringOne){
        return  1;
     }else if (stringOne === stringTwo){
        return 0;
     }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//using if else chain
if(stringOne < stringTwo){
   return -1;
}else if(stringTwo < stringOne){
   return  1;
}else if (stringOne === stringTwo){
   return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}