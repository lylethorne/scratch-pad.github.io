/**
 * 
 * VARIABLES:
 * 
 * 0. Variables are named containers that hold/point to data. The data ranges from simple to complex, 
 * so it is important that, that information remains 'in memory' as a program runs. 
 * 
 * 
 * 1. In order to hold the data, the variable itself must be declared and then assigned 
 * to that data 
 * 
 * 
 * 2. var, let, and const here... 
 * Three ways to declare a variable are 'var', 'let', and 'const'.
 * 
 * Any variable declared with 'var' will be 'hoisted' to the top when javascript starts running
 * which, depending on what your coding, can be okay. Putting a pin in hoisting for now and we will revisit
 * it in part 3. After a variable is declared with 'var' it is possible for that variable to be reassigned
 * to a different value at somepoint later in the code.
 * 
 * In 2015 a major update was made to Javascript where 'let' and 'const' were introduced.
 * 'Let' is a flexible declaration where as variables with 'const' remain unreassignable. 'Let' and 'const' are also
 * able to be read in block scope, unlike 'var'
 * 
 * 
 * 3. Remember that brief mention of hoisting? This is where we go in, or up, if you will. Javascript reads code from
 * top to bottom. Within miliseconds of starting, any function or variable declared with 'var' will be brought up to the
 * very top - before any other code is read. While this can be fine most of the time, there are issues that can arrise 
 * like 'leaks' (escaping information).
 * 
 */


//Declaration without an assignment
var name; 
console.log(name); // will log undefined due to not being assigned to anything


//Assignment. 'var' is not needed because name was declared above
//assigning name to 'Lyle'
 name = 'Lyle'; 
console.log(name); // will print 'Lyle'

//Showing that var can be reassigned
name = 'Lyle Thorne';
console.log(name); //will print 'Lyle Thorne'


//Declaring variable age with 'let' and assigning it to 32
let age = 32; 
//reassigning age to 33
age = 33; 
//logging to console to show 'let' is reassigned
console.log(age); //33


//Declaring variable feeling with 'const' and assigning it to hungry
const feeling = 'hungry';
//attempting to reassign to full
feeling = 'full'; 
//logging to show that 'const' cannot be reassigned
console.log(feeling) //Uncaught TypeError: Assignment to constant variable.