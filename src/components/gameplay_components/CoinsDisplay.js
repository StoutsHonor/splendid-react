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
    this.props.isPlayerTurn ? this.setState({showButtons: true}) : null;
  }

  toggleButtonsOff() {
    this.props.isPlayerTurn ? this.setState({showButtons: false}) : null;
  }

  updateSelectedCoins(color) {
    let collect = true;
    if(this.state.selectedCoins.length < 3) {
      //taking 2 coins of same color
      if(collect) {
        if(this.state.selectedCoins.includes(color) && collect) {
          collect = false;
        }
      }
      this.setState({selectedCoins: this.state.selectedCoins.concat(color)});
    }
  }

  render() {
    console.log(this.state.selectedCoins, 'selected coins')
    return (
      <div>
        <div>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn;
              this.updateSelectedCoins('white');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}/>}>
            {this.props.whiteCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn;
              this.updateSelectedCoins('blue');
            }} 
            className="col-sm-2 text-center"
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}/>}
            bsStyle="primary">
            {this.props.blueCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn;
              this.updateSelectedCoins('green');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'green'}}/>}
            bsStyle="success">
            {this.props.greenCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn;
              this.updateSelectedCoins('red');
            }} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'red'}}/>}
            bsStyle="danger">
            {this.props.redCoins}
          </Panel>
          <Panel
            style={{cursor:'pointer'}}
            onClick={() => { this.toggleButtonsOn;
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
          <div>
            {this.state.selectedCoins.map((value, key) => {
              return <i className="fa fa-bandcamp fa-2x" style={{color: value}} key={key}/>
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