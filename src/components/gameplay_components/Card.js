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
    if(style === 'white' || style ==='black') { return 'gray'}
    if(style === 'blue') { return 'primary'}
    if(style === 'green') { return 'success'}
    if(style === 'red') { return 'danger'}
  }

  render() {
    return (
      <Panel className='col-sm-3' 
        header={
          <div>
            <i className="fa fa-superpowers fa-3x"/>
            <span className='pull-right'>{this.props.card.points}</span>
          </div>
        } 
        bsStyle={this.convertStyle(this.props.card.persist)} 
        style={{backgroundColor: this.convertColor(this.props.card.persist), height: 250}}>
        <div>
          {this.props.card.white? <div><i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{this.props.card.white}</i></div> : null }
          {this.props.card.blue? <div><i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{this.props.card.blue}</i></div> : null }
          {this.props.card.green? <div><i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{this.props.card.green}</i></div> : null }
          {this.props.card.red? <div><i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{this.props.card.red}</i></div> : null }
          {this.props.card.black? <div><i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{this.props.card.black}</i></div> : null }
        </div>
      </Panel>
    )
  }
}


{/* <div className="card col-md-3" 
  style={{
    width: 175, 
    height: 250, 
    backgroundColor: this.props.card.persist, 
    border: 9, 
    borderColor: 'yellow'
  }}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-block">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Card Content</p>
  </div>
</div> */}