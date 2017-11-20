import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalDetails extends Component {
  render() {
    return (
      <Modal 
        className="text-center"
        {...this.props} 
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalDetails}
        onHide={this.props.toggleModalDetails}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Player Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Player Details</h4></Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModalDetails}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}