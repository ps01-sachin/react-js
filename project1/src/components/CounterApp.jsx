import {useState} from 'react'

function CounterApp() {
  const [count, setCount] = useState(0) // state variable to hold the counter value

  function decrement() {
    setCount(count - 1) // function to decrement the counter value
  }
  function reset() {
    setCount(0) // function to reset the counter value to 0
  }
  function increment() {
    setCount(count + 1) // function to increment the counter value
  }

  return (
    <div>
      <h2>Counter : {count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>

        {count ==10 && <h3>Congratulations! Count reached 10!</h3>}
      </div>
      
      

        
    </div>
  )
}
export default CounterApp