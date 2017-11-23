import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import Card from './Card';

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="text-center">
        <Panel header="Level 3 Cards">
          {this.props.levelThreeCards ?
            this.props.levelThreeCards.slice(0,4).map((card, key) => { 
              return <Card card={card} key={key} index={key} handleClickCard={this.props.handleClickCard} level={3}/>
            }) : null }
        </Panel>

        <Panel header="Level 2 Cards">
          {this.props.levelTwoCards ?
            this.props.levelTwoCards.slice(0,4).map((card, key) => { 
              return <Card card={card} key={key} index={key} handleClickCard={this.props.handleClickCard} level={2}/>
            }) : null }
        </Panel>
        
        <Panel header="Level 1 Cards">
          {this.props.levelOneCards ?
            this.props.levelOneCards.slice(0,4).map((card, key) => { 
              return <Card card={card} key={key} index={key} handleClickCard={this.props.handleClickCard} level={1}/>
            }) : null }
        </Panel>
      </div>
    )
  }
}

export default CardsDisplay;