import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class PlayerInfo extends Component {

  render() {
    let info = this.props.playerDetails;
    return (
      <div>
        <Panel onClick={this.props.toggleModalDetails} style={{cursor:"pointer"}}>
          <div className="col-sm-3" style={{fontSize: 18}}>
            <i className="fa fa-bolt fa-2x"/> Points: {info.points}
          </div>
          <div className="col-sm-3">
            <i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{info.coins.white + info.persistColors.white}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{info.coins.blue + info.persistColors.blue}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{info.coins.green + info.persistColors.green}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{info.coins.red + info.persistColors.red}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{info.coins.black + info.persistColors.black}</i>
            <i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}>{info.coins.gold}</i>
          </div>
          <div className="col-sm-3">
            <i className="fa fa-eercast fa-2x" style={{color:'gray'}}>{info.persistColors.white}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'blue'}}>{info.persistColors.blue}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'green'}}>{info.persistColors.green}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'red'}}>{info.persistColors.red}</i>
            <i className="fa fa-eercast fa-2x" style={{color:'black'}}>{info.persistColors.black}</i>
          </div>
          <div className="col-sm-3" style={{fontSize: 18}}>
            <i className="fa fa-lock fa-2x"/> Cards Reserved: {info.reservedCards.length}
          </div>
        </Panel>
      </div>
    )
  }
}

export default PlayerInfo;