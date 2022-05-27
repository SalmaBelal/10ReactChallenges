
import React from "react";
import { Link } from "react-router-dom";

  
function Home () {
  return (
    <div>
      <h1>Exercises</h1>
      <nav>
        <Link to="/togglebutton">Toggle Button</Link><br/>
        <Link to="/arrayofusers">Array Of Users</Link> <br/>
        <Link to="/togglehideelement">Toggle Hide Element</Link> <br/>
        <Link to="/twowaydatabinding">Two Way Data Binding</Link> <br/>
        <Link to="/disablebutton">Disable Button</Link> <br/>
        <Link to="/updateparentstate">Update Parent State</Link> <br/>
        <Link to="/addreactchildren">Add React Children</Link> <br/>
        <Link to="/addtwonumbers">Add Two Numbers</Link> <br/>
        <Link to="/counter">Counter</Link> <br/>
        <Link to="/fetchdatafromapi">FetchDataFromApi</Link> <br/>
    
      </nav>
    </div>
  );
}
  
export default Home;