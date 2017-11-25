import React, {Component} from 'react';
import {Modal, Button, Panel} from 'react-bootstrap';

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
          <h4>Reserved Cards</h4></Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('ReservedCards')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}