import React from "react";
import "./App.css";
import paintings from "./painting_data";
import PaintingList from "./components/PaintingList";

console.log(paintings);

function App() {
  return (
    <div className="App">
      <PaintingList paintings={paintings} />
    </div>
  );
}

export default App;
