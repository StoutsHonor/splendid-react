import React, {Component} from 'react';
import {Panel, ButtonGroup, Button} from 'react-bootstrap';
import ModalCoin from '../modals/ModalCoin';

class CoinsDisplay extends Component {
  constructor(props) {
    super(props);
    this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
    this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
    this.toggleModalCoin = this.toggleModalCoin.bind(this);
    this.updateSelectedCoins = this.updateSelectedCoins.bind(this);
    this.updateExchangeCoins = this.updateExchangeCoins.bind(this);
    this.removeSelectedCoin = this.removeSelectedCoin.bind(this);
    this.submitExchangeCoins = this.submitExchangeCoins.bind(this);
    this.state = {
      showButtons: false,
      showModalCoin: false,
      selectedCoins: [],
      selectedCoinsExchange: []
    }
  }

  toggleButtonsOn() {
    if(this.props.isPlayerTurn) {this.setState({showButtons: true})};
  }

  toggleButtonsOff() {
    this.setState({selectedCoins: []});
    this.setState({selectedCoinsExchange: []});
    this.setState({showButtons: false});
  }

  toggleModalCoin() {
    this.setState({showModalCoin: !this.state.showModalCoin});
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
    //prevents player from picking up coin if there are no coins of that color
    if(!this.props.coins[colorIndex] && coins.length === 0){this.setState({showButtons: false}); return;}
    //prevents player from picking up 2 coins of the same color if colored coin is less than 3
    if(this.props.coins[colorIndex] <= 2 && coins.includes(color)){return;}
    //prevents player from picking up another coin of the same color if they already have 2 coins
    if(coins.length < 3 && !duplicateCheck(coins) && this.props.coins[colorIndex]) {
      if(!coins.includes(color) || coins.length < 2) {
        this.setState({selectedCoins: coins.concat(color)});
      }
    }
  }

  updateExchangeCoins(color) {
    let coinObj = {[color]: 1};
    let exchange = this.state.selectedCoinsExchange;
    exchange.forEach(coin => {
      if(coinObj[coin]) {
        coinObj[coin]++;
      } else {
        coinObj[coin] = 1;
      }
    });
    console.log(coinObj, 'coin object')
    if(this.props.costCalculator(this.props.playerCoins, coinObj).total === 0 && exchange.length < this.state.selectedCoins.length) {
      console.log('ABLE to exchange');
      let coins = this.state.selectedCoinsExchange.concat(color);
      this.setState({selectedCoinsExchange: coins});
    }
  }

  removeSelectedCoin(index, name) {
    let coins = this.state[name];
    coins.splice(index, 1);
    this.setState({[name]: coins});
    if(this.state.selectedCoins.length === 0) {
      this.toggleButtonsOff();
    }
  }

  submitExchangeCoins() {
    if(this.props.coinTotal + this.state.selectedCoins.length - this.state.selectedCoinsExchange.length > 10) {
      this.props.displayNotificationMessage("You Cannot Have More Than 10 Coins Total");
      return;
    }
    let selected = {};
    let exchange = {};
    this.state.selectedCoins.forEach(coin => {
      if(selected[coin]) {
        selected[coin]++;
      } else {
        selected[coin] = 1;
      }
    })
    this.state.selectedCoinsExchange.forEach(coin => {
      if(exchange[coin]) {
        exchange[coin]++;
      } else {
        exchange[coin] = 1;
      }
    })
    this.props.adjustBankCoins(selected, 'subtract');
    this.props.adjustPlayerCoins(selected, 'add');
    this.props.adjustBankCoins(exchange, 'add');
    this.props.adjustPlayerCoins(exchange, 'subtract');
    this.toggleButtonsOff();
    this.props.checkNobles();
    this.props.displayNotificationMessage('You Exchanged Coins!');
  }

  render() {
    console.log(this.props.coinTotal, 'total')
    console.log(this.state.selectedCoins, 'selected')
    console.log(this.state.selectedCoinsExchange, 'exchange')
    return (
      <div>
        <div>
          <ModalCoin
            toggleModalCoin={this.toggleModalCoin}
            showModalCoin={this.state.showModalCoin}
            selectedCoins={this.state.selectedCoins}
            playerCoins={this.props.playerCoins}
          />
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
            onClick={() => this.props.displayNotificationMessage("You must reserve a Card collect a Gold Coin")} 
            className="col-sm-2 text-center" 
            header={<i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}}/>}
            bsStyle="warning">
            {this.props.coins[5]}
          </Panel>
        </div>
        { this.state.selectedCoins.length ?
          <div className="text-center">
            <div>
              Coins to Pick Up:
            </div>
            <div className="text-center">
              {this.state.selectedCoins.map((value, index) => {
                if(value === 'white') { value = 'gray'}
                return <i className="fa fa-bandcamp fa-4x" style={{color: value}} onClick={() => {this.removeSelectedCoin(index, 'selectedCoins')}} key={index}/>
              })}
            </div>
          </div>: null
        }
        { this.props.coinTotal + this.state.selectedCoins.length > 10 ?
          <div className="text-center">
            <div>Your Coins:</div>
            <div style={{cursor: "pointer"}}>
              <i className="fa fa-bandcamp fa-2x" style={{color:'gray'}} onClick={() => this.updateExchangeCoins('white')}>{this.props.playerCoins.white}</i>
              <i className="fa fa-bandcamp fa-2x" style={{color:'blue'}} onClick={() => this.updateExchangeCoins('blue')}>{this.props.playerCoins.blue}</i>
              <i className="fa fa-bandcamp fa-2x" style={{color:'green'}} onClick={() => this.updateExchangeCoins('green')}>{this.props.playerCoins.green}</i>
              <i className="fa fa-bandcamp fa-2x" style={{color:'red'}} onClick={() => this.updateExchangeCoins('red')}>{this.props.playerCoins.red}</i>
              <i className="fa fa-bandcamp fa-2x" style={{color:'black'}} onClick={() => this.updateExchangeCoins('black')}>{this.props.playerCoins.black}</i>
              <i className="fa fa-bandcamp fa-2x" style={{color:'#DAA520'}} onClick={() => this.updateExchangeCoins('gold')}>{this.props.playerCoins.gold}</i>
            </div>
            <div>
              Coins to Give Back:
            </div>
            <div className="text-center">
              {this.state.selectedCoinsExchange.map((value, index) => {
                if(value === 'white') { value = 'gray'}
                if(value === 'gold') { value = '#DAA520'}
                return <i className="fa fa-bandcamp fa-4x" style={{color: value}} onClick={() => {this.removeSelectedCoin(index, 'selectedCoinsExchange')}} key={index}/>
              })}
            </div>
          </div> : null
        }
        { this.state.showButtons && this.props.isPlayerTurn ?
          <div className="text-center">
            <ButtonGroup>
              <Button 
                bsClass="btn btn-w-m btn-danger"
                onClick={this.toggleButtonsOff}>
                Reset Selection
              </Button>
              {this.props.coinTotal + this.state.selectedCoins.length <= 10 ? 
                <Button
                  bsClass="btn btn-w-m btn-success"
                  onClick={ () => {
                    if(this.props.coinTotal + this.state.selectedCoins.length > 10) {
                      this.toggleButtonsOff();
                      this.props.displayNotificationMessage("You cannot have more than 10 coins total!");
                    } else {
                      let coinObj = {};
                      this.state.selectedCoins.forEach(coin => {
                        if(coinObj[coin]) {
                          coinObj[coin]++;
                        } else {
                          coinObj[coin] = 1;
                        }
                      })
                      this.props.adjustBankCoins(coinObj, 'subtract');
                      this.props.adjustPlayerCoins(coinObj, 'add');
                      this.toggleButtonsOff();
                      this.props.checkNobles();
                      this.props.displayNotificationMessage('You Collected Coins!');
                    }
                  }}>
                  Confirm Selection
                </Button> :
                <Button bsClass="btn btn-w-m btn-warning" onClick={this.submitExchangeCoins}>
                  Exchange Coins
                </Button>
              }
            </ButtonGroup>
          </div> : null
        }
      </div>
    )
  }
}

export default CoinsDisplay;