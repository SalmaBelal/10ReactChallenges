import React, { useState } from "react";

export function Counter(){
    const [number, setNumber] = useState(0);

    return (
      <div>
        <h2>Counter: {number}</h2>
        <button onClick={() => {setNumber(number + 1)}}>Increment</button>
        <button onClick={() => {setNumber(number - 1)}}>Decrement</button>
      </div>
    );


}