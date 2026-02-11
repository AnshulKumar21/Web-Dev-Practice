// // Modify the increment logic so that when the count value is EVEN it increases by 2, and when the count value is ODD it increases by 1. Change only the button logic.
//1
// import { useState } from "react";
// export const UseState1 = () => {
//   const [count, setCount] = useState(3);

//   return (
//     <>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(prev => (prev % 2 === 0 ? prev + 2 : prev + 1))}>Increment</button >
//     </>
//   )
// }



// // 2 Add a rule so that when quantity becomes 5, the count value resets to 0. Decide which hook to use and what should be included in the dependency array.

// import { useState, useEffect } from "react";

// export const UseState2 = () => {
//   const [count, setCount] = useState(0);
//   const [quantity, setQuantity] = useState(0);

//   useEffect(() => {
//     console.log("Component rendered or quantity changed");
//     if (quantity === 5) {
//       setCount(0);
//     }
//   }, [quantity]); // 👈 dependency

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <h2>Quantity: {quantity}</h2>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increment Count
//       </button>

//       <button onClick={() => setQuantity(prev => prev + 1)}>
//         Increment Quantity
//       </button>
//     </>
//   );
// };


// // 3
// // Create a counter that decrements by 3 when the value is greater than 10, and decrements by 1 when the value is 10 or less. Modify only the decrement button logic.

// import { useState } from "react";

// export const UseState3 = () => {
//   const [count, setCount] = useState(20);

//   return (
//     <>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(prev => (prev > 10 ? prev - 3 : prev - 1))}>
//         Decrement
//       </button>

//       <button onClick={() => setCount(20)}>
//         Reset
//       </button>
//     </>
//   );
// };


// // 4
// // Add a rule so that when score reaches 10, the level increases by 1 and score resets to 0. Use appropriate hook and dependencies.

// import { useState, useEffect } from "react";

// export const UseState4 = () => {
//   const [score, setScore] = useState(0);
//   const [level, setLevel] = useState(1);

//   useEffect(() => {
//     console.log("Score updated or component rendered");
//     if (score === 10) {
//       setLevel(prev => prev + 1);
//       setScore(0);
//     }
//   }, [score]); // 

//   return (
//     <>
//       <h2>Score: {score}</h2>
//       <h2>Level: {level}</h2>

//       <button onClick={() => setScore(prev => prev + 1)}>
//         Increase Score
//       </button>

//       <button onClick={() => setScore(prev => prev + 2)}>
//         Increase Score by 2
//       </button>

//       <button onClick={() => {
//         setScore(0);
//         setLevel(1);
//       }}>
//         Reset Game
//       </button>
//     </>
//   );
// };


// //5

// import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const addTenCorrect = () => {
//     for (let i = 0; i < 10; i++) {
//       setCount(prev => prev + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(prev => prev + 1)}>
//         +1
//       </button>

//       <button onClick={() => setCount(prev => prev + 5)}>
//         +5
//       </button>

//       <button onClick={addTenCorrect}>
//         +10
//       </button>
//     </div>
//   );
// };

// export default Counter;