// Step 1
var var1;

// Step 2
var1 = 'string';

// Step 3
// var2 = var1[5]; //! Missing var, let, const keyword
var var2 = var1[5];

// Step 4
var2 += 'o!';

// Step 5
// var3 = 1; //! Missing var, let, const keyword
var var3 = 1;

// Step 6
// var4 = '2'; //! Missing var, let, const keyword
var var4 = '2';

// Step 7
console.log(var3 + var4);

// Step 8
console.log(parseInt(var4) + var3); //? Nice work!

// Step 9
var arr = [];
console.log(arr);

// Step 10
//? I would recommend using let instead of var, as let cannot escape block scope in which it exists, however var can, for example notice I can console.log(i) below and it works b/c even though var is defined in block scope of the for loop we can still access it outside in the global scope. If you change it to let it will throw an error at the console.log(i) as it only exists inside of the block scope and NOT the global scope
for (var i = 1; i < 11; i++) {
	arr.push(i);
}
console.log(arr);
console.log(i); //? writes 11 to the console b/c i was defined w/ var instead of let

// Step 11
arr.push(11);
console.log(arr);

// Step 12
arr.pop();
console.log(arr);

// Step 13
arr.unshift(0);
console.log(arr);

// Step 14
// arr.shift(0); //! No need to pass in 0 here, as shift will just remove the first element of the array no parameters needed.
arr.shift();
console.log(arr);

// Step 15
arr.splice(0, 1);
console.log(arr);

// Step 16
arr.splice(7, 2); //! Great work! I added another example below commented out
// arr.splice(arr.length - 2, 2);
console.log(arr);

// Step 17
arr.splice(0, 0, -1, 0, 1); //! Awesome work!
console.log(arr);

// Step 18
var copy = arr.slice(0, 3);
console.log(copy);
