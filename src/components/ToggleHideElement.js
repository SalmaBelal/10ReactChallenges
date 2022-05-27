import React, { useState } from "react";

export function ToggleHideElement(){


    const [showElement, setShowElement] = useState(true);

    function HandleToggle(){
        if (showElement){
            setShowElement(false)
        }
        else{
            setShowElement(true)
        }
    }

    return(
    <>
        <button onClick={HandleToggle}>Toggle Element Below</button>
  
        { showElement &&
            <div>Toggle Challenge</div>
        }
        
      </>

    );

}