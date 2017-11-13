import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class CoinsDisplay extends Component {

  render() {
    return (
      <div>
        <Panel header="White">{this.props.whiteCoins}</Panel>
        <Panel header="Blue" bsStyle="success">{this.props.blueCoins}</Panel>
        <Panel header="Green" bsStyle="primary">{this.props.greenCoins}</Panel>
        <Panel header="Red" bsStyle="danger">{this.props.redCoins}</Panel>
        <Panel header="Black" bsStyle="muted">{this.props.blackCoins}</Panel>
        <Panel header="Gold" bsStyle="warning">{this.props.goldCoins}</Panel>
      </div>
    )
  }
}

export default CoinsDisplay;