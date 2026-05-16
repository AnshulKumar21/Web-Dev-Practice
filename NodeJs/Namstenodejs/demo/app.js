require("./xyz")//one module to another
// const obj = require ("./sum");
//Destructuring 
const{x,calculateSum} = require("./sum")
//this is for common js now  for ES modules

//Modules
// import  calculateSum from "./sum.js";
// import {x} from "./sum.js"
var name = "Anshul";
var a = 10;
var b = 20;
console.log(name);
// console.log(a+b);
// console.log(obj.x)
// obj.calculateSum(a,b);

//destructuring way we can use direct without obj.x
console.log(x);
calculateSum(a,b)



