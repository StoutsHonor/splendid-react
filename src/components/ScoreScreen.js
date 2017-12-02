import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ScoreScreen extends Component {

  render() {
    return (
      <div>
        <div>
          This is the Login Page
        </div>
        <div><Link to='/home'>Go to Home</Link></div>
      </div>
    )
  }
}

export default Login;