//4 TOTAL CODED EXAMPLES OF STRING MANIP WITH OPERATORS AND WITH STRING METHODS
/**
 * 
 * STRING MANIPULATION  
 * 
 * 0. Strings are a simple data type that are immutable, however strings can there are methods that can
 * be enacted on them that will return a mutated new string and leave the orginal untouched.
 * 
 * 
 * 1. Strings can be manipulated by operators such as + (concatenate) and += (concatenate assignment)
 * The + acts as similar to addition, one thing to keep in mind is that the first character of the
 * second string will be added to the last character of the first string - no spaces are betwen the two
 * unless added in manually. Now, what do you think we could do that with?
 * 
 * 2. Strings also have methods that can be used on them - however the methods create a new string and
 * do not alter the orginal. 
 * 
 */


//charAt() will return whatever character is at the number placed within the ()
let fruit = 'apple'; //initiz fruit to apple
console.log(fruit.charAt(0)) //logging to console to see that the first character in fruit is 'a'

//substring 

// + concatenate
let str1 = 'howdy';
let str2 = 'pardnr';

console.log(str1 + ' ' + str2); // 'howdy partner'

// += using the example from above
str1 += ' ' + str2; // str1 is now reassigned to the property of itself with a space and str2
console.log(str1) // 'howdy partner'

