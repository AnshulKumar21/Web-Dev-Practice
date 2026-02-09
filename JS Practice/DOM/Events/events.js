// //  document.getElementById("btn").addEventListener('click' ,function(){

// // alert("clicked");
// // })
// //  document.getElementById("btn1").addEventListener('dblclick' ,function(){
// // alert("clicked");

// // })
// // let btn2 = document.getElementById("btn2")
// // let p1 = document.getElementById("p1")
// // btn2.addEventListener('click',function()
// // {
// // p1.innerText = "ON"
// // });
// // function createcounter()
// // {
// //   let count = 0;

// //    function increment ()
// //   {
// //     count++;
// //     return count;
// //   }
// //  function decrement()
// //   {
// //     count--;
// //     return count;
// //   }function reset()
// //   {
// //     count = 0;
// //     return count;
// //   }
// //   return {increment,decrement,reset};
// // };

// // let counter = createcounter();
// // console.log(counter.increment()); // 1
// // console.log(counter.increment()); // 2
// // console.log(counter.decrement()); // 1
// // console.log(counter.reset());     // 0



// // function createBankAccount()
// // {
// //   let balance = 1000;
// //   function deposit(amount)
// //   {
// //     if(amount<=0)
// //     {
// //       return "Invalid deposit amount"
// //     }
// //     balance+=amount;
// //     return balance;
// //   }
// //   function withdraw(amount)
// //   {
// //     if(amount> balance)
// //     {
// //       return "Insuffecient Balnce"
// //     }
// //     return balance-=amount;
// //   }
// //   function getBalance()
// //   {
// //     return balance;  
// //   }
// //   return {deposit,withdraw,getBalance}
// // }
// // let Bank = createBankAccount();
// // console.log(Bank.deposit(500));
// // console.log(Bank.withdraw(200));
// // console.log(Bank.getBalance());


// // function vote()
// // {
// //   console.log("vote completed")
// // }
// // function once(fn)
// // {
// //   let called = false;
// //   function ab()
// //   {
// //     if(!called)
// //     {
// //       called = true;
// //       return fn();
// //     }
    
// //   }
// //   return{ab}
// // }
// // let doVote = once(vote);
// // console.log(doVote.ab());
// // console.log(doVote.ab());
// // console.log(doVote.ab());


// // function multiplyby(x)
// // {
// //   return function  (n)
// //   {
// //  return x*n;
// //   };
  
// // }
// // let double = multiplyby(2);
// // console.log(double(5));




// // function createpass(original)
// // {
// //   return function(input)
// //     {
// //       return original===input;
// //     };
  
// // }
// // let check = createpass(1234);
// // console.log(check(234));




// // let btn = document.getElementById("btn");
// // let p = document.getElementById("count");
// // let count = 0;
// // btn.addEventListener("click",function()
// // {
// //   count++;
// //   p.innerText = count;
// // })
// let btn = document.getElementById("toggle");
// let isDark = false;
// btn.addEventListener("click",function()
// {
//   if(!isDark)
//   {
//     document.body.style.backgroundColor="black";
//     document.body.style.color = "white";
//     btn.innerText="Light mode";
//     isDark = true;
//   }else{
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "balck";
//     btn.innerText = "Dark mode";
//     isDark = false;
//   }
// });
// let form = document.getElementById("form");
//   let msg = document.getElementById("msg");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     if (name === "") {
//       msg.innerText = "Name required";
//     } else if (!email.includes("@")) {
//       msg.innerText = "Invalid email";
//     } else if (password.length < 6) {
//       msg.innerText = "Password too short";
//     } else {
//       msg.innerText = "Form submitted successfully";
//     }
//   });



//   ✅ 21. Using map(), add 5 to each element in [10,20,30]
// 🧠 Logic

// map → har element par kaam

// Har number me +5

// 💻 Code
// let arr = [10, 20, 30];

// let result = arr.map(function (n) {
//   return n + 5;
// });

// console.log(result);

// 🔍 Explanation

// JS har element n me deta hai

// n = 10 → 15

// n = 20 → 25

// n = 30 → 35

// 👉 Output:

// [15, 25, 35]

// ✅ 22. Using filter(), extract only strings from ['a',1,'b',2,'c']
// 🧠 Logic

// filter → condition true wale

// String check → typeof value === "string"

// 💻 Code
// let arr = ['a', 1, 'b', 2, 'c'];

// let strings = arr.filter(function (item) {
//   return typeof item === "string";
// });

// console.log(strings);

// 🔍 Explanation

// 'a' → string → keep

// 1 → number → remove

// 'b' → keep

// 👉 Output:

// ['a', 'b', 'c']

// ✅ 23. Using reduce(), find the product of numbers in [1,2,3,4]
// 🧠 Logic

// reduce → ek final value

// Product = multiply

// 💻 Code
// let arr = [1, 2, 3, 4];

// let product = arr.reduce(function (result, n) {
//   return result * n;
// }, 1);

// console.log(product);

// 🔍 Explanation

// Start: result = 1

// 1 * 1 = 1

// 1 * 2 = 2

// 2 * 3 = 6

// 6 * 4 = 24

// 👉 Output:

// 24

// ✅ 24. Convert prices to prices with 18% GST added
// 🧠 Logic

// GST = 18% = price * 0.18

// Final = price + gst

// Use map

// 💻 Code
// let prices = [100, 200, 300];

// let gstPrices = prices.map(function (p) {
//   return p + p * 0.18;
// });

// console.log(gstPrices);

// 🔍 Explanation

// 100 → 118

// 200 → 236

// 300 → 354

// ✅ 25. Count numbers greater than 50 in [20,60,80,40,90]
// 🧠 Logic

// filter → numbers > 50

// .length → count

// 💻 Code
// let arr = [20, 60, 80, 40, 90];

// let count = arr.filter(function (n) {
//   return n > 50;
// }).length;

// console.log(count);

// 🔍 Explanation

// Numbers > 50 → [60, 80, 90]

// Length = 3

// ✅ 26. Extract email addresses from an array of user objects
// 🧠 Logic

// Object array

// map → sirf email nikalna

// 💻 Code
// let users = [
//   { name: "A", email: "a@gmail.com" },
//   { name: "B", email: "b@gmail.com" }
// ];

// let emails = users.map(function (user) {
//   return user.email;
// });

// console.log(emails);


// 👉 Output:

// ["a@gmail.com", "b@gmail.com"]

// ✅ 27. Convert ['js','html','css'] into uppercase
// 🧠 Logic

// map

// toUpperCase()

// 💻 Code
// let tech = ['js', 'html', 'css'];

// let upper = tech.map(function (t) {
//   return t.toUpperCase();
// });

// console.log(upper);


// 👉 Output:

// ["JS", "HTML", "CSS"]

// ✅ 28. Find the average of numbers in [10,20,30,40]
// 🧠 Logic

// Sum using reduce

// Divide by length

// 💻 Code
// let arr = [10, 20, 30, 40];

// let sum = arr.reduce(function (total, n) {
//   return total + n;
// }, 0);

// let average = sum / arr.length;

// console.log(average);


// 👉 Output:

// 25

// ✅ 29. Separate even and odd numbers from [1,2,3,4,5,6]
// 🧠 Logic

// Even → n % 2 === 0

// Odd → n % 2 !== 0

// 💻 Code
// let arr = [1, 2, 3, 4, 5, 6];

// let even = arr.filter(function (n) {
//   return n % 2 === 0;
// });

// let odd = arr.filter(function (n) {
//   return n % 2 !== 0;
// });

// console.log(even);
// console.log(odd);


// 👉 Output:

// [2,4,6]
// [1,3,5]

// ✅ 30. From an array of users, return names of users who are active
// 🧠 Logic

// filter → active users

// map → sirf names

// 💻 Code
// let users = [
//   { name: "A", active: true },
//   { name: "B", active: false },
//   { name: "C", active: true }
// ];

// let activeNames = users
//   .filter(function (u) {
//     return u.active;
//   })
//   .map(function (u) {
//     return u.name;
//   });

// console.log(activeNames);