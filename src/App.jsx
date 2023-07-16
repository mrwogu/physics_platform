import React  from 'react';
import {Helmet} from 'react-helmet';
import Header from "./components/Header";
import './App.css';
import './experiments/ex01.jsx';
import Model01 from "./experiments/Model01";

function App() {

  return (
    <div className="App">
        <Header className="Test" title="Physics"/>
        <div className="columns" is-centered>
            <div className="column">
            </div>
            <div className="column" m-5 is-two-thirds>
                <Model01/>
            </div>
        </div>
    </div>
  );
}

export default App;
