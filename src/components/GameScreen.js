import React, {Component} from 'react';
import {} from 'react-bootstrap';
import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerItems from './gameplay_components/PlayerItems';
import OpponentsInfo from './gameplay_components/OpponentsInfo';
import ModalDetails from './modals/ModalDetails';
import ModalCard from './modals/ModalCard';
import nobles from '../json_files/nobles';
import levelOneCards from '../json_files/levelOneCards';
import levelTwoCards from '../json_files/levelTwoCards';
import levelThreeCards from '../json_files/levelThreeCards';
import Random from 'react-randomizer';

export default class GameScreen extends Component {
  
    constructor(props) {
      super(props);
      this.toggleModalDetails = this.toggleModalDetails.bind(this);
      this.toggleModalCard = this.toggleModalCard.bind(this);
      this.adjustCoins = this.adjustCoins.bind(this);
      this.handleClickCard = this.handleClickCard.bind(this);
      this.state = {
        players: 4, isPlayerTurn: true,
        showModalDetails: false, showModalCard: false,
        whiteCoins: 0, blueCoins: 0, greenCoins: 0, redCoins: 0, blackCoins: 0, goldCoins: 5,
        nobles: [],
        levelOneCards: [], levelTwoCards: [], levelThreeCards: [],
        selectedCard: {}
      }
    }

    componentDidMount() {
      this.setState({nobles: (Random.randomizeArray(nobles)).slice(0, this.state.players + 1)});
      this.setState({levelOneCards: Random.randomizeArray(levelOneCards)});
      this.setState({levelTwoCards: Random.randomizeArray(levelTwoCards)});
      this.setState({levelThreeCards: Random.randomizeArray(levelThreeCards)});
      let coin;
      if(this.state.players === 2) {
        coin = 4;
      } else if(this.state.players === 3) {
        coin = 5;
      } else {
        coin = 7;
      }
      this.setState({
        whiteCoins: 0, 
        blueCoins: coin,
        greenCoins: coin,
        redCoins: coin,
        blackCoins: coin
      })
    }

    toggleModalDetails() {
      this.setState({showModalDetails: !this.state.showModalDetails});
    }

    toggleModalCard() {
      this.setState({showModalCard: !this.state.showModalCard});
    }

    adjustCoins() {
      console.log('adjust coins function called');
    }

    handleClickCard(level, index) {
      if(level === 1) {
        this.setState({selectedCard: this.state.levelOneCards[index]});
      } else if(level === 2) {
        this.setState({selectedCard: this.state.levelTwoCards[index]});
      } else {
        this.setState({selectedCard: this.state.levelThreeCards[index]});
      }
      this.toggleModalCard();
    }
  
    render() {
      console.log(this.state.selectedCard, 'selected')
      return (
        <div>
          <ModalDetails
            showModalDetails={this.state.showModalDetails}
            toggleModalDetails={this.toggleModalDetails}
          />
          <ModalCard
            showModalCard={this.state.showModalCard}
            toggleModalCard={this.toggleModalCard}
          />
          <PlayerItems toggleModalDetails={this.toggleModalDetails}/>
          <OpponentsInfo toggleModalDetails={this.toggleModalDetails}/>
          <CoinsDisplay
            isPlayerTurn = {this.state.isPlayerTurn}
            adjustCoins={this.adjustCoins}
            coins={[this.state.whiteCoins,
              this.state.blueCoins,
              this.state.greenCoins,
              this.state.redCoins,
              this.state.blackCoins,
              this.state.goldCoins
            ]}
          />
          <CardsDisplay
            toggleModalCard={this.toggleModalCard}
            handleClickCard={this.handleClickCard} 
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