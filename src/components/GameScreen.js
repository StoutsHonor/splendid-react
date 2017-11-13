import React, {Component} from 'react';

import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';

export default class GameScreen extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        whiteCoins: 0,
        blueCoins: 0,
        greenCoins: 0,
        redCoins: 0,
        blackCoins: 0,
        goldCoins: 5,
        LvlOneCards: [],
        LvlTwoCards: [],
        LvlThreeCards: []
      }
    }
  
    render() {
      return (
        <div>
          <CardsDisplay/>
          <CoinDisplay/>
          <PlayerItems/>
          <GameButtons/>
        </div>
      )
    }
  }