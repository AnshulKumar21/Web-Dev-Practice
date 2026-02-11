// 1 inc dec by one and type



// import React, { useState, useEffect } from 'react'

// const UseEffect = () => {

//   // STATE VARIABLES
//   const [count, setCount] = useState(0)
//   const [type, setType] = useState("Even")

//   // FUNCTION TO INCREASE COUNT
//   const increase = () => {
//     setCount(count + 1)
//   }
//   const decrease =()=>{
//     setCount(count-1)
//   }

//   // USE EFFECT LOGIC
//   useEffect(() => {

//     if (count % 2 === 0) {
//       setType("Even")
//     } else {
//       setType("Odd")
//     }

//   }, [count])

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <h1>Type: {type}</h1>

//       <button onClick={increase}>
//         Increase Count
//       </button>
//       <button onClick={decrease}>Decrease Count</button>

//     </div>
//   )
// }

// export default UseEffect





//2 on even inc by 2 on odd dec by 1 

// import React, { useState, useEffect } from 'react'

// const UseEffect = () => {

//   // STATE VARIABLES
//   const [count, setCount] = useState(0)
//   const [type, setType] = useState("Even")

//   // FUNCTION TO INCREASE COUNT
//   const increase = () => {
//     if(type==="Even")
//     {
//     setCount(count + 2)
//     }else{
//       setCount(count+1)
//     }
//   }
//   const decrease =()=>{
//     setCount(count-1)
//   }

//   // USE EFFECT LOGIC
//   useEffect(() => {

//     if (count % 2 === 0) {
//       setType("Even")
//     } else {
//       setType("Odd")
//     }

//   }, [count])

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <h1>Type: {type}</h1>

//       <button onClick={increase}>
//         Increase Count
//       </button>
//       <button onClick={decrease}>Decrease Count</button>

//     </div>
//   )
// }

// export default UseEffect






//Question 3 Add a rule so that when quantity becomes 5, the count value resets to 0. Decide which hook to use and what should be included in the dependency array.
//  import React, { useState, useEffect } from 'react'

// const UseEffect = () => {

//   // STATE VARIABLES
//   const [count, setCount] = useState(0)
//   const [type, setType] = useState("Even")

//   // FUNCTION TO INCREASE COUNT
//   const increase = () => {
//     if(type==="Even")
//     {
//     setCount(count + 2)
//     }else{
//       setCount(count+1)
//     }
//   }
//   const decrease =()=>{
//     setCount(count-1)
//   }

//   // USE EFFECT LOGIC
//   useEffect(() => {

//     if (count % 2 === 0) {
//       setType("Even")
//     } else {
//       setType("Odd")
//     }

//   }, [count])

//   return (
//     <div>

//       <h1>Count: {count}</h1>

//       <h1>Type: {type}</h1>

//       <button onClick={increase}>
//         Increase Count
//       </button>
//       <button onClick={decrease}>Decrease Count</button>

//     </div>
//   )
// }

// export default UseEffect


//4 Show/Hide password 
// import React, { useState } from 'react'

// const ShowPassword = () => {

//   const [password, setPassword] = useState("")
//   const [show, setShow] = useState(false)

//   const togglePassword = () => {
//     setShow(!show)
//   }

//   return (
//     <div>

//       <h2>Show / Hide Password Example</h2>

//       <input
//         type={show ? "text" : "password"}
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={togglePassword}>
//         {show ? "Hide" : "Show"}
//       </button>

//     </div>
//   )
// }

// export default ShowPassword


//5
//fetch api
// import React, { useState, useEffect } from "react";

// function App() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);     // EMPTY dependency array

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <div key={user.id} style={{border: "1px solid black", margin: "10px", padding: "10px",
//            backgroundColor: "white",
//            color:"black"
//         }}>
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Website: {user.website}</p>
//         </div>
//       ))}

//     </div>
//   );
// }

// export default App;
 


//6
// import React, { useState, useEffect } from "react";

// function UseEffect({ listRef }) {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div ref={listRef}>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <div
//           key={user.id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px",
//             backgroundColor: "white",
//             color: "black"
//           }}
//         >
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Website: {user.website}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UseEffect;


// QUESTION 7 – Window Title Update
// import React, { useState, useEffect } from "react";

// function App() {

//   const [name, setName] = useState("");

//   useEffect(() => {
//     document.title = name;
//   }, [name]);

//   return (
//     <div>
//       <h1>Change Document Title</h1>

//       <input
//         type="text"
//         placeholder="Enter title"
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;


// 8 – Online / Offline Status
//import React, { useState, useEffect } from "react";

// function App() {

//   const [status, setStatus] = useState(navigator.onLine);

//   useEffect(() => {

//     const online = () => setStatus(true);
//     const offline = () => setStatus(false);

//     window.addEventListener("online", online);
//     window.addEventListener("offline", offline);

//     return () => {
//       window.removeEventListener("online", online);
//       window.removeEventListener("offline", offline);
//     };

//   }, []);

//   return (
//     <div>
//       <h1>Network Status</h1>

//       <h2>{status ? "Online" : "Offline"}</h2>
//     </div>
//   );
// }

// export default App;
