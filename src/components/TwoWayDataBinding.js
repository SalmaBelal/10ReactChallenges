import React, { useState } from "react";

export function TwoWayDataBinding(){

    const [text, setText] = useState("Edit Me");

    const onChangeHandler = event => {
        setText(event.target.value);
     };

    return (
      <>
        <input type="text" value={text} onChange={onChangeHandler}/>
      </>
    );
}