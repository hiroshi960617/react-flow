import React from 'react';
import Coverflow from './Coverflow';
import './App.css'; // Keep or remove based on styling needs
//
function App() {
  return (
    <div className="App">
      <h1>React Coverflow</h1>
      <Coverflow />
      {/* You can add other controls or content here if needed */}
    </div>
  );
}

export default App;
