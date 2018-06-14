import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WaitingRoom extends Component {

  render() {
    return (
      <div>
        <div>
          This is the Waiting Room
        </div>
        <div><Link to='/game-screen'>Go to Game Screen</Link></div>
      </div>
    )
  }
}

export default WaitingRoom;