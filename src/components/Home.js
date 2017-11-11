import React, {Component} from 'react';
import {withRouter} from "react-router"
import {connect} from "react-redux";

class Home extends Component {

  render() {
    return (
      <div>
        This is the Home Page
      </div>
    )
  }
}

export default withRouter(connect()(Home))