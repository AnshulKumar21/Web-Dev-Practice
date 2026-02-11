
//1
// import React, { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default App;




//scroller 2
// import React, { useRef } from "react";

// function App() {
//   const sectionRef = useRef();

//   const scrollToSection = () => {
//     sectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <h1>useRef Scroll Example</h1>

//       <button onClick={scrollToSection}>
//         Go to Section
//       </button>

//       <div style={{ height: "100vh" }}>
//         <h2>Upper Content</h2>
//       </div>

//       <div
//         ref={sectionRef}
//         style={{
//           height: "100vh",
//           backgroundColor: "white",
//         }}
//       >
//         <h2>Target Section</h2>
//       </div>
//     </div>
//   );
// }

// export default App;

//3
// import React from "react";

// function UseRef({ scrollToList }) {
//   return (
//     <div>
//       <h1>useRef Scroll Example</h1>

//       <button onClick={scrollToList}>
//         Go to User List
//       </button>

//       <div style={{ height: "100vh" }}>
//         <h2>Upper Content</h2>
//       </div>
//     </div>
//   );
// }

// export default UseRef;


//timer3



// import React, { useRef, useState } from 'react';

// const UseRefTimer = () => {

//   const [count, setCount] = useState(0);

//   const timeRef = useRef(null);

//   const start = () => {
//     if (timeRef.current) return;

//     timeRef.current = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);
//   };

//   const stop = () => {
//     clearInterval(timeRef.current);
//     timeRef.current = null;
//   };

//   const reset = () => {
//     stop();
//     setCount(0);
//   };

//   return (
//     <div>
//       <h1>Timer: {count}</h1>

//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default UseRefTimer;

//4
// import React, { useState, useRef, useEffect } from "react";

// function UseRefPrevious() {
//   const [value, setValue] = useState("");
//   const prevValue = useRef("");

//   useEffect(() => {
//     prevValue.current = value;
//   }, [value]);

//   return (
//     <div>
//       <h2>Current Value: {value}</h2>
//       <h2>Previous Value: {prevValue.current}</h2>

//       <input
//         type="text"
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// }

// export default UseRefPrevious;

//QUESTION 5 – Input Clear Using useRef
// import React, { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   const clearInput = () => {
//     inputRef.current.value = "";
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h1>useRef Clear Input Example</h1>

//       <input ref={inputRef} type="text" />

//       <button onClick={clearInput}>Clear Input</button>
//     </div>
//   );
// }

// export default App;


// QUESTION 6 – Color Changer Using useRef
// import React, { useRef } from "react";

// function App() {
//   const boxRef = useRef();

//   const changeColor = () => {
//     boxRef.current.style.backgroundColor = "yellow";
//   };

//   return (
//     <div>
//       <h1>useRef Color Change Example</h1>

//       <div
//         ref={boxRef}
//         style={{
//           width: "200px",
//           height: "200px",
//           backgroundColor: "lightblue",
//         }}
//       ></div>

//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   );
// }

// export default App;