import React, {Component} from 'react';
import {Panel, ButtonGroup, Button} from 'react-bootstrap';

class CoinsDisplay extends Component {
  constructor(props) {
    super(props);
    this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
    this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
    this.state = {
      showButtons: false
    }
  }

  toggleButtonsOn() {
    this.setState({showButtons: true});
  }

  toggleButtonsOff() {
    this.setState({showButtons: false});
  }

  render() {
    return (
      <div>
        <div>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="White">{this.props.whiteCoins}
          </Panel>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="Blue" bsStyle="primary">{this.props.blueCoins}
          </Panel>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="Green" bsStyle="success">{this.props.greenCoins}
          </Panel>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="Red" bsStyle="danger">{this.props.redCoins}
          </Panel>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="Black" bsStyle="default">{this.props.blackCoins}
          </Panel>
          <Panel
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header="Gold" bsStyle="warning">{this.props.goldCoins}
          </Panel>
        </div>
        { this.state.showButtons ?
          <div className="text-center">
            <ButtonGroup>
              <Button 
                bsClass="btn btn-w-m btn-danger"
                onClick={this.toggleButtonsOff}>
                Reset Selection
              </Button>
              <Button
                bsClass="btn btn-w-m btn-success"
                onClick={this.toggleButtonsOff}>
                Confirm Selection
              </Button>
            </ButtonGroup>
          </div> : null
        }
      </div>
    )
  }
}

export default CoinsDisplay;