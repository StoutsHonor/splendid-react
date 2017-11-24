import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class PlayerItems extends Component {

  render() {
    return (
      <div>
        <Panel onClick={this.props.toggleModalDetails} style={{cursor:"pointer"}}>
          <div className="col-sm-3" style={{fontSize: 18}}>
            <i className="fa fa-bolt fa-2x"/> Points: 0
          </div>
          <div className="col-sm-3">
            <i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>0</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>0</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>0</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>0</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>0</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}>0</i>
          </div>
          <div className="col-sm-3">
            <i className="fa fa-eercast fa-2x" style={{color:'gray'}}>0</i>
            <i className="fa fa-eercast fa-2x" style={{color:'blue'}}>0</i>
            <i className="fa fa-eercast fa-2x" style={{color:'green'}}>0</i>
            <i className="fa fa-eercast fa-2x" style={{color:'red'}}>0</i>
            <i className="fa fa-eercast fa-2x" style={{color:'black'}}>0</i>
          </div>
          <div className="col-sm-3" style={{fontSize: 18}}>
            <i className="fa fa-lock fa-2x"/> Cards Reserved: 0
          </div>
        </Panel>
      </div>
    )
  }
}

export default PlayerItems;