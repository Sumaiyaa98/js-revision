let arr = [0,1,2,3,4]

//***unshift(): to shift or add the element at the start

arr.unshift(9);
console.log(arr);  //output-> [ 9, 0, 1, 2, 3, 4 ]
//usuually use in todo or something, where u want to add the element at the start

//***shift(): to pop or remove the element at the start

arr.shift()
console.log(arr);  //output-> [ 0, 1, 2, 3, 4 ]

//***includes(): to ask or to know that the element is the part of our array or not, gives the boolean exp

console.log(arr.includes(6)) //output-> false

//***indexOf(): to get the index of our element
console.log(arr.indexOf(4));

//*** join() to convert an array into string*/
console.log(arr.join()); //oitput-> 0,1,2,3,4

//difference between slice and splic, 
//***slice() don't do changes in the orginal array, it makes the copy of it, and plus the last range that we give is also not include while doing slice
//like if the range we give is slice(1,3) then only the 1 and 2 index will include, not the 3
//ex
console.log('Original Array', arr);

let myn1 = arr.slice(1,3);
console.log("SLice: ",myn1); //output-> SLice:  [ 1, 2 ]
console.log('Original Array After slice', arr); //output-> Original Array After slice [ 0, 1, 2, 3, 4 ], like the orginal array will remains the same


//while ***splice() do the changes in our original array as well, and the last range is also include in splice
//ex


console.log('Original Array', arr);

let myn2 = arr.splice(1,3);
console.log("SLice: ",myn2); //output-> SLice:  [ 1, 2, 3 ]
console.log('Original Array After slice', arr); //output-> Original Array After slice [ 0, 4 ], like the orginal array will change as well


//concat and spread, both works the same, but spread is more easy, as we can merge more than two arrays in this easily compares to concate

let chips = ['lays','kurkure','wavy']
let drinks = ['coke','pepsi','dew']

let snacks = chips.concat(drinks);
let mySnacks = [...chips,...drinks];

console.log(snacks);  //output-> [ 'lays', 'kurkure', 'wavy', 'coke', 'pepsi', 'dew' ]
console.log(mySnacks); //output-> [ 'lays', 'kurkure', 'wavy', 'coke', 'pepsi', 'dew' ]


// Understanding flat() in Simple Words
// flat() is used to remove nested arrays inside an array and turn everything into a single, simple array.

// Example Without flat()

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);  //output-> [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
// 👉 The array still has sub-arrays inside.


// Using flat()
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 
// 🔹 Output (Flattened Array)  [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// ✅ Now, all nested arrays are removed and everything is in one simple array.



// How flat() Works?
// It removes arrays inside arrays and puts all elements together.
// We specify the depth (how deep it should go) to flatten the array.
// Infinity means flatten everything, no matter how deep the nesting is.



// Example with Depth Levels

const numbers = [1, [2, [3, [4, 5]]]];
console.log(numbers.flat(1)); // [1, 2, [3, [4, 5]]] (Flattens 1 level)
console.log(numbers.flat(2)); // [1, 2, 3, [4, 5]] (Flattens 2 levels)
console.log(numbers.flat(Infinity)); // [1, 2, 3, 4, 5] (Completely flat)


// 1️⃣ Array.isArray() – Checks if a Value is an Array
// 👉 This method checks whether a given value is an array or not.

// ✅ Example:

console.log(Array.isArray([1, 2, 3]));  // true (It's an array)
console.log(Array.isArray("Hello"));    // false (It's a string)
console.log(Array.isArray({ name: "Ali" }));  // false (It's an object)
console.log(Array.isArray(null));  // false (null is not an array)
//✅ Use Case: Helps avoid errors when working with arrays by confirming if a variable is actually an array.

// 2️⃣ Array.from() – Converts Something into an Array
// 👉 This method creates an array from things that look like arrays (like strings, sets, or NodeList).

// ✅ Example: Converting a String to an Array

let str = "Hello";
let arrr = Array.from(str);
console.log(arrr);  // ['H', 'e', 'l', 'l', 'o']
// 🔹 Each character becomes an array element.


//Array.of is also similar but it converts the element into a single array

console.log(Array.of("Hello"));  //[ 'Hello' ]
console.log(Array.from("Hello")); //[ 'H', 'e', 'l', 'l', 'o' ]

//another ex
console.log(Array.of(1,2,4));   //[ 1, 2, 4 ]
// console.log(Array.from(1,2,4)); //error, to get rid of error, use brackets

//like in this we did
console.log(Array.from([1,2,4]));  //[ 1, 2, 4 ]





