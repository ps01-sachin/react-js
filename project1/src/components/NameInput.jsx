import { useState } from "react";  
function NameInput() {
  const [name, setName] = useState(""); // state variable to hold the name input value 
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          >
        
        </input>
        <h2>Hello, {name}</h2>
      </div>
      // here e is the event object that is passed to the onChange handler when the input value changes.
    )

    
}
export default NameInput
