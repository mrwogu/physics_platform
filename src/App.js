import React  from 'react';
import Header from "./components/Header";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header className="Test" title="Physics"/>
      <div className="columns" is-centered>
         <div className="column"></div>
         <div className="column"></div>
        </div>
    </div>
  );
}

export default App;
