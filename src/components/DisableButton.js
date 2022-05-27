import React, { useState } from "react";

export function DisableButton(){

    const [text, setText] = useState("");

    function handleOnChange(event) { 
        setText(event.target.value);
    };

    const disablebutton = text.length === 0

    return (
      <>
        <input type="text" value={text} onChange={handleOnChange} />
        <button disabled={disablebutton} >Submit</button>
      </>
    );

}