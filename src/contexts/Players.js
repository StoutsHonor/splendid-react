import React, { Component } from 'react';

const PlayersContext = React.createContext();

export default class PlayersProvider extends Component {
  state = {
    players: 4
  }

  changePlayerNumber = number => {
    this.setState({players: number});
  }

  render() {
    return (
      <PlayersContext.Provider
        value={{
          players: this.state.players,
          changePlayerNumber: this.changePlayerNumber
        }}
      >
        {this.props.children}
      </PlayersContext.Provider>
    )
  }
}

export const PlayersConsumer = PlayersContext.Consumer;