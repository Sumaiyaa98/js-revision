# 📚 JavaScript Array Methods – Quick Reference

---

## 🔁 Looping & Iteration

| Method        | Description                                | Example                            |
|---------------|--------------------------------------------|-------------------------------------|
| `forEach()`   | Runs a function for each array element     | `arr.forEach(item => console.log(item))` |
| `map()`       | Creates a new array with modified values   | `arr.map(item => item * 2)`         |
| `filter()`    | Returns a new array with matching items    | `arr.filter(item => item > 5)`      |
| `reduce()`    | Reduces array to single value              | `arr.reduce((sum, item) => sum + item)` |
| `find()`      | Returns first matching element             | `arr.find(item => item > 10)`       |
| `findIndex()` | Returns index of first match               | `arr.findIndex(item => item > 10)`  |
| `some()`      | Checks if **any** element matches          | `arr.some(item => item > 5)`        |
| `every()`     | Checks if **all** elements match           | `arr.every(item => item > 5)`       |

---

## 🔄 Modify Original Array

| Method         | Description                               | Example                             |
|----------------|-------------------------------------------|--------------------------------------|
| `push()`       | Adds to **end**                           | `arr.push(4)`                        |
| `pop()`        | Removes from **end**                      | `arr.pop()`                          |
| `unshift()`    | Adds to **start**                         | `arr.unshift(1)`                     |
| `shift()`      | Removes from **start**                    | `arr.shift()`                        |
| `splice()`     | Add/remove at specific index              | `arr.splice(2, 1)`                   |
| `sort()`       | Sorts elements (modifies array)           | `arr.sort((a, b) => a - b)`          |
| `reverse()`    | Reverses array order                      | `arr.reverse()`                      |
| `fill()`       | Replaces all values with one              | `arr.fill(0)`                        |
| `copyWithin()` | Copies part of array to another position  | `arr.copyWithin(1, 2, 4)`            |

---

## 🆕 Return New Array (Non-destructive)

| Method        | Description                              | Example                            |
|---------------|------------------------------------------|-------------------------------------|
| `concat()`    | Combines arrays                          | `arr1.concat(arr2)`                 |
| `slice()`     | Returns a slice of the array             | `arr.slice(1, 3)`                   |
| `flat()`      | Flattens nested arrays                   | `[1, [2, 3]].flat()`                |
| `flatMap()`   | Like `map()` + `flat()` (1 level)        | `arr.flatMap(x => [x * 2])`         |
| `toSorted()`  | Returns a sorted **copy** of array       | `arr.toSorted()`                    |
| `toReversed()`| Returns a reversed **copy**              | `arr.toReversed()`                  |

---

## 🔍 Search & Check

| Method          | Description                          | Example                           |
|-----------------|--------------------------------------|------------------------------------|
| `includes()`    | Checks if value exists               | `arr.includes(5)`                 |
| `indexOf()`     | First index of value                 | `arr.indexOf(3)`                  |
| `lastIndexOf()` | Last index of value                  | `arr.lastIndexOf(3)`              |
| `isArray()`     | Check if a value is an array         | `Array.isArray(arr)`              |

---

## 🧪 Conversion & String

| Method        | Description                          | Example                           |
|---------------|--------------------------------------|------------------------------------|
| `join()`      | Joins elements into a string         | `arr.join(', ')`                  |
| `toString()`  | Converts array to string             | `arr.toString()`                  |

---

## 🆕 ES2023+ (If you're curious)

| Method            | Description                        | Example                             |
|-------------------|------------------------------------|--------------------------------------|
| `toSpliced()`     | Immutable version of `splice()`   | `arr.toSpliced(1, 1)`                |
| `with()`          | Copy of array with changed value  | `arr.with(1, "new")`                 |
| `findLast()`      | Finds last match in array         | `arr.findLast(x => x < 10)`          |
| `findLastIndex()` | Index of last match               | `arr.findLastIndex(x => x < 10)`     |

---

### 💡 Tip:
Use **`.map()`**, **`.filter()`**, and **`.reduce()`** often — they’re the core of clean, functional JavaScript.

