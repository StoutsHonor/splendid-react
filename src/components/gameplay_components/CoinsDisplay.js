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
    this.props.isPlayerTurn ? this.setState({showButtons: true}) : null;
  }

  toggleButtonsOff() {
    this.props.isPlayerTurn ? this.setState({showButtons: false}) : null;
  }

  render() {
    return (
      <div>
        <div>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}/>}>
            {this.props.whiteCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center"
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}/>}
            sStyle="primary">
            {this.props.blueCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'green'}}/>}
            bsStyle="success">
            {this.props.greenCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'red'}}/>}            bsStyle="danger">
            {this.props.redCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'black'}}/>} 
            bsStyle="default">
            {this.props.blackCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={this.toggleButtonsOn} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}/>}
            bsStyle="warning">
            {this.props.goldCoins}
          </Panel>
        </div>
        
        { this.state.showButtons && this.props.isPlayerTurn ?
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