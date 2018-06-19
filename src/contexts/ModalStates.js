import React, { Component } from 'react';

const ModalStatesContext = React.createContext();

export class ModalStatesProvider extends Component {
  state = {
    showModalDetails: false,
    showModalBoughtCards: false,
    showModalReservedCards: false,
    showModalCard: false,
    showModalNobleSelect: false,
    showModalEnd: false,
    showModalNotification: false
  }

  toggleModal = name => {
    const modalName = 'showModal' + name;
    this.setState({[modalName]: !this.state[modalName]});
  }

  render() {
    return (
      <ModalStatesContext.Provider
        value={{
          state: {
            showModalDetails: this.state.showModalDetails,
            showModalBoughtCards: this.state.showModalBoughtCards,
            showModalReservedCards: this.state.showModalReservedCards,
            showModalCard: this.state.showModalCard,
            showModalNobleSelect: this.state.showModalNobleSelect,
            showModalEnd: this.state.showModalEnd,
            showModalNotification: this.state.showModalNotification
          },
          actions: {
            toggleModal: this.toggleModal
          }
        }}
      >
        {this.props.children}
      </ModalStatesContext.Provider>
    )
  }
}

export const ModalStatesConsumer = ModalStatesContext.Consumer;