import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ScoreScreen extends Component {

  render() {
    return (
      <div>
        <div>
          This is the Score Screen Page
        </div>
        <div><Link to='/'>Go to Home</Link></div>
      </div>
    )
  }
}

export default ScoreScreen;