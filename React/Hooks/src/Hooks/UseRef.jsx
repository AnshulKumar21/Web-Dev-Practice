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




//scroller 
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


import React from "react";

function UseRef({ scrollToList }) {
  return (
    <div>
      <h1>useRef Scroll Example</h1>

      <button onClick={scrollToList}>
        Go to User List
      </button>

      <div style={{ height: "100vh" }}>
        <h2>Upper Content</h2>
      </div>
    </div>
  );
}

export default UseRef;
