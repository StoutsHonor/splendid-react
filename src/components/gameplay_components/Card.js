import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.convertColor = this.convertColor.bind(this);
    this.convertStyle = this.convertStyle.bind(this);
  }

  convertColor(color) {
    if(color === 'white') { return "#dcdcdc";}
    if(color === 'blue') { return "#b0e0e6";}
    if(color === 'green') {return "#3cb371";}
    if(color === 'red') {return "#FFE4E1";}
    if(color === 'black') { return "#696969";}
    return color;
  }

  convertStyle(style) {
    if(style === 'white' || style ==='black') { return 'default'}
    if(style === 'blue') { return 'primary'}
    if(style === 'green') { return 'success'}
    if(style === 'red') { return 'danger'}
  }

  render() {
    return (
      <Panel className='col-sm-2'
        onClick={() => {
          this.props.handleClickCard(this.props.level, this.props.index);
        }}
        header={
          <div>
            <i className="fa fa-superpowers fa-3x"/>
            {this.props.card.points ? <i className="fa fa-bolt fa-2x pull-right">{this.props.card.points}</i> : null }
          </div>
        } 
        bsStyle={this.convertStyle(this.props.card.persist)} 
        style={{backgroundColor: this.convertColor(this.props.card.persist), height: 250, marginLeft: 10, cursor: 'pointer'}}>
        <div>
          {this.props.card.white ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{this.props.card.white}</i></div> : null }
          {this.props.card.blue ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{this.props.card.blue}</i></div> : null }
          {this.props.card.green ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{this.props.card.green}</i></div> : null }
          {this.props.card.red ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{this.props.card.red}</i></div> : null }
          {this.props.card.black ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{this.props.card.black}</i></div> : null }
        </div>
      </Panel>
    )
  }
}