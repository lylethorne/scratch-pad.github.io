// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
i:
o:prints numbers 1- 100
c: mult of 3 prints Fizz
mult of 5 prints Buzz
mult of both brints fizzbuzz
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //creating count and setting it at 0
let count = 0;
//creating loop to run from 1 to 100
while(count >= 0 && count <= 99){
    //incrementing each time by 1
    count++
    //if the iteration count is on is divisible by 3 and by 5
    if(count % 3 === 0 && count % 5 === 0){
        //prints fizzbuzz
        console.log('FizzBuzz');
        //if it is only divisible by 3
     }else if(count % 3 === 0){
        //print fizz
        console.log('Fizz');
        //only divisible by 5
     }else if (count % 5 === 0){
        //print buzz
        console.log('Buzz');
     }
}
//print ittttt
console.log(count);

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}