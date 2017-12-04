import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalCoin extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalCoin}
        onHide={() => this.props.toggleModal('Coin')}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Exchange Coins</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModalCoin}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}