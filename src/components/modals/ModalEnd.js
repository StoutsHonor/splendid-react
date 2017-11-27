import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalEnd extends Component {
  
    render() {
      return (
        <Modal 
          className="text-center"
          bsSize="large" 
          aria-labelledby="contained-modal-title-sm"
          show={this.props.showModalEnd}
          onHide={() => this.props.toggleModal('End')}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Congratulations, You Win!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.toggleModal('End')}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
    }
  }