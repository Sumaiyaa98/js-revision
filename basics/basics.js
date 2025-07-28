// String Methods in Js

let str = "Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(-11, 6)); //better than subtring method, as we can enter the negative value in this which we can't do in substring
console.log(str.replace("World", "JavaScript"));
console.log(str.split(" "));
console.log(str.substring(0,5)); 


// NUMBERS IN JS

let value = 234.5311;

console.log(value.toFixed(2));
console.log(value.toPrecision(3));

let hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));


// Math in Js

let num1 = 10;
let num2 = 5;

console.log(Math.min(num1, num2));
console.log(Math.max(num1, num2));


console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.round(4.7));




