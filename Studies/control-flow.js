/**
 * 
 * CONTROL FLOW
 * 
 * 0. Control Flow is when coding begins to become more dynamic. Javascript will read from
 * top to bottom, and control flow allows the developer guide the programing.
 * 
 * 1. If is a conditional statement that whether true or false will run or not run.
 * 
 * 2. Else if is a way to chain aditional conditional statements after an 'If' statement 
 * has already been used. 
 * 
 * 3. Else, while similar to 'else if', does not need the aditional conditional statement. 
 * The singular else generally follows the inverse logic of the 'If' 
 * 
 * 4. Switch is a dryer way to code longer conditional statements.
 * 
 * 
 */
//declaring age and assigning it to 16
let age = 16;
//if age is less than 16
if(age < 16){
    console.log('too young to drive') //doesn't print 'too young to drive' to the console
}
//else age from above is 16 or over and will by-pass the code held within the if body
else{
    console.log('be a safe driver') // will print 'be a safe driver'
}
//else if


//colors is declared with let - allowing it to be reassigned - and assigned to red.
let colors = 'red';
let color = 'black';
//switch case here takes colors and depending on what the value is will depend on what gets returned
switch(colors){
   case 'red':
    case 'orange':
    case 'yellow':
    case 'green':
    case 'blue':
    case'violet':
    console.log('is a color in the rainbow'); // will print if any of the above colors are hit
    break; //stops the code
    case 'pink':
    case 'gold':
    case 'black':
    console.log('is not part of the rainbow'); //will print if pink, gold, or black is passed thru
    default:
        console.log('sorry bud, I dont know that one'); // if a value is passed that no case hits will
        //automatically be assigned to the default 
}