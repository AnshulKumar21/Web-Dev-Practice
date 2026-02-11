//1

// import React, { useState, useMemo } from "react";

// function App() {

//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   const heavyCalculation = useMemo(() => {
//     console.log("Calculating...");
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <h1>useMemo Example</h1>

//       <h2>Count: {count}</h2>
//       <h2>Result: {heavyCalculation}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>

//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Type Name"
//       />
//     </div>
//   );
// }

// export default App;


