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

  updateSelectedCoins(color, colorIndex) {
    const coins = this.state.selectedCoins;
    const duplicateCheck = (a) => {
      for(let i = 0; i < a.length; i++) {
        for(let x = i; x < a.length; x++) {
          if(x !== i && a[x] === a[i]) {
            return true;
          }
        }
        return false;
      }
    }
    console.log(this.props.coins[colorIndex], 'coins remaing')
    console.log(coins, 'current coin')
    if(this.props.coins[colorIndex] <= 2) {
      if(coins.includes(color)) {return;}
      else if(color === 'white' && coins.includes('gray')) {return;}
    }
    if(coins.length < 3 && !duplicateCheck(coins) && this.props.coins[colorIndex]) {
      if(!coins.includes(color) || coins.length < 2) {
        let displayColor = color;
        if(color === 'white') {displayColor = 'gray'}
        this.setState({selectedCoins: coins.concat(displayColor)});
      }
    }
  }

  render() {
    console.log(this.props.coins, 'coins')
    let selected;
    this.state.selectedCoins.length > 0 ? selected = this.state.selectedCoins.join(' ').replace('white', 'gray').split(' ') : null;
    return (
      <div>
        <div>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('white', 0);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}/>}>
            {this.props.coins[0]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('blue', 1);
            }} 
            className="col-sm-2 text-center"
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}/>}
            bsStyle="primary">
            {this.props.coins[1]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('green', 2);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'green'}}/>}
            bsStyle="success">
            {this.props.coins[2]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('red', 3);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'red'}}/>}
            bsStyle="danger">
            {this.props.coins[3]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn();
              this.updateSelectedCoins('black', 4);
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'black'}}/>} 
            bsStyle="default">
            {this.props.coins[4]}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => alert("To collect a Gold Coin, please reserve a Card")} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}/>}
            bsStyle="warning">
            {this.props.coins[5]}
          </Panel>
        </div>
        { selected ?
          <div className="text-center">
            {selected.map((value, key) => {
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