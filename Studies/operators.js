/**
 * OPERATORS:
 * 
 * 0. An Operator is a type of syntax that consists of alphabetical characters, punctuation, and integers.
 * These characters are reserved in the program because they have a built in functionality.
 * 
 * 
 * 1. Assignment operators are used when variables are being assigned '=' to data. They can also be
 * used to manipulate the data by addition '+=' and subtraction '-='.
 * 
 * 
 * 2. Arithmetic operators allow math to perform in code. There is add '+', subtract '-', 
 * division '/', mulitiplication '*', exponentiation '**', remainder '%', increment '++', 
 * and decrement '--'. These can be performed on numbers, variables, and expressions. And,
 * just as within mathmatics - when multiple arithmetic operators are present, operator 
 * precedence takes place (multiplication is done before addition, etc...).
 * 
 * 
 * 3. Comparison operators are used to determine equity or diference in logical statements.
 * Generally the result of using one of these will result in a true or false value.
 * There is equal to '==', equal value and type '===', not equal to '!=', not equal to value
 * nor type '!==', greater than '>', less than '<', equal or greather than '>=', equal or 
 * less than '<='.
 * 
 * 
 * 4. Logical operators are used to determine the logic betwen variables or values. There is
 * and '&&', or '||', not '!'. The first two are used when there are multiple conditions that must
 * be true or false in order for that next piece of code to run.
 * 
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

// assignment operators
//initializing count and assigning it to 1
let count = 1;
//assigning + 1 to whatever count is equal to // count now equal to 2
count += 1;
//assigning - 2 to value of count // count is now 0
count -= 2;

//arithmetic operators
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
let c = 66; // initz c to 66
if(c % 2 === 0){ // if the remainder of c is strictly equal to 0
    console.log('this is even'); // print 'this is even'
}else{ //else if the remainder is not SE to 0
    console.log('this is odd'); //print 'this is odd'
}
//'this is even' will print

//multiplication
let d = 2; //initz d to 2
let e = 4; // initz e to 4
let f = d * e; // initiz f to the value of d multiplied by e
console.log(f); // 8 will print

//exponential
//using the same d and e from above
let g = d ** e; // initz g to the value of d raised to the power of e
console.log(g); // 16 prints

//incriment
let h = 0; // initz h to 0
while(h <= 3){ // using a while loop to iterate until h is greater or equal to 3
    console.log('worm'); // prints worm
    h++; // using the increment so that each iteration will increase by 1
}
// 'worm' is printed 4 times

//decrement
let l = [1, 2, 3]; // initz l to an array of numbers 1 2 3
for(let i = l.length; i >= 0; i--){ // using a for loop to access the array in reverse
    console.log(l[i]); // prints 3 2 1
}

//comparison operators
// equal to
let j = 3; // initz j to number of 3
if(j == '3'){ // if value of j is equal to a string value of 3
    console.log(true); //true does print
}

//strictly equal
//using the same from above
if(j === '3'){ // if value of j matches in value and type to string value of 3
    console.log(true); //print true
}else{ // else
    console.log(false); //print false // false prints because number and string are different data types
}

//not equal
let k = 5; //initz k to 5
if (k != 9){ //if k is not equal to 9 
    console.log('not nine') // print not nine // not nine prints
}

//not strictly equal
//using k from above
if(k !== 5){ // if k does not strictly equal number 5
    console.log('not five'); //print not five
} else{ //else 
    console.log('high five'); //print high five // high five prints
}
//greater than
let m = 2; //initz m to 2
let n = 8; // initz n to 8
if(n > m){ // if n is greater than m
    console.log('greater than'); //print greater than // greater than prints
}
//less than
//using m and n from above
if(m < n){ //if m is less than n
    console.log('less than'); //print less than // less than prints
}
//equal or greater than
let o = 15; //initz o to 15
if(o >= 10){ // if o is greater or equal to 10
    console.log('equal or greater than 10');//print 'equal or greater than 10 // it prints
}

//equal or lessthan
//using o from above
if(o <= 20){ //if o is less or equal to 20
    console.log('still under 20 though'); // print still under 20 though // it prints
}

// logical operators
//and 
let p = 34; //initz p to 34
let q = 22; // initz q to 22
if(p % 2 === 0 && q % 2 === 0){ // if remainder of p strictly equals 0 AND q
    console.log('both are even'); // print both are even // which prints
}
//or
//using p and q from above
if(p % 2 === 0 || q % 2 === 0){ // if remainder p SE 0 OR q 
    console.log('at least one is even'); //prints at least one is even
}

//not
let r = !true; // initz r to not true
console.log(r); // prints false


//unary operators
//delete
let s = [1, 2, 3, 4]; // initz s to an array holding 1 thru 4
delete s[2]; // deleting the value at the second index of s' array // 3 is deleted
console.log(s); //prints [1, 2,, 4] because delete removes the value but not the index

//ternary operator
//simplifies the if/else statements
let driveAge = (age < 16) ? 'cant drive yet':'now you can drive';
//driveAge is assigned to the value of age if it is under 16 'cant drive yet' 
//is assigned to the variable canIDrive : else if age is greater than 16
// 'now you can drive' is assigned 

