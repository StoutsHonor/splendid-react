import React, {Component} from 'react';

import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';

export default class GameScreen extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        whiteCoins: 7,
        blueCoins: 7,
        greenCoins: 7,
        redCoins: 7,
        blackCoins: 7,
        goldCoins: 5,
        levelOneCards: [],
        levelTwoCards: [],
        levelThreeCards: []
      }
    }
  
    render() {
      return (
        <div>
          <CardsDisplay 
            levelOneCards={this.state.levelOneCards} 
            levelTwoCards={this.state.levelTwoCards} 
            levelThreeCards={this.state.levelThreeCards}
          />
          <CoinsDisplay
            whiteCoins={this.state.whiteCoins}
            blueCoins={this.state.blueCoins}
            greenCoins={this.state.greenCoins}
            redCoins={this.state.redCoins}
            blackCoins={this.state.blackCoins}
            goldCoins={this.state.goldCoins}
          />
          <PlayerItems/>
          <GameButtons/>
        </div>
      )
    }
  }