import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import history from './history';

import CreateGame from './components/CreateGame';
import GameScreen from './components/GameScreen';
import Home from './components/Home';
import JoinGame from './components/JoinGame';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import WaitingRoom from './components/WaitingRoom';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create-game' component={CreateGame}/>
            <Route exact path='/game-screen' component={GameScreen}/>
            <Route exact path='/join-game' component={JoinGame}/>
            <Route exact path='/leaderboard' component={Leaderboard}/>
            <Route exact path='/waiting-room' component={WaitingRoom}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;