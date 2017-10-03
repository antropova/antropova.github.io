import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HotelsContainer from './HotelsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route path='/' component={HotelsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
