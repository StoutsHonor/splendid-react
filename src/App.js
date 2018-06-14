import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from './history';

import PlayersProvider from './contexts/Players';

import CreateGame from './components/CreateGame';
import GameScreen from './components/GameScreen';
import Home from './components/Home';
import JoinGame from './components/JoinGame';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import ScoreScreen from './components/ScoreScreen';
import WaitingRoom from './components/WaitingRoom';

class App extends Component {
  render() {
    return (
      <PlayersProvider>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create-game' component={CreateGame}/>
            <Route exact path='/game-screen' component={GameScreen}/>
            <Route exact path='/join-game' component={JoinGame}/>
            <Route exact path='/leaderboard' component={Leaderboard}/>
            <Route exact path='/waiting-room' component={WaitingRoom}/>
            <Route exact path='/score-screen' component={ScoreScreen}/>
          </Switch>
        </Router>
      </PlayersProvider>
    );
  }
}

export default App;