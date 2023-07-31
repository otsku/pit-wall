import Form from "../form/form.js";
import Table from "../visualisation/table.js";
import Charts from "../visualisation/charts.js";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState("");

  return (
    <div className="component-app">
      <h1 className="white-text"> Pit Wall </h1>
      <Form setFormData={setFormData} />
      <Table formData={formData} />
      <Charts formData={formData} />
    </div>
  );
};

export default App;
