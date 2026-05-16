module.exports
Definition

module.exports is used in Node.js to export functions, objects, variables, or classes from one file so they can be used in another file.

require()
Definition

require() is used to import the exported data from another file into the current file.

Difference Between module.exports and require()
module.exports	require()
Used to export data	Used to import data
Sends data outside a file	Receives data from another file
Written in source file	Written in destination file
Example 1: Export Single Function
math.js
function add(a, b) {
    return a + b;
}

module.exports = add;
app.js
const add = require("./math");

console.log(add(2, 3));
Example 2: Export Multiple Functions
math.js
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = { add, sub };
app.js
const math = require("./math");

console.log(math.add(10, 5));
console.log(math.sub(10, 5));
Example 3: Export Object
user.js
module.exports = {
    name: "Anshul",
    age: 20
};
app.js
const user = require("./user");

console.log(user.name);
____________________________________________________________________________________________________________________