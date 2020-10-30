// JavaScript = Created for client side manipulation of the DOM; If it has a browser, it can run JavaScript;

// Inner vs External
// JavaScript relies on elements in the DOM for it to operate optimally, thus needs to run last; Place before the closing body tag or after the meta information with a defer tag

// Property = Something that describes an object; a key-value pair

// Methods = A function that belongs to an object;

// Parameters = Values passed to a method or function

// Arrays 
const arr = [1, ['a', 'b', 'c'], 2, 3];
console.log(arr[1][2]); 

    // Multidimensional Arrays
    // Use square brackets for each element of an array within an array
    const arr = [1, [true, false], 2, 3];
    console.log(arr[1]);

    const arr = ['a', 'b', [1, 2, {property: 'value', key: 'value'}], true, [10, 55]]; 
    // Get "true"
    console.log(arr[3]);
    // Get "10"
    console.log(arr[4][0]);

    // .indexOf() = returns the index of an array element

    // .push() = pushes something onto the end of an array

    // .pop() = removes something from the end of an array

    // .unshift() = pushes something onto the beginning of an array

    // .shift() = removes the first element from the array

    // .concat() = combines arrays 

    // .splice() = modifies elements in an array; modifies the original array

    // .slice() = doesn't modify the original array

// Strings
var str1 = 'hello';
var str2 = 'world';

var str3 = str1 + ' ' + str2

var str4 = 'Hello ';
str4 += 'world my name is Harcourt';

console.log(str4); 
// returns "Hello world my name is Harcourt"

// for Numbers and Strings, += appends elements

// = is an Assignment operator

// === is a Strict Comparison operator

// == is an Equal To operator

// Loops
    // while    
    let done = false;
    let counter = 0;

    while (!done) {
        counter++;
        if(counter === 10) {
            done = true;
        }
        console.log(counter);
    }

    for(var i = 0; i < 10; i++);