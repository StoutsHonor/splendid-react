import React, {Component} from 'react';
import {Panel, Grid, Row, Col, Image} from 'react-bootstrap';

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
          <span className="col-lg-3">level 3 card</span>
          <span className="col-lg-3">level 3 card</span>
          <span className="col-lg-3">level 3 card</span>
          <span className="col-lg-3">level 3 card</span>
      </div>
    )
  }
}

export default CardsDisplay;