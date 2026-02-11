//  1 – 
// import React from "react";
// import { useSearchParams } from "react-router-dom";

// function SearchExample() {

//   const [searchParams] = useSearchParams();

//   const name = searchParams.get("name");

//   return (
//     <div>
//       <h1>useSearchParams Example</h1>

//       <h2>Name: {name}</h2>
//     </div>
//   );
// }

// export default SearchExample;




// 2 – 
// import React from "react";
// import { useSearchParams } from "react-router-dom";

// function SearchExample() {

//   const [searchParams, setSearchParams] = useSearchParams();

//   const update = () => {
//     setSearchParams({ name: "Rahul" });
//   };

//   return (
//     <div>
//       <h1>Set Search Params</h1>

//       <button onClick={update}>Change Query</button>

//       <h2>Name: {searchParams.get("name")}</h2>
//     </div>
//   );
// }

// export default SearchExample;