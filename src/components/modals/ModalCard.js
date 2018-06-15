import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Card from '../shared/Card';

export default class ModalCard extends Component {
  render() {
    return (
      <Modal
        className="text-center"
        bsSize="large"
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalCard}
        onHide={() => this.props.toggleModal('Card')}>

        <Modal.Header className="text-center">
          <Card
            className={'col-sm-3'}
            card={this.props.selectedCard}
          />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="contained-modal-title-sm">{this.props.isPlayerTurn? "What Would You Like To Do With This Card?" : ""}</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          {this.props.isPlayerTurn ?
            <div>
              <Button
                className="btn btn-w-m btn-danger pull-left"
                onClick={() => this.props.toggleModal('Card')}>Cancel
              </Button>
              {this.props.playerDetails.reservedCards.length < 3 && this.props.position[0] !== 'Reserved' ?
                <Button
                  bsClass="btn btn-w-m btn-warning"
                  onClick={() => this.props.reserveCard(this.props.position[0], this.props.position[1])}>Reserve Card
                </Button>
              :
                <Button
                  bsClass="btn btn-w-m btn-warning disabled"
                  onClick={() => this.props.displayNotificationMessage("You either: reserved this card already, or reserved 3 cards, the maximum limit. Buy from your reserved cards to make more room!")}
                >Cannot Reserve
                </Button>
              }
              {this.props.isAbleToBuy({
                  white: this.props.playerDetails.coins.white + this.props.playerDetails.persistColors.white,
                  blue: this.props.playerDetails.coins.blue + this.props.playerDetails.persistColors.blue,
                  green: this.props.playerDetails.coins.green + this.props.playerDetails.persistColors.green,
                  red: this.props.playerDetails.coins.red + this.props.playerDetails.persistColors.red,
                  black: this.props.playerDetails.coins.black + this.props.playerDetails.persistColors.black,
                  gold: this.props.playerDetails.coins.gold
                }, {
                  white: this.props.selectedCard.white,
                  blue: this.props.selectedCard.blue,
                  green: this.props.selectedCard.green,
                  red: this.props.selectedCard.red,
                  black: this.props.selectedCard.black,
                }) ?
                <Button
                  bsClass="btn btn-w-m btn-success"
                  onClick={() => this.props.buyCard(this.props.position[0], this.props.position[1])}>Buy Card
                </Button>
              :
              <Button
                bsClass="btn btn-w-m btn-success disabled">Cannot Buy
              </Button>
              }
            </div>
          : null }
        </Modal.Footer>
      </Modal>
    )
  }
}