import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Card from '../shared/Card';

export default class ModalReservedCards extends Component {

  render() {
    return (
      <Modal
        className="text-center"
        bsSize="large"
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalReservedCards}
        onHide={() => this.props.toggleModal('ReservedCards')}>
        <Modal.Header>
          {this.props.reservedCards.map((card, index) => {
            return <Card
              className={'col-sm-3'}
              card={card}
              key={index}
              index={index}
              level={'Reserved'}
              handleClickCard={this.props.handleClickCard}
            />
          })}
        </Modal.Header>
        <Modal.Body>
          <Modal.Title id="contained-modal-title-sm">Reserved Cards</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('ReservedCards')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}