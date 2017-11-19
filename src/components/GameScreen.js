import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';
import OpponentsInfo from './gameplay_components/OpponentsInfo';
import ModalDetails from './modals/ModalDetails';
import nobles from '../json_files/nobles';
import levelOneCards from '../json_files/levelOneCards';
import levelTwoCards from '../json_files/levelTwoCards';
import levelThreeCards from '../json_files/levelThreeCards';
import Random from 'react-randomizer';

export default class GameScreen extends Component {
  
    constructor(props) {
      super(props);
      this.toggleModalDetails = this.toggleModalDetails.bind(this);
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

    toggleModalDetails() {
      this.setState({showModalDetails: !this.state.showModalDetails});
    }
  
    render() {
      return (
        <div>
          <ModalDetails
            showModalDetails={this.state.showModalDetails}
            toggleModalDetails={this.toggleModalDetails}
          />
          <GameButtons/>
          <PlayerItems toggleModalDetails={this.toggleModalDetails}/>
          <OpponentsInfo toggleModalDetails={this.toggleModalDetails}/>
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