// import React from 'react'
// import UseEffect from './Hooks/UseEffect'
// import UseRef from './Hooks/UseRef'

// const App = () => {
//   return (
//     <div>
//       <h1>Use Ref Examples</h1>
//      <UseRef/>
//       <h1>useState + useEffect Example</h1>

//       <UseEffect />
//       <h1>Use Ref Examples</h1>
 
//     </div>
//   )
// }

// export default App



// 
import React, { useRef } from "react";
import UseRef from "./Hooks/UseRef";
import UseEffect from "./Hooks/UseEffect";
import UseReftimer from "./Hooks/UseReftimer"

const App = () => {

  const listRef = useRef();

  const scrollToList = () => {
    listRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <UseRef scrollToList={scrollToList} />

      <UseEffect listRef={listRef} />

      <h1>User Ref Timer Example</h1>
      <UseReftimer/>
    </div>
  );
};

export default App;

