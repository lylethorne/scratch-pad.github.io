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
 * 5. Functions have the ability to optionally take input and optionally return an output. Functions
 * even when not given a parameter upon definition, are able to receive an input when they are called
 * and perform the code within their body. A function's code might not even return an output, it could
 * simply update some data.  
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
 * 6. In Javascript there are three different kinds of scope. There is the global scope, function scope
 * and block scope. Functions have their own scope - meaning that variables that are declared within 
 * them are not accessible outside the function. 
 * 
 * 7. Closure is the term used for when a function has a function nested within itself that also
 * references the outer scope of the function. Closures are able to hold onto the variables even
 * after the function has ran.
 */

//a basic function
function add(a,b){
    return a + b; // returning the sum of the two parameters
}
console.log(add(2,4)); // 6 will print to the console

// variable sum is assigned to a function expression
let sum = function(a, b){
    return a + b;
}
console.log(sum(2,4)); // 6 will print to the console

//scope
//global scope
let name = 'lyle'

function globalExamp(){
    console.log(name); //accesses name from global scope
}
globalExamp(); //calling the function prints 'lyle'

//local scope 
function localExamp(){
    let loc = 'Im local';
}
console.log(loc); //will resuilt in an error because loc is function scoped

//closure
function counter(){
    let count = 0; //count is declared in the parental scope
    return function(){  //this closure has access to count and will increment it each
       return count++;  // time the function counter gets called
    }
}

let increase = counter(); //initiz variable increase to the value of counter func
console.log(increase()); // output will be 1