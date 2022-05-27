import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home.js"
import ToggleButton from "./components/ToggleButton.js";
import {ArrayOfUsers} from "./components/ArrayOfUsers.js";
import {ToggleHideElement} from "./components/ToggleHideElement.js";
import {TwoWayDataBinding} from "./components/TwoWayDataBinding.js";
import {DisableButton} from "./components/DisableButton.js";
import {UpdateParentState} from "./components/UpdateParentState.js";
import {AddReactChildren} from "./components/AddReactChildren.js";
import {AddTwoNumbers} from "./components/AddTwoNumbers.js";
import {Counter} from "./components/Counter.js";
import {FetchDataFromApi} from "./components/FetchDataFromApi.js";

/* To look into routes check out this page https://reactrouter.com/docs/en/v6/getting-started/tutorial */

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="togglebutton" element={<ToggleButton />} />
          <Route path="arrayofusers" element={<ArrayOfUsers />} />
          <Route path="togglehideelement" element={<ToggleHideElement />} />
          <Route path="twowaydatabinding" element={<TwoWayDataBinding />} />
          <Route path="disablebutton" element={<DisableButton />} />
          <Route path="updateparentstate" element={<UpdateParentState />} />
          <Route path="addreactchildren" element={<AddReactChildren />} />
          <Route path="addtwonumbers" element={<AddTwoNumbers />} />
          <Route path="counter" element={<Counter />} />
          <Route path="fetchdatafromapi" element={<FetchDataFromApi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;