//1

// import React from 'react'

// const Props = (props) => {

//   return (
//     <div>

//       <h2>{props.name}</h2>

//       <h2>Technologies List</h2>

//       <ul>
//         {props.tech.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <h2>User Details</h2>

//       <p>Name: {props.obj.name}</p>
//       <p>Age: {props.obj.age}</p>

//       <ul>
//         {props.obj.arr1.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <h2>Students List (Array of Objects)</h2>

//       <ul>
//         {props.students.map((stu) => (
//           <li key={stu.id}>
//             {stu.name} - {stu.marks}
//           </li>
//         ))}
//       </ul>

//      <button onClick={() => props.sum(3,4)}>

//         Show Sum
//       </button>

//     </div>
//   )
// }

// export default Props



// 2

// export const Props = ({ name, age, data, multiply, sum, ...rest }) => {
//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//       <h3>{rest.college}</h3>
//       <ul>
//         {rest.courses.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//         <hr />
//         {rest.courses.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//         <hr />
//         {rest.courses2.map(({ course, Course_id }, index) => (
//           <li key={index}>{`This ${course} course id is : ${Course_id}`}</li>
//         ))}
//         <hr />
//         {rest.courses2.map(({ course, Course_id }, index) => {
//           return <li key={index}>{`This ${course} course id is : ${Course_id}`}</li>
//         })}

//         <hr />
//         <br />
//         {data.map(({ name, age }, index) => {
//           return <li key={index}>{`Name is ${name} and age is ${age}`}</li>
//         })}

//         <hr />
//         <button onClick={() => console.log(sum(5, 3))} onDoubleClick={() => console.log(multiply(5, 3))}>Sum</button>


//       </ul>
//     </>
//   )
// }

//
// 3

// export const Props3 = ({ title, items, userInfo, products, handleClick, calculate }) => {
//   return (
//     <div>
//       <h1>{title}</h1>

//       <h2>Simple Items List</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <h2>User Information</h2>
//       <p>Username: {userInfo.username}</p>
//       <p>Email: {userInfo.email}</p>
//       <h3>Skills:</h3>
//       <ul>
//         {userInfo.skills.map((skill, i) => (
//           <li key={i}>{skill}</li>
//         ))}
//       </ul>

//       <h2>Products Catalog</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - Price: ${product.price}
//           </li>
//         ))}
//       </ul>

//       <hr />

//       {products.map(({ id, name, price }) => {
//         return (
//           <li key={id}>
//             Product: {name}, Cost: ${price}
//           </li>
//         )
//       })}

//       <button onClick={() => handleClick("Hello from Props3!")}>
//         Click Me
//       </button>
//       <button onClick={() => console.log(calculate(10, 5))}>
//         Calculate
//       </button>
//     </div>
//   )
// }

// // 4

// export const Props4 = ({ heading, colors, employee, orders, multiply, subtract }) => {
//   return (
//     <div>
//       <h1>{heading}</h1>

//       <h2>Color Palette</h2>
//       <ul>
//         {colors.map((color, index) => (
//           <li key={index} style={{ color: color }}>
//             {color}
//           </li>
//         ))}
//       </ul>

//       <h2>Employee Data</h2>
//       <p>Name: {employee.name}</p>
//       <p>Position: {employee.position}</p>
//       <p>Department: {employee.department}</p>

//       <h3>Projects:</h3>
//       <ul>
//         {employee.projects.map((project, i) => (
//           <li key={i}>{project}</li>
//         ))}
//       </ul>

//       <h2>Order Details</h2>
//       {orders.map((order, index) => (
//         <div key={index}>
//           <p>
//             Order #{order.orderId} - {order.item} - Quantity: {order.quantity}
//           </p>
//         </div>
//       ))}

//       <hr />

//       {orders.map(({ orderId, item, quantity }) => {
//         return (
//           <p key={orderId}>
//             Item: {item}, Qty: {quantity}
//           </p>
//         )
//       })}

//       <button onClick={() => console.log(multiply(7, 8))}>
//         Multiply
//       </button>
//       <button onDoubleClick={() => console.log(subtract(20, 5))}>
//         Subtract (Double Click)
//       </button>
//     </div>
//   )
// }

// // 5

// export const Props5 = ({ companyName, frameworks, profile, courses, add, divide, ...extraProps }) => {
//   return (
//     <div>
//       <h1>{companyName}</h1>
//       <h3>{extraProps.location}</h3>

//       <h2>Popular Frameworks</h2>
//       <ul>
//         {frameworks.map((fw, i) => (
//           <li key={i}>{fw}</li>
//         ))}
//       </ul>

//       <h2>Profile Information</h2>
//       <p>Full Name: {profile.fullName}</p>
//       <p>City: {profile.city}</p>
//       <p>Country: {profile.country}</p>

//       <h3>Hobbies:</h3>
//       <ul>
//         {profile.hobbies.map((hobby, index) => {
//           return <li key={index}>{hobby}</li>
//         })}
//       </ul>

//       <h2>Available Courses</h2>
//       {courses.map((course) => (
//         <div key={course.courseId}>
//           <p>{course.courseName} - Duration: {course.duration} weeks</p>
//         </div>
//       ))}

//       <hr />

//       <ul>
//         {courses.map(({ courseId, courseName, duration }) => {
//           return (
//             <li key={courseId}>
//               {courseName} ({duration} weeks)
//             </li>
//           )
//         })}
//       </ul>

//       <button onClick={() => add(15, 25)}>
//         Add Numbers
//       </button>
//       <button onClick={() => console.log(divide(100, 4))}>
//         Divide
//       </button>
//       <button onDoubleClick={() => console.log(extraProps.message)}>
//         Show Message
//       </button>
//     </div>
//   )
// }