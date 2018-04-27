import React, {Component} from 'react';
import Random from 'react-randomizer';

import NoblesDisplay from './gameplay_components/NoblesDisplay';
import CardsDisplay from './gameplay_components/CardsDisplay';
import GameButtons from './gameplay_components/GameButtons';
import CoinsDisplay from './gameplay_components/CoinsDisplay';
import PlayerInfo from './gameplay_components/PlayerInfo';
import ModalNotification from './modals/ModalNotification';
import ModalDetails from './modals/ModalDetails';
import ModalBoughtCards from './modals/ModalBoughtCards';
import ModalReservedCards from './modals/ModalReservedCards';
import ModalCard from './modals/ModalCard';
import ModalNobleSelect from './modals/ModalNobleSelect';
import ModalEnd from './modals/ModalEnd';
import Nobles from '../json_files/nobles';
import LevelOneCards from '../json_files/levelOneCards';
import LevelTwoCards from '../json_files/levelTwoCards';
import LevelThreeCards from '../json_files/levelThreeCards';

let notificationCountdown;

export default class GameScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: 4,
      showModalDetails: false, showModalBoughtCards: false, showModalReservedCards: false,
      showModalCard: false, showModalNobleSelect: false, showModalEnd: false, showModalNotification: false,
      whiteCoins: 0, blueCoins: 0, greenCoins: 0, redCoins: 0, blackCoins: 0, goldCoins: 5,
      nobles: [], pointsToWin: 0,
      levelOneCards: [], levelTwoCards: [], levelThreeCards: [],
      selectedCard: {}, selectedCardPosition:[],
      currentNotification: '', qualifiedNobles: [],
      //player states:
      isPlayerTurn: true, didPlayerWin: false, didPlayerLose: false,
      playerPoints: 0,
      playerCards: [],
      playerReservedCards: [],
      playerCoins: {white: 0, blue: 0, green: 0, red: 0, black: 0, gold: 0, total: 0},
      playerPersistColors: {white: 0, blue: 0, green: 0, red: 0, black: 0},
      playerNobles: []
    }
  }

  componentDidMount() {
    const nobles = Random.randomizeArray(Nobles).slice(0, this.state.players + 1);
    const levelOneCards = Random.randomizeArray(LevelOneCards);
    const levelTwoCards = Random.randomizeArray(LevelTwoCards);
    const levelThreeCards = Random.randomizeArray(LevelThreeCards);
    let coin;
    if(this.state.players === 2) {
      coin = 4;
    } else if(this.state.players === 3) {
      coin = 5;
    } else {
      coin = 7;
    }
    this.setState({
      nobles,
      levelOneCards,
      levelTwoCards,
      levelThreeCards,
      whiteCoins: coin,
      blueCoins: coin,
      greenCoins: coin,
      redCoins: coin,
      blackCoins: coin,
      pointsToWin: 15
    })
  }

  toggleModal = name => {
    const modalName = 'showModal' + name;
    this.setState({[modalName]: !this.state[modalName]});
  }

  displayNotificationMessage = message => {
    this.toggleModal('Notification');
    this.setState({currentNotification: message});
    this.startNotificationCountdown();
  }

  startNotificationCountdown = () => {
    notificationCountdown = setTimeout(() => this.setState({showModalNotification: false}), 5000);
  }

  clearNotificationCountdown = () => {
    clearTimeout(notificationCountdown);
  }

  handleClickCard = (level, index) => {
    let cardsState;
    if(level === 'Reserved') {
      cardsState = 'playerReservedCards';
    } else {
    cardsState = 'level' + level + 'Cards';
    }
    this.setState({
      selectedCard: this.state[cardsState][index],
      selectedCardPosition: [level, index]
    });
    this.toggleModal('Card');
  }

  adjustBankCoins = (coins, action) => {
    for(let color in coins) {
      if(color !== 'total') {
        let coinState = color + 'Coins';
        if(action === 'subtract') {
          this.setState({[coinState]: this.state[coinState] - coins[color]});
        } else if(action === 'add') {
          this.setState({[coinState]: this.state[coinState] + coins[color]});
        }
      }
    }
  }

  adjustPlayerCoins = (coins, action) => {
    for(let color in coins) {
      if(color !== 'total') {
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
  }

  updatePoints = points => {
    this.setState({playerPoints: this.state.playerPoints + points});
  }

  buyCard = (level, index) => {
    let cardsState;
    if(level === "Reserved") {
      cardsState = "playerReservedCards";
    } else {
      cardsState = 'level' + level + 'Cards';
    }
    const card = this.state[cardsState][index];
    const cards = this.state[cardsState].slice();
    const playerCards = this.state.playerCards.slice();
    //player points update
    if(card.points) {
      this.updatePoints(card.points);
    }
    //player cards array update
    playerCards.push(card);
    this.setState({playerCards: playerCards});
    //coins adjustment
    let costObj = this.costCalculator(this.state.playerPersistColors, card);
    costObj.total = 0;
    for(let color in costObj) {
      if(color !== 'total') {
        if(costObj[color] > this.state.playerCoins[color]) {
          costObj.total += costObj[color] - this.state.playerCoins[color];
          costObj[color] = this.state.playerCoins[color];
        }
      }
    }
    this.adjustBankCoins(costObj, 'add');
    this.adjustPlayerCoins(costObj, 'subtract');
    this.adjustBankCoins({gold: costObj.total}, 'add');
    this.adjustPlayerCoins({gold: costObj.total}, 'subtract');
    //player persist colors update
    this.setState(prevState => ({
      playerPersistColors: {
        ...prevState.playerPersistColors,
        [card.persist]: prevState.playerPersistColors[card.persist] + 1
      }
    }))
    //cards array adjustment
    if(cards.length > 4) {
      cards[index] = cards[4];
      cards.splice(4, 1);
      this.setState({[cardsState]: cards});
    } else {
      cards.splice(index, 1);
      this.setState({[cardsState]: cards});
    }
    this.toggleModal('Card');
    this.displayNotificationMessage('You Bought This Card!');
    this.setState({showModalReservedCards: false});
    this.checkNobles();
  }

  reserveCard = (level, index) => {
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
    if(this.state.goldCoins !== 0 && this.state.playerCoins.total < 10) {
      this.adjustBankCoins({gold: 1}, 'subtract');
      this.adjustPlayerCoins({gold: 1}, 'add');
    }
    this.toggleModal('Card');
    this.displayNotificationMessage('You Reserved This Card!');
    this.checkNobles();
  }

  costCalculator = (playerBuyingPower, cardCost) => {
    const results = {total: 0};
    for(let color in cardCost) {
      if(color === 'white' || color === 'blue' || color === 'green' || color === 'red' || color === 'black' || color === 'gold') {
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
    }
    return results;
  }

  isAbleToBuy = (playerBuyingPower, cardCost) => {
    let coinsNeeded = this.costCalculator(playerBuyingPower, cardCost);
    if (coinsNeeded.total > playerBuyingPower.gold) {
      return false;
    }
    return true;
  }

  checkNobles = () => {
    let qualifiedNobles = [];
    setTimeout(() => {
      this.state.nobles.forEach((noble, index) => {
        if(this.costCalculator(this.state.playerPersistColors, noble).total === 0) {
          qualifiedNobles.push(index);
        }
      })
      if(qualifiedNobles.length === 1) {
        this.handleSelectedNoble(qualifiedNobles[0]);
        this.setState({showModalNotification: false});
      } else if (qualifiedNobles.length > 1) {
        this.setState({qualifiedNobles: qualifiedNobles});
        this.toggleModal('NobleSelect');
        this.setState({showModalNotification: false});
      }
    }, 200);
    //since nobles need delay to check, win condition check is async
    setTimeout(() => this.checkPoints(), 1000);
  }

  handleSelectedNoble = index => {
    const nobles = this.state.nobles.slice();
    const playerNobles = this.state.playerNobles.slice();
    playerNobles.push(nobles.splice(index, 1));
    this.setState({nobles, playerNobles});
    this.updatePoints(3);
    setTimeout(() => this.checkPoints(), 1000);
    this.displayNotificationMessage('You Chose Your Noble Wisely!');
  }

  checkPoints = () => {
    if(this.state.playerPoints >= this.state.pointsToWin) {
      this.setState({didPlayerWin: true});
      this.toggleModal('End');
    }
  }

  convertColor = color => {
    if(color === 'white') { return "#dcdcdc";}
    if(color === 'blue') { return "#b0e0e6";}
    if(color === 'green') {return "#3cb371";}
    if(color === 'red') {return "#FFE4E1";}
    if(color === 'black') { return "#696969";}
    return color;
  }

  convertStyle = style => {
    if(style === 'white' || style ==='black') { return 'default'}
    if(style === 'blue') { return 'primary'}
    if(style === 'green') { return 'success'}
    if(style === 'red') { return 'danger'}
  }

  render() {
    return (
      <div>
        <ModalNotification
          toggleModal={this.toggleModal}
          showModalNotification={this.state.showModalNotification}
          clearNotificationCountdown={this.clearNotificationCountdown}
          currentNotification={this.state.currentNotification}
        />
        <ModalDetails
          toggleModal={this.toggleModal}
          showModalDetails={this.state.showModalDetails}
          playerDetails={{
            points: this.state.playerPoints,
            cards: this.state.playerCards,
            reservedCards: this.state.playerReservedCards,
            coins: this.state.playerCoins,
            persistColors: this.state.playerPersistColors,
            nobles: this.state.playerNobles
          }}
        />
        <ModalBoughtCards
          toggleModal={this.toggleModal}
          showModalBoughtCards={this.state.showModalBoughtCards}
          cards={this.state.playerCards}
          convertColor={this.convertColor}
          convertStyle={this.convertStyle}
        />
        <ModalReservedCards
          toggleModal={this.toggleModal}
          showModalReservedCards={this.state.showModalReservedCards}
          reservedCards={this.state.playerReservedCards}
          handleClickCard={this.handleClickCard}
          convertColor={this.convertColor}
          convertStyle={this.convertStyle}
        />
        <ModalCard
          isPlayerTurn={this.state.isPlayerTurn}
          toggleModal={this.toggleModal}
          showModalCard={this.state.showModalCard}
          displayNotificationMessage={this.displayNotificationMessage}
          selectedCard={this.state.selectedCard}
          position={this.state.selectedCardPosition}
          convertColor={this.convertColor}
          convertStyle={this.convertStyle}
          buyCard={this.buyCard}
          reserveCard={this.reserveCard}
          costCalculator={this.costCalculator}
          isAbleToBuy={this.isAbleToBuy}
          playerDetails={{
            points: this.state.playerPoints,
            cards: this.state.playerCards,
            reservedCards: this.state.playerReservedCards,
            coins: this.state.playerCoins,
            persistColors: this.state.playerPersistColors,
            nobles: this.state.playerNobles
          }}
        />
        <ModalNobleSelect
          toggleModal={this.toggleModal}
          nobles={this.state.nobles}
          showModalNobleSelect={this.state.showModalNobleSelect}
          qualifiedNobles={this.state.qualifiedNobles}
          handleSelectedNoble={this.handleSelectedNoble}
        />
        <ModalEnd
          toggleModal={this.toggleModal}
          showModalEnd={this.state.showModalEnd}
          didPlayerWin={this.state.didPlayerWin}
          didPlayerLose={this.state.didPlayerLose}
        />
        <PlayerInfo
          isPlayerTurn={this.state.isPlayerTurn}
          toggleModal={this.toggleModal}
          playerDetails={{
            points: this.state.playerPoints,
            cards: this.state.playerCards,
            reservedCards: this.state.playerReservedCards,
            coins: this.state.playerCoins,
            persistColors: this.state.playerPersistColors,
            nobles: this.state.playerNobles
          }}
        />
        <CoinsDisplay
          isPlayerTurn={this.state.isPlayerTurn}
          displayNotificationMessage={this.displayNotificationMessage}
          costCalculator={this.costCalculator}
          adjustBankCoins={this.adjustBankCoins}
          adjustPlayerCoins={this.adjustPlayerCoins}
          checkNobles={this.checkNobles}
          coins={[this.state.whiteCoins,
            this.state.blueCoins,
            this.state.greenCoins,
            this.state.redCoins,
            this.state.blackCoins,
            this.state.goldCoins
          ]}
          playerCoins={this.state.playerCoins}
          coinTotal={this.state.playerCoins.total}
        />
        <CardsDisplay
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