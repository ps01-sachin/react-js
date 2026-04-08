import { useState } from 'react' // imprting useState hook from react

function Counter() {
  const [count, setCount] = useState(0) 

  // here count -> state variable that holds the current count value
  // setCount -> function to update the count state
  // useState(0) initializes the count state to 0 
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )

}
export default Counter