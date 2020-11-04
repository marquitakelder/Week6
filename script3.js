//! Awesome work!! Like really pat yourself on the back this was great. I hope the review helped some. Keep up the good work.
// Step 1
var str1 = 'hello';

// Step 2
str1 += ' world';
console.log(str1);

// Step 3
var str2 = str1 + '!';
console.log(str2);

// Step 4
console.log(str2.length);

// Step 5
console.log(str1.toUpperCase());

// Step 6
// str1[1]; //? Commenting out since we aren't doing anything w/ this.
console.log(str1[1]);

// Step 7
// str2.indexOf('!');
console.log(str2.indexOf('!'));

// Step 8
var str3 = str2.slice(0, 4);
console.log(str3);

// Step 9
console.log(str2.includes('ell'));

// Step 10
var me = {
	name: 'Marquita',
	age: 34
};

// Step 11
console.log(me.name);

// Step 12
console.log(me['name']);

// Step 13
// me.canDrink = true; //? Great work another way we could accomplish this is with a ternary operator that checks to see if age is greater than or equal to 21 and returns true if so, returns false if less than 21.
me.canDrink = me.age >= 21 ? true : false;
console.log(me);

// Step 14:
me.greet = function () {
	console.log(`Hello my name is ${this.name}!`);
};
//! Awesome use of this!

// Step 15
me.greet();

// Step
//? Includes returns true or false, so we don't need to check if true === true we can just evaluate the includes method. Also for a bonus bit of rigidity I added in the toLowerCase() method so we can not only match "e" but also "E"'s
// if (me.name.includes('e') === true) {
// 	console.log("Your name contains an 'e'.");
// } else {
// 	console.log("Your name does NOT contain an 'e'.");
// }
if (me.name.toLowerCase().includes('e')) {
	console.log(`${me.name} contains an 'e'.`);
} else {
	console.log(`${me.name} does NOT contain an 'e'.`);
}

// Step 17
//? Removed the === true as it is unnecessary
// if (me.hasOwnProperty('canDrink') === true) {
if (me.hasOwnProperty('canDrink')) {
	// if (me.canDrink === true) {
	// 	console.log(`${me.name} can drink`);
	// } else {
	// 	console.log(`${me.name} cannot drink`);
	// }
	if (me.canDrink) {
		console.log(`${me.name} can drink`);
	} else {
		console.log(`${me.name} cannot drink`);
	}
}
