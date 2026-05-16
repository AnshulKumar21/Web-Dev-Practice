function calculateSum(a,b)
{
  const sum = a+b;
  console.log(sum);
}
// es modules export we use export in front of function name 
// export function calculateSum(a,b)
// {
//   const sum = a+b;
//   console.log(sum);
// }
// export default calculateSum;
var x = "Sum is"
// export  var x = "Sum is"
// module.exports = calculateSum;
//for single
// module.exports = {
//   x:x,
//   calculateSum:calculateSum
// };


// without giving key values pair we can also do like this 
module.exports = {
  x,// == x:x,
  calculateSum//== calculateSum:calculateSum
};

//common js export 

// es modules export we use export in front of function name 


///modeules protects their variables and functions from leaking
//for giving access we will use export and import  