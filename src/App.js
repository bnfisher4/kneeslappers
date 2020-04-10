import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Nav />
        <Route exact path='/signup' render={() =>
          <Signup />
        } />
        <Route exact path='/login' render={() =>
          <Login />
        } />
      </div>
    );
  }
}

export default App;
