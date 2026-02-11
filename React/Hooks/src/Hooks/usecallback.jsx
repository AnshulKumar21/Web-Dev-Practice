//1

// import React, { useState, useCallback } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const increase = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h1>useCallback Example 1</h1>

//       <h2>Count: {count}</h2>

//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// export default App;


//2import React, { useState, useCallback } from "react";

// function Child({ clickHandler }) {
//   return (
//     <div>
//       <button onClick={clickHandler}>
//         Click From Child
//       </button>
//     </div>
//   );
// }

// function App() {

//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <h1>useCallback Example 2</h1>

//       <h2>Count: {count}</h2>

//       <Child clickHandler={handleClick} />
//     </div>
//   );
// }

// export default App;
