import React, {Component} from 'react';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';
import nobles from './json_files/nobles';
import levelOneCards from './json_files/levelOneCards';
import levelTwoCards from './json_files/levelOneCards';
import levelThreeCards from './json_files/levelOneCards';
import Random from 'react-randomizer';

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
    }
  
    render() {
      return (
        <div>
          <NoblesDisplay nobles={this.state.nobles}/>
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