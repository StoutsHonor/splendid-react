import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {push} from 'react-router-redux';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div><Home/></div>
          <main>
            <Route exact path="/" component={Home}/>
          </main>
        </div>
        <div className="footer">
          <div className="pull-right">
          </div>
          <div>
              <strong>Copyright</strong> StoutsHonor.io &copy; 2017
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {{}}
  
const mapDispatchToProps = dispatch => bindActionCreators({
    navigateHome: () => push('/')
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
