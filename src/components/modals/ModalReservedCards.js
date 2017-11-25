import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import Card from '../gameplay_components/Card';

export default class ModalReservedCards extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalReservedCards}
        onHide={() => this.props.toggleModal('ReservedCards')}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Reserved Cards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.reservedCards.map((card, index) => {
            return <Card 
              card={card}
              key={index}
              index={index}
              level={'Reserved'}
              handleClickCard={this.props.handleClickCard}
              convertColor={this.props.convertColor}
              convertStyle={this.props.convertStyle}
            />
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('ReservedCards')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}