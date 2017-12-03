import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalNotification extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalNotification}
        onHide={() => {
          this.props.clearNotificationCountdown();
          this.props.toggleModal('Notification');
        }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.currentNotification}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            this.props.clearNotificationCountdown();
            this.props.toggleModal('Notification');
          }}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}