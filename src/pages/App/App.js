import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import * as jokeAPI from '../../utils/jokeService';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import JokesPage from '../JokesPage/JokesPage';
import GenJokesPage from '../GenJokesPage/GenJokesPage';
import ProgramJokesPage from '../ProgramJokesPage/ProgramJokesPage';
import KnockJokesPage from '../KnockJokesPage/KnockJokesPage';
import RandomJokesPage from '../RandomJokesPage/RandomJokesPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      jokes: [],
    };
  }


  async componentDidMount() {
    const jokes = await jokeAPI.getJoke('jokes/');
    this.setState({ jokes });
    console.log(jokes)
  }

  // handleNewJokeClick = () => {
  //   this.setState({ jokes: jokeService.getJoke() });
  // }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }


  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/signup' render={({ history }) =>
          <Signup
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/login' render={({ history }) =>
          <Login
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/' render={({ history }) =>
          <JokesPage
            history={history}
            user={this.state.user}
          />
        } />
        <Route exact path='/general' render={({ history }) =>
          <GenJokesPage
            history={history}
            user={this.state.user}
            jokes={this.state.jokes}
          />
        } />
        <Route exact path='/programming' render={({ history }) =>
          <ProgramJokesPage
            history={history}
            user={this.state.user}
          />
        } />
        <Route exact path='/knock' render={({ history }) =>
          <KnockJokesPage
            history={history}
            user={this.state.user}
          />
        } />
        <Route exact path='/random' render={({ history }) =>
          <RandomJokesPage
            history={history}
            user={this.state.user}
          />
        } />
      </div>
    );
  }
}

export default App;
