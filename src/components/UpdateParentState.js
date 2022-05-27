import React, { useState } from "react";
import "./UpdateParentState.css";

//This uses callback
function Child({ setValueProp }) {
    return (
      <>
        <div>Child</div>
        <button onClick={()=>setValueProp("Parent Has Been Updated!")}>Change Parent Value</button>
      </>
    );
  }
  
export function UpdateParentState() {
    const [value, setValue] = useState(
      "I need to be updated from my child"
    );
  
    return (
      <>
        <h3>Update Parent State Challenge (Using Callback)</h3>
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>
  
        <div className="wrapper">
          <Child setValueProp={setValue}/>
        </div>
      </>
    );
  }
  