// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //looping over array to access values
  for(var i = 0; i < array.length; i++ ){
    //logging arrays values 
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //looping over array in reverse 
  for(var i = array.length - 1; i >= 0; i--){
    //logging the array with the index
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //creating an empty array
  let arrayNew = [];
  //using a for in loop to access object key
  for(var key in object){
    //pushing the keys onto created array 
    arrayNew.push(key);
  }
  //return array holding object keys
  return arrayNew;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //using a for in loop to loop over the object
  for(var key in object){
    //printing its keys to the console
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //creating new array 
  let newArray = [];
  //looping over object to access values
  for(var key in object){
    //pushing values onto array
    newArray.push(object[key]);
  }
  //return new array holding obj values
  return newArray;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //looping over object for the values
  for(var key in object){
    //printing values to console
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //declaring num and assigning it to the length of the input's keys'
  let num = Object.keys(object).length;
  //return number of key/value pairs
  return num;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //creating an empty array 
  let newArray = [];
  //using for in loop to access values
  for(var key in object){
    //using push to -> the obj values onto the array
    newArray.push(object[key]);
  }
  //creating a for lop to access the array in reverse
  for(var i = newArray.length - 1; i >= 0; i--){
    //printing the elements (formerly values) thru each iteration
      console.log(newArray[i]);
  }
 
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}