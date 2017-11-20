import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalCard extends Component {
  render() {
    return (
      <Modal 
        className="text-center"
        {...this.props} 
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalCard}
        onHide={this.props.toggleModalCard}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Selected Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Selected Card</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            className="btn btn-w-m btn-danger pull-left"
            onClick={this.props.toggleModalCard}>Close</Button>
          <Button
            bsClass="btn btn-w-m btn-warning"
            onClick={this.props.toggleModalCard}>Reserve Card</Button>
          <Button
            bsClass="btn btn-w-m btn-success"
            onClick={this.props.toggleModalCard}>Buy Card</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}