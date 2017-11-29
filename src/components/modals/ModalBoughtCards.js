import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import Card from '../gameplay_components/Card';

export default class ModalBoughtCards extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalBoughtCards}
        onHide={() => this.props.toggleModal('BoughtCards')}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Your Cards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.cards.map((card, index) => {
            return <Card 
              card={card}
              key={index}
              index={index}
              level={'Bought'}
              convertColor={this.props.convertColor}
              convertStyle={this.props.convertStyle}
            />
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.toggleModal('BoughtCards')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}