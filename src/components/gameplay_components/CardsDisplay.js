import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';
import Card from './Card';

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.setState({levelOneDisplay: this.props.levelOneCards.slice(0,4)});
    this.setState({levelTwoDisplay: this.props.levelTwoCards.slice(0,4)});
    this.setState({levelThreeDisplay: this.props.levelThreeCards.slice(0,4)});
    console.log('hitting')
  }

  render() {
    console.log(this.props.levelThreeCards, 'level 3 cards')
    return (
      <div className="text-center">
        <Panel header="Level 3 Cards">
          {this.props.levelThreeCards ?
            this.props.levelThreeCards.slice(0,4).map((card, key) => { 
              return <Card className="col-sm-3" card={card} key={key}/>
            }) : null }
        </Panel>

        <Panel header="Level 2 Cards">
          {this.props.levelTwoCards ?
            this.props.levelTwoCards.slice(0,4).map((card, key) => { 
              return <Card className="col-sm-3" card={card} key={key}/>
            }) : null }
        </Panel>
        
        <Panel header="Level ` Cards">
          {this.props.levelOneCards ?
            this.props.levelOneCards.slice(0,4).map((card, key) => { 
              return <Card className="col-sm-3" card={card} key={key}/>
            }) : null }
        </Panel>
      </div>
    )
  }
}

export default CardsDisplay;