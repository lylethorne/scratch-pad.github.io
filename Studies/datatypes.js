/**
 * 
 * DATA TYPES
 * 
 * 0. Data types are a specific value type that the program needs to distinguish from one another. 
 * They are built in and in order for the program to run, it needs to know what it is operating on
 * and if it is a simple or complex data type.
 * 
 * 1. Number represents numerical data, such as 1, 3.14159, etc...
 * 
 * 2. Strings are used to represent sentences or words and is represented by that text wrapped 
 * around quotes or backticks ('', "", ``). Strings have length, and indexes. 
 * 
 * 3. Boolean is the term used to represent a value that will either be true or false
 * 
 * 4. Array is a comlex data type that can hold an infinit amount of data. Arrays are thought of
 * as lists where there isnt a relation to the data it holds or the order. Arrays can hold any type
 * of data including simple and complex. It is represented by square brackets holding the elements 
 * seperated by a comma [ x, y]
 * 
 * 5. Object is also a complex data type, however it speficially refers to a person/object and the 
 * data that it holds. Objects have properties inside them that are represented by a key and it's value
 * pair. An object is represented by the curly brackets { } with the key value pairs separated by a colon
 * and ending with a comma. 
 * 
 * 6. Functions perform actions on a value it is given.
 * 
 * 7. When a variable is not assigned a value, it is undefined and the type is undefined. 
 * 
 * 8. Null represents the intentional absence of a value. 
 * 
 * 9. NaN stands for Not a Number. It is generally encountered when a mathmatical problem 
 * does not resolve to a number.
 * 
 * 10. Infinity and - infinity are properties of the global object, so they can be accessed from anywhere.
 * Infinity is different then the numeric idea of infinity. Here, it represents a value that is greater than
 * any other number (in JavaScript it is when a number reaches 1.797693134862315E+308). And the inverse is
 * true for -infinity.
 * 
 * 11. Simple data types are strings, numbers, booleans, null, and undefined. They represent an immutable value, 
 * and do not have an action. While complex data types are arrays, objects, and functions. Complex data types are
 * hold series of data and can perform actions on the data they hold.
 * 
 * 12. Primitive values are copied by value. Copied by value means that when simple data types are declared, the value
 * they are given will be what is copied. Rember that primitive data types are also immutatble - meaning they cant
 * be changed. Complex data types are copied by reference to the value that they hold. An object will never be read
 * by Javascript as equal to another object, even if it holds the same value properties as another. References are made
 * to the value, and can alter the orginal object's data.
 * 
 */

//variable luckyNumber assigned to numeric 6
let luckyNumber = 6;

//string of 'Lyle' assigned to the variable of name
let name = 'Lyle';

/*boolean of true assigned to variable likesPizza. Generally when a variable is assigned
to a boolean, the variable is written as a yes or no question*/
let likesPizza = true; 

//Here the variable flower is created but has not been assigned a value. 
let flower;
console.log(flower); // undefined will print to the console because it does not have a value
flower = 'maypop'; //assigning the value of maypop to flower
console.log(flower); // maypop will print to the console now

//null is used to represent a value left intentionally blank
let freeTime = null; //the variable freeTime is declared but has been intentionally left to equal null

//Nan
let a = 2;
let b = '2';
console.log(a + b); 

//array is a list held within square brackets and separated by a comma.
let thisArray = [1, true, 'apple'];

//object is a list with a relation to the data that it holds. It holds data in curly brackets
let thisObject = {
    fruit: 'apple', //key value pair of fruit/ apple
    2: 'number', // 2 number
    isBoolean: true, // and isboolean / true
};

//function sum takes two parameters and will return those two parameters added together
function sum(a, b){
    return a + b;
}
console.log(sum(2, 4)); //logging the function call to the console and expecting 6

//copied by value
let apple = 'apple'; //initiz variable apple to value of string apple
let graft = apple; //initiz graft to value of variable apple
graft = 'lemon'; // reassigning graft to string of 'lemon
console.log(apple); // is still 'apple'
consolge.log(graft); // was reassigned to 'lemon'

//coppied by reference
//here is an object of fruits
let fruits = {
    a: 'apple',
    b: 'banana',
    c: 'cherry',
}
let crunch = fruits; // initix crunch to the object of fruit
crunch.a = 'apricot'; // reassigning a value on crunch to appricot 

console.log(fruits); //and because of copy by reference fruits now shows as
/**
 * {
  "a": "apricot",
  "b": "banana",
  "c": "cherry"
}
 */