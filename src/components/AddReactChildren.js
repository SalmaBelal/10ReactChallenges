import React from "react";

function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent(props) {
  return (
    <div>
      <h3>Parent Component</h3>
      {props.children}
    </div>
  );
}

export function AddReactChildren() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}