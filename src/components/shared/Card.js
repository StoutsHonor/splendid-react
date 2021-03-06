import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { ColorSchemesConsumer as Consumer } from '../../contexts/ColorSchemes';

export default class Card extends Component {

  render() {
    let persistColor = this.props.card.persist;
    if(this.props.card.persist === "white") {persistColor = "gray"}
    return (
      <Consumer>
        {store => {
          const { convertColor, convertStyle } = store.actions;
          return (
            <Panel className={this.props.className}
              onClick={() => {
                if(this.props.level !== "Bought") {
                  this.props.handleClickCard(this.props.level, this.props.index);
                }
              }}
              header={
                <div>
                  <i className="fa fa-eercast fa-3x" style={{color: persistColor}}/>
                  {this.props.card.points && <i className="fa fa-bolt fa-2x pull-right" style={{color: '#DAA520'}}>{this.props.card.points}</i>}
                </div>
              }
              bsStyle={convertStyle(this.props.card.persist)}
              style={{backgroundColor: convertColor(this.props.card.persist), height: 250, marginLeft: 10, cursor: 'pointer'}}>
              <div>
                {this.props.card.white && <div><i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{this.props.card.white}</i></div>}
                {this.props.card.blue && <div><i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{this.props.card.blue}</i></div>}
                {this.props.card.green && <div><i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{this.props.card.green}</i></div>}
                {this.props.card.red && <div><i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{this.props.card.red}</i></div>}
                {this.props.card.black && <div><i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{this.props.card.black}</i></div>}
              </div>
            </Panel>
          )
        }}
      </Consumer>
    )
  }
}