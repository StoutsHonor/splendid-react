import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class CoinsDisplay extends Component {

  render() {
    return (
      <div>
        <Panel className="col-sm-2 text-center" header="White">{this.props.whiteCoins}</Panel>
        <Panel className="col-sm-2 text-center" header="Blue" bsStyle="primary">{this.props.blueCoins}</Panel>
        <Panel className="col-sm-2 text-center" header="Green" bsStyle="success">{this.props.greenCoins}</Panel>
        <Panel className="col-sm-2 text-center" header="Red" bsStyle="danger">{this.props.redCoins}</Panel>
        <Panel className="col-sm-2 text-center bg-inverse" header="Black">{this.props.blackCoins}</Panel>
        <Panel className="col-sm-2 text-center" header="Gold" bsStyle="warning">{this.props.goldCoins}</Panel>
      </div>
    )
  }
}

export default CoinsDisplay;