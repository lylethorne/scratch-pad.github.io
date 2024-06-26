/**
 * 
 * LOOPS
 * 
 * 0. Loops are built in constructs in JavaScript. They allow for a block of code to be 
 * repeated as many times as needed. Loops also iterate over collections of data and allow
 * programers to access the individual values held.
 * 
 * 1. There are three diferent main loops that are used, they are for/ for in/ and while loops
 * For loops are a counting mechanism that give us a starting point, end point, and the 
 * frequency in which to repeat. For-in loops are used to access the keys and values of an
 * object. A while loop is used as long a condition is true is true or false, it will execute
 * the code 
 * 
 * 
 * 2. Loops can count forward any number or pattern, or backwards to 0. Loops are always given
 * a start, an end, and a frequency of repetition. The repetition can be done with a single increment
 * represented by ++ , a single decrement represented by -- , or a patern by reassigning with a += or -=
 * followed by the number of which you want the code to skip forward.
 * 
 * 3. Loops are also able to access an array forwards or backwards. The loop's start point will be the 
 * last element of the array, the end point will be when the iteration is greater or equal to zero, and
 * the repetition frequency will be the iteration with the decrement operator.
 * 
 * 4. Looping over an object differs from looping over an array. A for - in loop must me used to access
 * the keys and values of an object. It 
 */

//for loop
let array = [1, 2, 3, 4, 5];
//starting at index 0  //ending while i is less than the length of the array  //incrementing by one
for(let i = 0; i < array.length; i++){
    //if the value of whatever iteration thru the array remainder of 2 strictly equals 0
    if(array[i] % 2 === 0){
        console.log('even!'); //log even
    }else{ // else its not even
        console.log('false!'); //log false
    }
}


//an object with three key value pairs
let object = {
    a: 'apple',
    b: 'banana',
    c: 'carrot'
}
//for-in loop over object to access the keys and values
for(var key in object){
    console.log(key); //will log a, b, c
    console.log(object[key]); //will log apple, banana, carrot
}


/*while loops are used when you do not necessarialy know how many times the value needs
to be iterated over */
let age = 14; //age assigned to 14
while(age < 16){ //while age is under 16
    console.log('too young to drive'); //print too young to drive to the console
    age++; //incrementing age by one each time
} 