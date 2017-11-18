import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class OpponentsInfo extends Component {

  render() {
    return (
      <Panel>
        <div className="col-sm-4">
          <div>Player 2:</div>
          <i className="fa fa-bolt">6</i>
          <div>
            <i className="fa fa-superpowers" style={{color:'gray'}}>1</i>
            <i className="fa fa-superpowers" style={{color:'blue'}}>2</i>
            <i className="fa fa-superpowers" style={{color:'green'}}>3</i>
            <i className="fa fa-superpowers" style={{color:'red'}}>4</i>
            <i className="fa fa-superpowers" style={{color:'black'}}>5</i>
            <i className="fa fa-superpowers" style={{color:'gold'}}>1</i>
          </div>
          <div>
            <i className="fa fa-anchor" style={{color:'gray'}}>1</i>
            <i className="fa fa-anchor" style={{color:'blue'}}>2</i>
            <i className="fa fa-anchor" style={{color:'green'}}>3</i>
            <i className="fa fa-anchor" style={{color:'red'}}>4</i>
            <i className="fa fa-anchor" style={{color:'black'}}>5</i>
          </div>
          <i className="fa fa-lock">2</i>
        </div>
        <div className="col-sm-4">
          <div>Player 3:</div>
          <i className="fa fa-bolt">6</i>
          <div>
            <i className="fa fa-superpowers" style={{color:'gray'}}>1</i>
            <i className="fa fa-superpowers" style={{color:'blue'}}>2</i>
            <i className="fa fa-superpowers" style={{color:'green'}}>3</i>
            <i className="fa fa-superpowers" style={{color:'red'}}>4</i>
            <i className="fa fa-superpowers" style={{color:'black'}}>5</i>
            <i className="fa fa-superpowers" style={{color:'gold'}}>1</i>
          </div>
          <div>
            <i className="fa fa-anchor" style={{color:'gray'}}>1</i>
            <i className="fa fa-anchor" style={{color:'blue'}}>2</i>
            <i className="fa fa-anchor" style={{color:'green'}}>3</i>
            <i className="fa fa-anchor" style={{color:'red'}}>4</i>
            <i className="fa fa-anchor" style={{color:'black'}}>5</i>
          </div>
          <i className="fa fa-lock">2</i>
        </div>
        <div className="col-sm-4">
          <div>Player 4:</div>
          <i className="fa fa-bolt">6</i>
          <div>
            <i className="fa fa-superpowers" style={{color:'gray'}}>1</i>
            <i className="fa fa-superpowers" style={{color:'blue'}}>2</i>
            <i className="fa fa-superpowers" style={{color:'green'}}>3</i>
            <i className="fa fa-superpowers" style={{color:'red'}}>4</i>
            <i className="fa fa-superpowers" style={{color:'black'}}>5</i>
            <i className="fa fa-superpowers" style={{color:'gold'}}>1</i>
          </div>
          <div>
            <i className="fa fa-anchor" style={{color:'gray'}}>1</i>
            <i className="fa fa-anchor" style={{color:'blue'}}>2</i>
            <i className="fa fa-anchor" style={{color:'green'}}>3</i>
            <i className="fa fa-anchor" style={{color:'red'}}>4</i>
            <i className="fa fa-anchor" style={{color:'black'}}>5</i>
          </div>
          <i className="fa fa-lock">2</i>
        </div>
      </Panel>
    )
  }
}

export default OpponentsInfo;