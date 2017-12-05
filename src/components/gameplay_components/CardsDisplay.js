import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import Card from './Card';

class CardsDisplay extends Component {

  render() {
    return (
      <div className="text-center">
        <Panel header="Level 3 Cards">
          {this.props.levelThreeCards ?
            this.props.levelThreeCards.slice(0,4).map((card, index) => { 
              return <Card
                className={'col-sm-2'}
                card={card} 
                key={index} 
                index={index} 
                level={'Three'}
                handleClickCard={this.props.handleClickCard} 
                convertColor={this.props.convertColor}
                convertStyle={this.props.convertStyle}
              />
            }) : null }
        </Panel>

        <Panel header="Level 2 Cards">
          {this.props.levelTwoCards ?
            this.props.levelTwoCards.slice(0,4).map((card, index) => { 
              return <Card 
                className={'col-sm-2'}
                card={card} 
                key={index} 
                index={index}
                level={'Two'}
                handleClickCard={this.props.handleClickCard} 
                convertColor={this.props.convertColor}
                convertStyle={this.props.convertStyle}
              />
            }) : null }
        </Panel>
        
        <Panel header="Level 1 Cards">
          {this.props.levelOneCards ?
            this.props.levelOneCards.slice(0,4).map((card, index) => { 
              return <Card 
                className={'col-sm-2'}
                card={card} 
                key={index} 
                index={index}
                level={'One'}
                handleClickCard={this.props.handleClickCard} 
                convertColor={this.props.convertColor}
                convertStyle={this.props.convertStyle}
              />
            }) : null }
        </Panel>
      </div>
    )
  }
}

export default CardsDisplay;