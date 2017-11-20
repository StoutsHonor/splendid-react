import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class PlayerItems extends Component {

  render() {
    return (
      <div>
        <Panel onClick={this.props.toggleModalDetails} style={{cursor:"pointer"}}>
          <div className="col-sm-3">
            <i className="fa fa-bolt"/> Points: 0
          </div>
          <div className="col-sm-3">
            Buying Power: 
            <i className="fa fa-bandcamp" style={{color:'gray'}}>0</i>
            <i className="fa fa-bandcamp" style={{color:'blue'}}>0</i>
            <i className="fa fa-bandcamp" style={{color:'green'}}>0</i>
            <i className="fa fa-bandcamp" style={{color:'red'}}>0</i>
            <i className="fa fa-bandcamp" style={{color:'black'}}>0</i>
            <i className="fa fa-bandcamp" style={{color:'#DAA520'}}>0</i>
          </div>
          <div className="col-sm-3">
            Persistent Gems: 
            <i className="fa fa-certificate" style={{color:'gray'}}>0</i>
            <i className="fa fa-certificate" style={{color:'blue'}}>0</i>
            <i className="fa fa-certificate" style={{color:'green'}}>0</i>
            <i className="fa fa-certificate" style={{color:'red'}}>0</i>
            <i className="fa fa-certificate" style={{color:'black'}}>0</i>
          </div>
          <div className="col-sm-3">
            <i className="fa fa-lock"/> Cards Reserved: 0
          </div>
        </Panel>
      </div>
    )
  }
}

export default PlayerItems;