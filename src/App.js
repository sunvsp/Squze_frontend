import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Routing from './routes/route';

class App extends Component {
  render() {
    return (
      <div>
      < Navigation/>
      <div className="container-fluid" style={{marginTop: "1%"}} >
      {/* style={{marginTop: "1%"}} */}
        <Routing/>
      </div>
      </div>
    );
  }
}

export default App;
