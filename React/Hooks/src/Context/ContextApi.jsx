// // Theme Change Example
// File: contextApi.jsx
// import React, { createContext, useState, useContext } from "react";

// const ThemeContext = createContext();

// function Child() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={toggleTheme}>Change Theme</button>
//     </div>
//   );
// }

// function App() {
//   const [theme, setTheme] = useState("Light");

//   const toggleTheme = () => {
//     setTheme(theme === "Light" ? "Dark" : "Light");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div>
//         <h1>Context API Example 1</h1>
//         <Child />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

//EXAMPLE 2
// User Login Example
// import React, { createContext, useState, useContext } from "react";

// const UserContext = createContext();

// function Profile() {
//   const { user, login, logout } = useContext(UserContext);

//   return (
//     <div>
//       <h2>User: {user}</h2>

//       <button onClick={login}>Login</button>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// function App() {
//   const [user, setUser] = useState("Guest");

//   const login = () => {
//     setUser("Anshul");
//   };

//   const logout = () => {
//     setUser("Guest");
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       <div>
//         <h1>Context API Example 2</h1>
//         <Profile />
//       </div>
//     </UserContext.Provider>
//   );
// }

// export default App;