import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class PlayerItems extends Component {

  render() {
    return (
      <div>
        <Panel>
          <div className="col-sm-3">
            Points: 9
          </div>
          <div className="col-sm-3">
            Buying Power: 
            <i className="fa fa-superpowers" style={{color:'gray'}}>1</i>
            <i className="fa fa-superpowers" style={{color:'blue'}}>2</i>
            <i className="fa fa-superpowers" style={{color:'green'}}>3</i>
            <i className="fa fa-superpowers" style={{color:'red'}}>4</i>
            <i className="fa fa-superpowers" style={{color:'black'}}>5</i>
            <i className="fa fa-superpowers" style={{color:'gold'}}>1</i>
          </div>
          <div className="col-sm-3">
            Persistent Gems: 
            <i className="fa fa-anchor" style={{color:'gray'}}>1</i>
            <i className="fa fa-anchor" style={{color:'blue'}}>2</i>
            <i className="fa fa-anchor" style={{color:'green'}}>3</i>
            <i className="fa fa-anchor" style={{color:'red'}}>4</i>
            <i className="fa fa-anchor" style={{color:'black'}}>5</i>
          </div>
          <div className="col-sm-3">
            Cards Reserved: 2
          </div>
        </Panel>
      </div>
    )
  }
}

export default PlayerItems;