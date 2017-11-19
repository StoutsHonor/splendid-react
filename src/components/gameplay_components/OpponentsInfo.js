import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class OpponentsInfo extends Component {

  render() {
    return (
      <Panel>
        <div className="col-sm-4">
          <div className="row">Player 2:</div>
          <div className="row"><i className="fa fa-bolt">6</i></div>
          <div className="row">
            <i className="fa fa-bandcamp col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'black'}}>5</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'#DAA520'}}>1</i>
          </div>
          <div className="row">
            <i className="fa fa-certificate col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'black'}}>5</i>
          </div>
          <div className="row"><i className="fa fa-lock">2</i></div>
        </div>

        <div className="col-sm-4">
          <div className="row">Player 3:</div>
          <div className="row"><i className="fa fa-bolt">6</i></div>
          <div className="row">
            <i className="fa fa-bandcamp col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'black'}}>5</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'#DAA520'}}>1</i>
          </div>
          <div className="row">
            <i className="fa fa-certificate col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'black'}}>5</i>
          </div>
          <div className="row"><i className="fa fa-lock">2</i></div>
        </div>

        <div className="col-sm-4">
          <div className="row">Player 4:</div>
          <div className="row"><i className="fa fa-bolt">6</i></div>
          <div className="row">
            <i className="fa fa-bandcamp col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'black'}}>5</i>
            <i className="fa fa-bandcamp col-sm-1" style={{color:'#DAA520'}}>1</i>
          </div>
          <div className="row">
            <i className="fa fa-certificate col-sm-1" style={{color:'gray'}}>1</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'blue'}}>2</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'green'}}>3</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'red'}}>4</i>
            <i className="fa fa-certificate col-sm-1" style={{color:'black'}}>5</i>
          </div>
          <div className="row"><i className="fa fa-lock">2</i></div>
        </div>
      </Panel>
    )
  }
}

export default OpponentsInfo;