import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';

class CardsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelOneDisplay: [],
      levelTwoDisplay: [],
      levelThreeDisplay: []
    }
  }

  componentDidMount() {
    this.setState({levelOneDisplay: this.props.levelOneCards.splice(0,4)});
    this.setState({levelTwoDisplay: this.props.levelTwoCards.splice(0,4)});
    this.setState({levelThreeDisplay: this.props.levelThreeCards.splice(0,4)});
  }

  render() {
    return (
      <div className="text-center">
        <Panel header="Level 3 Cards">
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
        </Panel>
        <Panel header="Level 2 Cards">
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
        </Panel>
        <Panel header="Level 1 Cards">
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
          <span className="col-lg-3"><Image src="http://www.spacecowboys.fr/img/games/splendor/cards/card1.jpg" thumbnail/></span>
        </Panel>
      </div>
    )
  }
}

export default CardsDisplay;