import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paintings from './painting_data'
import PaintingList from './components/PaintingList'

console.log(Paintings)

function App() {
  return (
    <div className="App">
      <PaintingList paintings={Paintings} />
    </div>
  );
}

export default App;
