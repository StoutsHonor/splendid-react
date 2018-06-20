import React, { Component } from 'react';

const PlayerStatesContext = React.createContext();

export class PlayerStatesProvider extends Component {
  state = {
    isPlayerTurn: true,
    didPlayerWin: false,
    didPlayerLose: false,
    playerPoints: 0,
    playerCards: [],
    playerReservedCards: [],
    playerCoins: {white: 0, blue: 0, green: 0, red: 0, black: 0, gold: 0, total: 0},
    playerPersistColors: {white: 0, blue: 0, green: 0, red: 0, black: 0},
    playerNobles: []
  }

  setPlayerState = (stateName, state) => {
    this.setState({[stateName]: state});
  }

  render() {
    return (
      <PlayerStatesContext.Provider
        value={{
          state: {
            isPlayerTurn: this.state.isPlayerTurn,
            didPlayerWin: this.state.didPlayerWin,
            didPlayerLose: this.state.didPlayerLose,
            playerPoints: this.state.playerPoints,
            playerCards: this.state.playerCards,
            playerReservedCards: this.state.ReservedCards,
            playerCoins: this.state.playerCoins,
            playerPersistColors: this.state.PersistColors,
            playerNobles: this.state.playerNobles
          },
          actions: {
            setPlayerState: this.setPlayerState
          }
        }}
      >
        {this.props.children}
      </PlayerStatesContext.Provider>
    )
  }
}

export const PlayerStatesConsumer = PlayerStatesContext.Consumer;