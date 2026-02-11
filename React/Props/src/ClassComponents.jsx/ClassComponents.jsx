// import React from 'react';

// class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     // 1. State must be an object
//     this.state = {
//       users: []
//     };
//   }

//   // 2. This is the built-in method that runs once the component "is born"
//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => {
//         // 3. Update the state object
//         this.setState({ users: data });
//       })
//       .catch(err => console.log("Fetch error:", err));
//   }

//   // 4. You MUST have a render method to show the data
//   render() {
//     return (
//       <div>
//         <h2>Users from Class Component</h2>
//         <ul>
//           {this.state.users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ClassComponent;


// // increment and decremnt using this .state and this.setState (class component)
// import React from 'react';

// class Counter extends React.Component {
//   constructor() {
//     super();

//     // state object
//     this.state = {
//       count: 0
//     };
//   }

//   // Increment method
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   // Decrement method
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Counter App (Class Component)</h2>
//         <h3>Count: {this.state.count}</h3>

//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// // export default Counter;



// // lifecycle methods (componentDidMount) in class component

// import React from 'react';

// class LifeCycleDemo extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       message: 'Component is loading...',
//       count: 0
//     };
//   }

//   // 🔹 Lifecycle method
//   componentDidMount() {
//     console.log('componentDidMount called');
    
//     // Runs AFTER first render
//     this.setState({
//       message: 'Component mounted successfully!',
//       count: 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Lifecycle Method Demo</h2>
//         <h3>{this.state.message}</h3>
//         <p>Count: {this.state.count}</p>
//       </div>
//     );
//   }
// }

// // export default LifeCycleDemo;