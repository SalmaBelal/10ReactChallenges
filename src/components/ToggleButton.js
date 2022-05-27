import React, { useState } from 'react';

function ToggleButton(){

    const [buttonText, setButtonText] = useState("ON")

    function handleClick() {
        if (buttonText === "ON"){
          setButtonText("OFF")
        }
        else{
          setButtonText("ON")
        }
      }

      return (
        <button onClick={handleClick}>{buttonText}</button>
      );

}

export default ToggleButton;