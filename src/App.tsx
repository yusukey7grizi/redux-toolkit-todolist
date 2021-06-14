import React, { useState } from "react";

import "./App.css";
import Form from "./features/Form/form";
import Todolist from "./features/Todo/Todolist";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Redux-Toolkit Todolist</h1>
      <Form />
      <Todolist />
    </div>
  );
};

export default App;
