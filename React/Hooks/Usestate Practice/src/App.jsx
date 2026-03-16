import { useState } from 'react'

function App() {
  

  return  <div>
      <h1> Hi there</h1>
    <Counter></Counter>
    </div>
}


function Counter()
{
   const [count,setCount] = useState(0);
   function increaseCount()
   {
    setCount(count+2);
   }
  function decreaseCount()
    {  
      setCount(count-1);
    }
    function reset()
    {
      setCount(0);
    }

  return <div>
      <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
         <button onClick={reset}>Reset Count</button>
    </div>
  
}

export default App
