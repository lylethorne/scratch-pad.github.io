// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    //creating if else chain 
    //if hour is greater or equal to 0 and less or equal to 11
   if(hour >= 0 && hour <= 11){
    //'Good Morning!' will print to the console
    console.log('Good Morning!');
    //if first conditions were bypassed it will flow onto the second
    //if hour is greater or equal to 12 but less or equal to 16
   } else if(hour >= 12 && hour <=16){
    //prints good afternoon
    console.log('Good Afternoon!');
    //if hour is greater or equal to 17 but less than 21
   }else if(hour >= 17 && hour <= 21){
    //prints good evening
    console.log('Good Evening!');
    /*in my brain, it makes sense to leave this last else/if chain rather than a simple 'else'
    if there is an error where hour receives an input larger than 24, I don't want it to perform anything
    */
   }else if(hour >=22 && hour <= 24){
    console.log('Good Night!');
   }
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}