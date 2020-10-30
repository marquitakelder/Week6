// Step 1
var str1 = "hello";

// Step 2
str1+= " world";
console.log(str1);

// Step 3
var str2 = str1 + "!";
console.log(str2);

// Step 4
console.log(str2.length);

// Step 5
console.log(str1.toUpperCase());

// Step 6
str1[1];
console.log(str1[1]);

// Step 7
str2.indexOf("!");
console.log(str2.indexOf("!"));

// Step 8
var str3 = str2.slice(0,4);
console.log(str3);

// Step 9
console.log(str2.includes("ell"));

// Step 10
var me = {
    name: "Marquita",
    age: 34
}

// Step 11
console.log(me.name);

// Step 12
console.log(me["name"]);

// Step 13
me.canDrink = true;
console.log(me);

// Step 14:
me.greet = function() {
        console.log((`Hello my name is ${this.name}!`));
    }

// Step 15
me.greet();

// Step 16
if (me.name.includes('e') === true) {
    console.log("Your name contains an 'e'.");
}
else {
    console.log("Your name does NOT contain an 'e'.");
}

// Step 17
if (me.hasOwnProperty('canDrink') === true) {
    if (me.canDrink === true) {
        console.log(`${me.name} can drink`);
    }
    else (console.log(`${me.name} cannot drink`));
}
