///YOU NEED A CODED EXAMPLE FOR EVERY SINGLE TYPE OF OPERATOR EXCEPT UNARY
/**
 * OPERATOR
 * 
 * 0. An Operator is a type of syntax that consists of alphabetical characters, punctuation, and integers.
 * These characters are reserved in the program because they have a built in functionality.
 * 
 * 1. Assignment operators are used when variables are being assigned '=' to data. They can also be
 * used to manipulate the data by addition '+=' and subtraction '-='.
 * 
 * 2. Arithmetic operators allow math to perform in code. There is add '+', subtract '-', 
 * division '/', mulitiplication '*', exponentiation '**', remainder '%', increment '++', 
 * and decrement '--'. These can be performed on numbers, variables, and expressions. And,
 * just as within mathmatics - when multiple arithmetic operators are present, operator 
 * precedence takes place (multiplication is done before addition, etc...).
 * 
 * 3. Comparison operators are used to determine equity or diference in logical statements.
 * Generally the result of using one of these will result in a true or false value.
 * There is equal to '==', equal value and type '===', not equal to '!=', not equal to value
 * nor type '!==', greater than '>', less than '<', equal or greather than '>=', equal or 
 * less than '<='.
 * 
 * 4. Logical operators are used to determine the logic betwen variables or values. There is
 * and '&&', or '||', not '!'. The first two are used when there are multiple conditions that must
 * be true or false in order for that next piece of code to run.
 * 
 * 5. Unary operators are an action with only one operand. Types include delete 'delete'
 * used on complex data properties, type of 'typeof' returns what type of data is being 
 * referenced with exceptions (arrays, Date(), null, and object, all return 'object'), not '!'
 * turns the following expression to its opposite (!true //returns false).
 * 
 * 
 * 6. Ternary operators are also known as conditional operators. They are used to assign
 * value to a variable dependent on a condition being true or false. It is expressed as
 * variable = (condition) ? value1:value2; the character '?' represents the 'if' statement
 * while ':' can be seen as an 'else'.
 * 
 * 
 */

// 1. Assignment operators
//initializing count and assigning it to 1
let count = 1;
//assigning + 1 to whatever count is equal to // count now equal to 2
count += 1;
//assigning - 2 to value of count // count is now 0
count -= 2;

// 2. Arithmetic operators
//addition 
let x = 2; // initz x to 2
let y = 7; // initz y to 7
console.log(x + y); // prints 9 to the console

//subraction
let a = 9; // initz a to 9
let b = a - 2; // initz b to the value of a minus 2
console.log(b); // 7 prints to the console

//division
function division(num1, num2){ //declaring a function that takes 2 parameters
    return num1 / num2; //return the first parameter divided by the second
}
console.log(division(6, 2)); // logging the function called with 6 and 2 // 3 will print

//remainder
//multiplication
//exponential
//incriment
//decrement