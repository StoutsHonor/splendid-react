import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalCard extends Component {
  render() {
    return (
      <Modal 
        {...this.props} 
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalCard}
        onHide={this.props.toggleModalCard}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Selected Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModalCard}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}