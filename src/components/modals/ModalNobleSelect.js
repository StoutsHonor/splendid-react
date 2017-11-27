import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import Card from '../gameplay_components/Card';

export default class ModalNobleSelect extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalNobleSelect}
        onHide={() => this.props.toggleModal('NobleSelect')}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Select the Noble you want to Collect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('NobleSelect')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}