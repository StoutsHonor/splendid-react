import React, {Component} from 'react';
import {Panel, ButtonGroup, Button} from 'react-bootstrap';

class CoinsDisplay extends Component {
  constructor(props) {
    super(props);
    this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
    this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
    this.updateSelectedCoins = this.updateSelectedCoins.bind(this);
    this.state = {
      showButtons: false,
      selectedCoins: []
    }
  }

  toggleButtonsOn() {
    console.log('clicked')
    this.props.isPlayerTurn ? this.setState({showButtons: true}) : null;
  }

  toggleButtonsOff() {
    this.setState({selectedCoins: []});
    this.setState({showButtons: false});
  }

  updateSelectedCoins(color) {
    let coins = this.state.selectedCoins;
    const duplicateCheck = (a) => {
      for(let i = 0; i < a.length; i++) {
        for(let x = i; x < a.length; x++) {
          if(x !== i && a[x] === a[i]) {
            return true
          }
        }
        return false
      }
    }
    if(coins.length < 3 && !duplicateCheck(coins)) {
      if(!coins.includes(color) || coins.length < 2) {
        this.setState({selectedCoins: coins.concat(color)});
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('gray');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}/>}>
            {this.props.whiteCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('blue');
            }} 
            className="col-sm-2 text-center"
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}/>}
            bsStyle="primary">
            {this.props.blueCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('green');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'green'}}/>}
            bsStyle="success">
            {this.props.greenCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('red');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'red'}}/>}
            bsStyle="danger">
            {this.props.redCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('black');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'black'}}/>} 
            bsStyle="default">
            {this.props.blackCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => alert("To collect a Gold Coin, please reserve a Card")} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}/>}
            bsStyle="warning">
            {this.props.goldCoins}
          </Panel>
        </div>
        { this.state.selectedCoins.length > 0 ?
          <div className="text-center">
            {this.state.selectedCoins.map((value, key) => {
              return <i className="fa fa-bandcamp fa-4x" style={{color: value}} key={key}/>
            })}
          </div>: null
        }
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