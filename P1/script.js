// Question 1

// function createGreeting(name)
// {
// return function()
// {
//   console.log(`Hello ${name}`);
// }
// }
// let x = createGreeting("Anshul");
// x();


//________________________________________________



// //Question 2 
// function scoreTracker()
// {
//   let score = 0;
//   function addScore(points)
//   {
//      score+=points;
     
//   }
//   function getScore()
//   {
//     console.log(score);
//   }
//   return{addScore,getScore};
// }
// let score = scoreTracker();
// score.addScore(5);
// score.getScore();



//________________________________________________
  //Question 3
//   function limit(fn, max) {
//   let count = 0; 

//  function inner () {
//     if (count < max) {
//       count++;
//       return fn();
//     }else{
//       console.log("Limit exceed");
//     }
//   }
//   return {inner}
// }
// function fn() {
//   console.log("Done");
// }

// let x = limit(fn, 3);
// x.inner();
// x.inner();
// x.inner();
// x.inner();
   


//Question 4
// function createUser(role)
// {
//   return function(requiredRole)
//   {
//     console.log(role===requiredRole);
//   }
// }
// let user = createUser("user");
// let admin  = createUser("admin");
// user("user");
// user("admin");
// admin("user");
// admin("admin");




// Question 6
// function outer()
// {
//   let id = 2;
//   return  function()
//   {
  
//     id+=1;
//       console.log(id++);
//   }
// }
// let x = outer();
// x();



//Question 7 

// function msg()
// {
//   let secretmsg = "hello";
//   return function()
//   {
//     console.log(secretmsg);
//   }
// }
// let x = msg();
// x();



// Question 8
//  function counter(x)
//  {
//   let value = 0
//   return function()
//   {
// value +=x;
//  return value;
  
//   }
//  }
//  let x = counter(3);
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());



//Question 9
// function createVotingSystem() {
//   let yesVotes = 0;
//   let noVotes = 0;

//   return function vote(type) {
//     if (type === "yes") {
//       yesVotes++;
//       return yesVotes
//     } else if (type === "no") {
//       noVotes++;
//       return noVotes;
//     }
//   };
// }

// const vote = createVotingSystem();

// console.log(vote("yes")); 
// console.log(vote("no"));  
// console.log(vote("yes")); 
// console.log(vote("yes")); 
// console.log(vote("no"));  
// console.log(vote("yes")); 



//10

// function Calculator(discountPercent) {
//   return function (price) {
//     return price - (price * discountPercent / 100);
//   };
// }

// const x = Calculator(10);
// const y= Calculator(20);

// console.log(x(100));
// console.log(y(200));




//11
// let btn = document.getElementById("btn")
// btn.addEventListener('click',function(){
//   btn.innerText ="clicked";
// })

//12
// btn.addEventListener('mouseover',function()
// {
//   document.body.style.backgroundColor="white";
// })



//21 
//  let arr = [10, 20, 30];

// let result = arr.map(function (n) {
//   return n + 5;
// });

// console.log(result);



//22
// let arr = ['a',1,'b',2,'c']
// let strings = arr.filter(function(n)
// {
//   return typeof n==="string";
// })
// console.log(strings);

//23
// let arr = [1,2,3,4]
// let product = arr.reduce(function(result,n)
// {
//   return result*n;
// },1)
// console.log(product); 



//24
//  let arr = [10,20,30,40];
//  let gst = arr.map(function(n)
// {
//   return n+(n*0.18);
// })
// console.log(gst);



//25
// let arr = [20,60,80,40,90]
// let result = arr.filter(function(n)
// {
//   return n>50;
// })
// console.log(result);


//27
// let arr = ['js','html','css']
// let result = arr.map(function(t)
// {
//   return t.toUpperCase();
// })
// console.log(result);

//28
// let arr = [10,20,30,40]
// let sum = arr.reduce(function(t,total)
// {
//    return total+t;
// },0)
// let avg = sum/arr.length;
// console.log(avg);
//29

// let arr = [1,2,3,4,5,6]
// let even = arr.filter(function(t)
// {
// return t%2==0;
// })
// let odd = arr.filter(function(t)
// {
// return t%2!=0;
// })
// console.log(even);
// console.log(odd);





//
// let btn = document.querySelector("#btn")
// btn.onclick=()=>{
//   console.log("clciked");
// }



// live display of input

// btn.addEventListener("click",()=>{
//   console.log("click")
// })



//______________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________

//Question1
// let arr = [2,4,6,8]
// let result = arr.map(n=>n*2)
// console.log(result);




//Question2

// let arr = [1,2,3,4,5,6,7]
// let result = arr.filter(n=>n%2==0)
// console.log(result);


//Question3
// let arr = [10,20,30,40]
// let result = arr.reduce(function(n,res)
// {
//   return n+res;
// },0)
// console.log(result);


//Question 4
// let arr = [10,25,60,40,80]
// let result = arr.find(n=>n>50)
// console.log(result);



//Question 5
// let arr = [3,5,-2,9]
// let result = arr.some(n=>n<0)
// console.log(result);

//Question 6
// let arr = [2,4,-6,8]
// let result = arr.every(n=>n>=0)
// console.log(result);

//Question 7
// function calculate(a,b,callback)
// {
//   callback(a,b)
// }
// function callback(a,b)
// {
//   console.log(a+b);
// }
// calculate(5,6,callback)

//Question 8
// function task(callback)
// {
//   setTimeout(()=>callback(),2000)
// }
// task(()=>console.log("Task completed"))



//Question 9
// let arr = [1, 2, 3, 4];

// function callback(num) {
//   console.log(num * 2);
// }

// arr.forEach(callback);

//Question 10
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Success");
//   }, 3000);
// });

// promise.then(function (result) {
//   console.log(result);
// });

//Question 11
// function checknum(n){
// return new Promise(function(resolve,reject)
// {
//   if(n<5)
//   {
//     reject("rejected")
//   }else{
//     resolve("success")
//   }
// })
// }
// checknum(4)
// .then(result=>console.log("4",result))
// .catch(error=>console.log("4",error))
// checknum(8)
// .then(result=>console.log("8",result))
// .catch(error=>console.log("8",error))

// checknum(3)
// .then(result=>console.log("3",result))
// .catch(error=>console.log("3",error))

// checknum(11)
// .then(result=>console.log("11",result))
// .catch(error=>console.log("11",error))



//Question 12
// let promise = new Promise(function(resolve)
// {
//   resolve(5)
// })
// .then(function(value)
// {
//   return value*2;
// })
// .then (function(value){
//   return value-3;
// })
// .then(function(value)
// {
//   console.log(value);
// })
