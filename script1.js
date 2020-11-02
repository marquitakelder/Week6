// Step 2
//! We don't need the brackets right here. We only want to use curly brackets for if/else if/else, while, for, switch, functions, etc.
// {
//     let name = "Marquita";
//     console.log(name);
// }
// let name = 'Marquita'; //? Changed the variable name from name -> nom just for simplification later as we use the name variable.
let nom = 'Marquita';

//! Same deal here. One other thing remember we don't need to use let/var/const a second time if we've already declared the variable as you did -> let name = "Marquita"; you can just simply say name = "Jones";
// Step 3
// {
//     let name = "Jones";
//     console.log(name);
// }
nom = 'Jones';

// Step 4
// const name = 'Marquita'; //! We can't use name twice. We've already used it once above I added in a slightly different constant here.
const nombre = 'Marquita';
console.log(nombre);

// Steps 5 and 6
if (1 + 1 === 2) {
	var number = 4;
	// console.log(number); //? I think my instructions were confusing as everyone did this. I wanted to have the console.log() happen outside of the if statement to demo that var can create variables in the global scope from block scope while let cannot. I added that in for steps 5 - 8
}

console.log(number); //? logs 4

// Steps 7 and 8
if (2 - 2 === 0) {
	// let number = 0; //? Changed the variable name so its something different from the var
	let numericValue = 0;
	// console.log(number); //? console.log() below will be commented out b/c it will cause an error. If you define a variable w/ let inside of block scope it only exists in that scope unlike var as mentioned above.
}
// console.log(numericValue); //? Causes an error. Reference error numericError is not defined b/c we used let. That is why this is commented out for now. Just wanted to demo let vs var.

// Step 9
// const name = 'Jones'; //! Since we've already defined a constant name, we don't need to declare the variable again. We can just reassign it with name = 'Jones'; I changed this to nombre from name, checkout the comment above for more info.
// nombre = 'Jones'; //? Causes an error. Assignment to constant value, I commented this out as per the instructions. Just wanted to demo that you cannot reassign constant values.

// Step 10
const array = [];

// Step 11
array.push(1, 2, 3); //? Nice use of push, as you see you can push multiple items by passing in multiple parameters into the method just as you have done here.
console.log(array);

// Step 12
// const more = {}; //? I wanted you to define a constant variable with the value of an empty object to show that w/ reference types (objects, arrays) and then add the properties on separate lines, the instructions may have not made that clear. I added an example below.
const me = {};

// Step 13
// const me = {
// 	name: 'Marquita',
// 	age: '34'
// };
//? Showing the adding of properties to the empty object
me.name = 'Marquita';
me.age = 34; //? Made this a number type instead of a string type
// console.log(me); //! Just commenting one out so there aren't two console.log()'s of the same thing
console.log(me);

// Step 14
console.log(`Hello I am ${me.name}.`); //! Great work!
// console.log(`Hello I am ${me.name}.`);

// Step 15
//! I wanted you to define a function that takes in destructured properties as parameters. I added an example below, also expanded on the work you had here.
function greet({ name, age }) {
	console.log(`Hello my name is ${name} and I am ${age}`);
}

//? Now we can pass any object w/ a name & age property and our method will just work.
greet(me);

const teacher = {
	name: 'Harcourt',
	age: 26
};

greet(teacher);

//? Instead of adding this in a separate object lets add it to our 'me' object
// let person = {
// 	name: 'Jones',
// 	age: '3',
// 	salutation: function () {
// 		console.log(`Hello I am ${person.name} and I am ${person.age}.`);
// 	}
// };
me.salutation = function () {
	//? We can use "this" and "this" will point to the "me" object b/c the method "salutation" will always be called on the "me" object. i.e. you cannot call it like salutation(); you must call it like me.salutation(); therefore "this" is bound to the me object
	console.log(`Hello I am ${this.name} and I am ${this.age}`);
};

// person.salutation(); //? Just swapped it over to me instead of person object
me.salutation();

// Step 16
// let { name1, age1 } = { name1: 'Jones', age1: '3' }; //! Added an example using destructuring to pull out of the me object
// console.log(name1, age1);
const { name, age } = me; //? Note that the variable names must match the property key's
console.log(name, age);

// Step 17
//! Missing const, changed named to arrow1 so we don't reuse function names
// const hello = () => {
const arrow1 = () => {
	// var1 = console.log('Hello World!'); //? We don't need to store this in a variable
	console.log('Hello world');
};
// hello(); //? calling different function name
arrow1();

// Step 18
// hello = (str) => {
// prettier-ignore
const arrow2 = str => { //? You can add or omit the () here since we only have one parameter 
	// var arrow2 = console.log(str); //? We don't need to store this in a variable
	console.log(str);
};
// hello('Hi!'); //? new function name
arrow2('Hello from this arrow function');

// Step 19
//! If you omit the {} it automatically returns whatever you have after the =>
// const arrow3 = (num1, num2) => {
// 	return 'You are not allowed to use the return keyword.';
// };
const arrow3 = (num1, num2) => num1 + num2;
console.log(arrow3());

//! BONUS SAMPLE SOLUTION
const bonus = (num1, num2) => {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return 'Error! Must pass in two valid numbers';
	} else {
		return num1 + num2;
	}
};
console.log(bonus(5, 5));
console.log(bonus(true, 'string'));

// Step 20
//! We don't need to set the arrow function equal to anything removed the hello =
setTimeout(() => {
	console.log('Hello again!');
}, 2000);

// Step 21
for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
}
//! Great work!
for (const num of array) {
	console.log(num);
}

//! Great work!
// Step 22
for (const key in me) {
	console.log(`${key}: ${me[key]}`);
}

//! BONUS SAMPLE SOLUTION

const div = document.querySelector('div');

const harcourt = {
	name: 'Harcourt',
	age: 26,
	birthday: new Date('2/11/2001'),
	hobbies: ['cars', 'computers', 'travel', 'diy projects']
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

// TODO only works on years between 1910 - 2899 need to fix
function bio({ name, age, birthday, hobbies }) {
	let bio = `Hello my name is ${name}, I am ${age} years old. `;
	bio += `I was born in ${months[birthday.getMonth()]} of ${
		birthday.getYear() >= 100
			? '2' + birthday.getYear() - 100
			: '19' + birthday.getYear()
	}. `;
	bio += `My hobbies include: `;
	for (const hobby of hobbies) {
		if (hobbies.indexOf(hobby) === hobbies.length - 1) {
			bio += `and ${hobby}.`;
		} else {
			bio += `${hobby}, `;
		}
	}
	div.innerHTML = bio;
}

bio(harcourt);
