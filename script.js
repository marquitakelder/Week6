// Step 1
var var1;

// Step 2
var1 = "string";

// Step 3
var2 = var1[5];

// Step 4
var2 += "o!";

// Step 5
var3 = 1;

// Step 6
var4 = "2";

// Step 7
console.log(var3 + var4);

// Step 8
console.log(parseInt(var4) + var3);;

// Step 9
var arr = [];
console.log(arr);

// Step 10
for(var i = 1; i < 11; i++) {
    arr.push(i);
}
console.log(arr);

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
arr.shift(0);
console.log(arr);

// Step 15
arr.splice(0,1);
console.log(arr);

// Step 16
arr.splice(7,2);
console.log(arr);

// Step 17
arr.splice(0,0,-1,0,1);
console.log(arr);

// Step 18
var copy= arr.slice(0,3)
console.log(copy);
