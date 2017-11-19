import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';
import OpponentsInfo from './gameplay_components/OpponentsInfo';
import nobles from '../json_files/nobles';
import levelOneCards from '../json_files/levelOneCards';
import levelTwoCards from '../json_files/levelTwoCards';
import levelThreeCards from '../json_files/levelThreeCards';
import Random from 'react-randomizer';

export default class GameScreen extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        showModalDetails: false,
        whiteCoins: 0,
        blueCoins: 0,
        greenCoins: 0,
        redCoins: 0,
        blackCoins: 0,
        goldCoins: 5,
        nobles: [],
        levelOneCards: [],
        levelTwoCards: [],
        levelThreeCards: [],
        players: 4
      }
    }

    componentDidMount() {
      this.setState({nobles: (Random.randomizeArray(nobles)).slice(0, this.state.players + 1)});
      this.setState({levelOneCards: Random.randomizeArray(levelOneCards)});
      this.setState({levelOneCards: Random.randomizeArray(levelTwoCards)});
      this.setState({levelOneCards: Random.randomizeArray(levelThreeCards)});
      let coin;
      if(this.state.players === 2) {
        coin = 4;
      } else if(this.state.players === 3) {
        coin = 5;
      } else {
        coin = 7;
      }
      this.setState({
        whiteCoins: coin, 
        blueCoins: coin,
        greenCoins: coin,
        redCoins: coin,
        blackCoins: coin
      })
    }
  
    render() {
      return (
        <div>
          {this.state.showModalDetails ?
            <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
      
            <Modal.Body>
              One fine body...
            </Modal.Body>
      
            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
      
          </Modal.Dialog>
          : null
          }
          <GameButtons/>
          <PlayerItems/>
          <OpponentsInfo/>
          <CoinsDisplay
            whiteCoins={this.state.whiteCoins}
            blueCoins={this.state.blueCoins}
            greenCoins={this.state.greenCoins}
            redCoins={this.state.redCoins}
            blackCoins={this.state.blackCoins}
            goldCoins={this.state.goldCoins}
          />
          <CardsDisplay 
            levelOneCards={this.state.levelOneCards} 
            levelTwoCards={this.state.levelTwoCards} 
            levelThreeCards={this.state.levelThreeCards}
          />
          <NoblesDisplay nobles={this.state.nobles}/>
          <GameButtons/>
        </div>
      )
    }
  }