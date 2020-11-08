import React from "react";
import "./App.css";

import Section from "./components/Section";

import data from "./assets/data.json";
function App() {
  return (
    <div className="page">
      <h1>Netflix</h1>
      {data.map((data, index) => {
        return <Section key={index} data={data} />;
      })}
    </div>
  );
}

export default App;
