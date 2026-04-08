import { useState } from 'react'
import { useEffect } from 'react';
function App() {
  

  return  <div>
      <h1> Hi there</h1>
    <Counter></Counter>
    </div>
}


function Counter()
{
   const [count,setCount] = useState(0);
   useEffect(function()
  {
const id = setInterval(
   function increaseCount()
   {
    setCount(count=>count+1);
   },1000000);
    return () => {
    clearInterval(id);
  };

}, []);
    
  // function decreaseCount()
  //   {  
  //     setCount(count-1);
  //   }
  //   function reset()
  //   {
  //     setCount(0);
  //   }

  return <div>
      <h1>{count}</h1>
    {/* <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
         <button onClick={reset}>Reset Count</button> */}
    </div>
  
}

export default App
