/**
 * FUNCTION
 * 
 * 1. Functions are first created by being declared - similar to how variables are created.
 * Functions are made up of a name, parameters aka arguments, the function body,
 * and sometimes but not always a return statement. It is a block of code that gets reused 
 * - keeping coding dry and less prone to bugs. 
 * 
 * 2. Function parameters are a placeholder for values that will eventually be passed into them.
 *  Arguments are passed to a function when it gets called - the value that it has been waiting for.
 * 
 * 
 * 3. When a function is created by defining, it will either return the last value of the return statement
 * or return undefined. 
 * 
 * //define
 * function name(parameter){
 *  body 
 *  maybe a return
 * }
 * 
 * 4. A function expression is when a variable's value is a function. When the function 
 * gets declared it creates a function object. 
 * 
 * var x = function name(parameter){ body }
 * 
 * 
 * 5. Optionally taking input and optionally returning an output 
 * 
 * Functions are treated as first-class objects in Javascript! 
 * First-class objects can be a parameter for a function, returned by a function,
 * and even stored as a variable (but you already know that, because you've read expressions), 
 * but also inside arrays and objects!
 * 
 * When a function is used as a function's parameter - it is a 'callback'. So whatever action
 * the callback is to perform doesn't exist within the function already, but the scafolding is.
 * 
 * 
 * 6. Scope
 * 
 * 7. Closures.
 */

//a basic function
function add(a,b){
    return a + b; // returning the sum of the two parameters
}
console.log(add(2,4)); // 6 will print to the console