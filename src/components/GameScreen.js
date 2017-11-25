import React, {Component} from 'react';
import {} from 'react-bootstrap';
import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerInfo from './gameplay_components/PlayerInfo';
//import OpponentsInfo from './gameplay_components/OpponentsInfo';
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
      this.handleClickCard = this.handleClickCard.bind(this);
      this.adjustBankCoins = this.adjustBankCoins.bind(this);
      this.adjustPlayerCoins = this.adjustPlayerCoins.bind(this);
      this.buyCard = this.buyCard.bind(this);
      this.reserveCard = this.reserveCard.bind(this);
      this.costCalculator = this.costCalculator.bind(this);
      this.isAbleToBuy = this.isAbleToBuy.bind(this);
      this.convertColor = this.convertColor.bind(this);
      this.convertStyle = this.convertStyle.bind(this);
      this.state = {
        players: 4, 
        showModalDetails: false, showModalCard: false,
        whiteCoins: 0, blueCoins: 0, greenCoins: 0, redCoins: 0, blackCoins: 0, goldCoins: 5,
        nobles: [],
        levelOneCards: [], levelTwoCards: [], levelThreeCards: [],
        selectedCard: {}, selectedCardPosition:[],
        //player states:
        isPlayerTurn: true,
        playerPoints: 0, 
        playerCards: [],
        playerReservedCards: [],
        playerCoins: {white: 0, blue: 0, green: 0, red: 0, black: 0, gold: 0, total: 0},
        playerPersistColors: {white: 10, blue: 10, green: 10, red: 10, black: 10},
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

    handleClickCard(level, index) {
      const cardState = 'level' + level + 'Cards';
      this.setState({selectedCard: this.state[cardState][index]});
      this.setState({selectedCardPosition: [level, index]})
      this.toggleModalCard();
    }

    adjustBankCoins(coins, action) {
      for(let color in coins) {
        let coinState = color + 'Coins';
        if(action === 'subtract') {
          this.setState({[coinState]: this.state[coinState] - coins[color]});
        } else if(action === 'add') {
          this.setState({[coinState]: this.state[coinState] + coins[color]});
        }
      }
    }

    adjustPlayerCoins(coins, action) {
      for(let color in coins) {
        if(action === 'subtract') {
          this.setState(prevState => ({
            playerCoins: {
              ...prevState.playerCoins,
              [color]: prevState.playerCoins[color] - coins[color],
              total: prevState.playerCoins.total - coins[color]
            }
          }))
        } else if(action === 'add') {
          this.setState(prevState => ({
            playerCoins: {
              ...prevState.playerCoins,
              [color]: prevState.playerCoins[color] + coins[color],
              total: prevState.playerCoins.total + coins[color]
            }
          }))
        }
      }
    }

    buyCard(level, index) {
      const cardsState = 'level' + level + 'Cards';
      const card = this.state[cardsState].slice(index, index + 1);
      const cards = this.state[cardsState].slice();
      const playerCards = this.state.playerCards.slice();
      //player states adjustment
      console.log(card, 'card to buy')
      //player persist colors update
      this.setState(prevState => ({
        playerPersistColors: {
          ...prevState.playerPersistColors,
          [card.persist]: prevState.playerPersistColors[card.persist] + 1
        }
      }))
      //player points update
      if(card.points) {
        this.setState({playerPoints: this.state.playerPoints + card.points});
      }
      //player cards array update
      playerCards.push(card);
      this.setState({playerCards: playerCards});
      //points adjustment
      //cards array adjustment
      if(cards.length > 4) {
        cards[index] = cards[4];
        cards.splice(4, 1);
        this.setState({[cardsState]: cards});
      } else {
        cards.splice(index, 1);
        this.setState({[cardsState]: cards});
      }
      this.toggleModalCard();
    }

    reserveCard(level, index) {
      const cardsState = 'level' + level + 'Cards';
      const cards = this.state[cardsState].slice();
      const playerCards = this.state.playerReservedCards.slice();
      //player reserved cards array update
      playerCards.push(cards[index]);
      this.setState({playerReservedCards: playerCards});
      //cards array adjustment
      if(cards.length > 4) {
        cards[index] = cards[4];
        cards.splice(4, 1);
        this.setState({[cardsState]: cards});
      } else {
        cards.splice(index, 1);
        this.setState({[cardsState]: cards});
      }
      //gold coins logic
      if(this.state.goldCoins !== 0 && this.state.playerCoins.total < 10) {this.adjustBankCoins({goldCoins: 1}, 'subtract');}
      this.toggleModalCard();
    }

    costCalculator(playerBuyingPower, cardCost) {
      const results = {total: 0};
      for(let color in cardCost) {
        if(playerBuyingPower[color]) {
          if(cardCost[color] > playerBuyingPower[color]) {
            results[color] = cardCost[color] - playerBuyingPower[color];
            results.total += results[color];
          }
        } else {
          results[color] = cardCost[color];
          results.total += results[color];
        }
      }
      return results;
    }

    isAbleToBuy(playerBuyingPower, cardCost) {
      let coinsNeeded = this.costCalculator(playerBuyingPower, cardCost);
      if (coinsNeeded.total > playerBuyingPower.gold) {
        return false;
      }
      return true;
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
              persistColors: this.state.playerPersistColors,
              nobles: this.state.playerNobles
            }}
          />
          <ModalCard
            isPlayerTurn={this.state.isPlayerTurn}
            showModalCard={this.state.showModalCard}
            toggleModalCard={this.toggleModalCard}
            selectedCard={this.state.selectedCard}
            position={this.state.selectedCardPosition}
            convertColor={this.convertColor}
            convertStyle={this.convertStyle}
            buyCard={this.buyCard}
            reserveCard={this.reserveCard}
            costCalculator={this.costCalculator}
            isAbleToBuy={this.isAbleToBuy}
            playerDetails={{
              points: this.state.player,
              cards: this.state.playerCards,
              reservedCards: this.state.playerReservedCards,
              coins: this.state.playerCoins,
              persistColors: this.state.playerPersistColors,
              nobles: this.state.playerNobles
            }}
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
          {/* <OpponentsInfo toggleModalDetails={this.toggleModalDetails}/> */}
          <CoinsDisplay
            isPlayerTurn={this.state.isPlayerTurn}
            adjustBankCoins={this.adjustBankCoins}
            adjustPlayerCoins={this.adjustPlayerCoins}
            coins={[this.state.whiteCoins,
              this.state.blueCoins,
              this.state.greenCoins,
              this.state.redCoins,
              this.state.blackCoins,
              this.state.goldCoins
            ]}
            coinTotal={this.state.playerCoins.total}
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