//1

// import React, { useState, useLayoutEffect, useRef } from "react";

// function App() {

//   const [width, setWidth] = useState(0);

//   const boxRef = useRef();

//   useLayoutEffect(() => {
//     setWidth(boxRef.current.offsetWidth);
//   }, []);

//   return (
//     <div>
//       <h1>useLayoutEffect Example</h1>

//       <div
//         ref={boxRef}
//         style={{
//           width: "300px",
//           height: "100px",
//           backgroundColor: "lightblue"
//         }}
//       >
//         Sample Box
//       </div>

//       <h2>Box Width: {width}px</h2>
//     </div>
//   );
// }

// export default App;




// import React, { useLayoutEffect, useRef } from "react";

// function App() {

//   const textRef = useRef();

//   useLayoutEffect(() => {
//     textRef.current.style.color = "red";
//   }, []);

//   return (
//     <div>
//       <h1 ref={textRef}>
//         Color Changed Using useLayoutEffect
//       </h1>
//     </div>
//   );
// }

// export default App;
