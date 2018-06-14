import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div>
        <li><Link to='/create-game'>Create Game</Link></li>
        <li><Link to='/join-game'>Join Game</Link></li>
        <li><Link to='/leaderboard'>Leaderboard</Link></li>
        <li><Link to='/game-screen'>Game Screen Shortcut</Link></li>
      </div>
    )
  }
}

export default Home;