import React, {Component} from 'react';
import {} from 'react-bootstrap';
import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerInfo from './gameplay_components/PlayerInfo';
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
      this.convertColor = this.convertColor.bind(this);
      this.convertStyle = this.convertStyle.bind(this);
      this.state = {
        players: 4, 
        showModalDetails: false, showModalCard: false,
        whiteCoins: 0, blueCoins: 0, greenCoins: 0, redCoins: 0, blackCoins: 0, goldCoins: 5,
        nobles: [],
        levelOneCards: [], levelTwoCards: [], levelThreeCards: [],
        selectedCard: {},
        //player states:
        isPlayerTurn: true,
        playerPoints: 0, 
        playerCards: [],
        playerReservedCards: [],
        playerCoins: {white: 0, blue: 0, green: 0, red: 0, black: 0, gold: 0},
        playerPersistColors: {white: 0, blue: 0, green: 0, red: 0, black: 0},
        playerNobles: []
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

    toggleModalCard() {
      this.setState({showModalCard: !this.state.showModalCard});
    }

    adjustCoins(coins) {
      //created extra control flow for 2 coins of same color, state is not changing fast enough when done one by one
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
      if(duplicateCheck(coins)) {
        let coinState = coins[0] + 'Coins';
        this.setState({[coinState]: this.state[coinState] - 2});
        this.setState(prevState => ({
          playerCoins: {
            ...prevState.playerCoins,
            [coins[0]]: prevState.playerCoins[coins[0]] + 2
          }
        }))
      } else {
        coins.forEach(coin => {
          let coinState = coin + 'Coins';
          this.setState({[coinState]: this.state[coinState] - 1});
          this.setState(prevState => ({
            playerCoins: {
              ...prevState.playerCoins,
              [coin]: prevState.playerCoins[coin] + 1
            }
          }))
        })
      }
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

    convertColor(color) {
      if(color === 'white') { return "#dcdcdc";}
      if(color === 'blue') { return "#b0e0e6";}
      if(color === 'green') {return "#3cb371";}
      if(color === 'red') {return "#FFE4E1";}
      if(color === 'black') { return "#696969";}
      return color;
    }
  
    convertStyle(style) {
      if(style === 'white' || style ==='black') { return 'default'}
      if(style === 'blue') { return 'primary'}
      if(style === 'green') { return 'success'}
      if(style === 'red') { return 'danger'}
    }
  
    render() {
      return (
        <div>
          <ModalDetails
            showModalDetails={this.state.showModalDetails}
            toggleModalDetails={this.toggleModalDetails}
            playerDetails={{
              points: this.state.player,
              cards: this.state.playerCards,
              reservedCards: this.state.playerReservedCards,
              coins: this.state.playerCoins,
              persistColors: this.state.persistColors,
              nobles: this.state.playerNobles
            }}
          />
          <ModalCard
            isPlayerTurn={this.state.isPlayerTurn}
            showModalCard={this.state.showModalCard}
            toggleModalCard={this.toggleModalCard}
            selectedCard={this.state.selectedCard}
            convertColor={this.convertColor}
            convertStyle={this.convertStyle}
          />
          <PlayerInfo 
            isPlayerTurn={this.state.isPlayerTurn}
            toggleModalDetails={this.toggleModalDetails}
            playerDetails={{
              points: this.state.playerPoints,
              cards: this.state.playerCards,
              reservedCards: this.state.playerReservedCards,
              coins: this.state.playerCoins,
              persistColors: this.state.playerPersistColors,
              nobles: this.state.playerNobles
            }}
          />
          <OpponentsInfo toggleModalDetails={this.toggleModalDetails}/>
          <CoinsDisplay
            isPlayerTurn={this.state.isPlayerTurn}
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
            convertColor={this.convertColor}
            convertStyle={this.convertStyle}
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