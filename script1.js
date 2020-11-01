// Step 2
{
    let name = "Marquita";
    console.log(name); 
}

// Step 3
{
    let name = "Jones";
    console.log(name);
}

// Step 4
const name = "Marquita";
console.log(name);

// Steps 5 and 6
if(1 + 1 === 2){
    var number = 4;
    console.log(number);
}

// Steps 7 and 8
if(2 - 2 === 0){
    let number = 0;
    console.log(number);
}

// Step 9
const name = "Jones";

// Step 10
const array = [];

// Step 11
array.push(1, 2, 3);
console.log(array);

// Step 12
const more = {
    
}

// Step 13
const me = {
    name: "Marquita",
    age: "34",
};
console.log(me);
console.log(me);

// Step 14
console.log(`Hello I am ${me.name}.`);
// console.log(`Hello I am ${me.name}.`);

// Step 15
let person = {
    name: "Jones",
    age: "3",
    salutation: function () {
        console.log(`Hello I am ${person.name} and I am ${person.age}.`);
    }
};

person.salutation();

// Step 16
let {name1, age1} = {name1: "Jones", age1: "3"};
console.log(name1, age1);

// Step 17
hello = () => {
    var1 = console.log("Hello World!");
}
hello(); 

// Step 18
hello = (str) => {
    var arrow2 = console.log(str);
}
hello("Hi!");

// Step 19
let arrow3 = (num1, num2) => {
    return "You are not allowed to use the return keyword.";
}
console.log(arrow3());

// Step 20
setTimeout (hello = () => {
    console.log("Hello again!");
}, 2000) 

// Step 21
for(var i=0; i < array.length; i++) {
    console.log(array[i]);
}
for(const num of array) {
    console.log(num);
}

// Step 22
for(const key in me) {
    console.log(`${key}: ${me[key]}`);
}