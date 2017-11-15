import React, {Component} from 'react';

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
      <div>
        Cards Display
      </div>
    )
  }
}

export default CardsDisplay;