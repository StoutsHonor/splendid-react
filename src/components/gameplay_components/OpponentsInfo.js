import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class OpponentsInfo extends Component {

  render() {
    return (
      <Panel>
        <div
          className="col-lg-4"
          onClick={this.props.toggleModalDetails}
          style={{cursor:"pointer"}}>
          <div className="row">Player 2:</div>
          <div className="row"><i className="fa fa-bolt fa-2x">0</i></div>
          <div className="row">
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'black'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'#DAA520'}}>0</i>
          </div>
          <div className="row">
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'black'}}>0</i>
          </div>
          <div className="row"><i className="fa fa-lock fa-2x">0</i></div>
        </div>

        <div
          className="col-lg-4"
          onClick={this.props.toggleModalDetails}
          style={{cursor:"pointer"}}>
          <div className="row">Player 3:</div>
          <div className="row"><i className="fa fa-bolt fa-2x">0</i></div>
          <div className="row">
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'black'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'#DAA520'}}>0</i>
          </div>
          <div className="row">
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'black'}}>0</i>
          </div>
          <div className="row"><i className="fa fa-lock fa-2x">0</i></div>
        </div>

        <div
          className="col-lg-4"
          onClick={this.props.toggleModalDetails}
          style={{cursor:"pointer"}}>
          <div className="row">Player 4:</div>
          <div className="row"><i className="fa fa-bolt fa-2x">0</i></div>
          <div className="row">
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'black'}}>0</i>
            <i className="fa fa-bandcamp fa-2x col-sm-2" style={{color:'#DAA520'}}>0</i>
          </div>
          <div className="row">
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'gray'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'blue'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'green'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'red'}}>0</i>
            <i className="fa fa-eercast fa-2x col-sm-2" style={{color:'black'}}>0</i>
          </div>
          <div className="row"><i className="fa fa-lock fa-2x">0</i></div>
        </div>
      </Panel>
    )
  }
}

export default OpponentsInfo;