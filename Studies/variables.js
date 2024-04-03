/**
 * 
 * VARIABLES:
 * 
 * 0. Variables are containers that hold data. Those containers can be reassigned to 
 * hold a different value.
 * 
 * 1. In order to hold the data, the variable itself must be declared and then assigned 
 * to that data 
 * 
 * 
 * 2. var, let, and const here... 
 * Three ways to declare a variable are var, let, and const.
 * 
 *  Any variable declared with 'Var' will be 'hoisted' to the top when javascript starts running
 * which, depending on what your coding, can be okay. Putting a pin in hoisting and we will revisit
 * it in 3. After a variable is declared with 'var' it is possible for that variable to be reassigned
 * to a different value at somepoint later in the code.
 * 
 * In 2015 a major update was made to Javascript where 'let' and 'const' were introduced.
 * Let is a flexible declaration where as variables with const remain unreassignable. 
 * 
 * 
 * 3. hoisting here
 * 
 */


//Declaration here
var name;

///assignment here
 name = 'Lyle'; //assigning name to 'Lyle'


//var let and const coding here
// reassigning name to 'llllyle'
name = 'llllye'; 
//logging to console what name will print
console.log(name); //'llllyle' will print

//declaring variable age and assigning it to 32
let age = 32; 
//reassigning age to 33
age = 33; 
//logging to console to show let is reassigned
console.log(age); //33

//declaring variable feeling and assigning it to hungry
const feeling = 'hungry';
//attempting to reassign to full
feeling = 'full'; 
//logging to show that const cannot be reassigned
console.log(feeling) //Uncaught TypeError: Assignment to constant variable.