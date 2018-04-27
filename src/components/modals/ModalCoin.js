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
        onHide={() => this.props.toggleModalCoins}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-sm">Exchange Coins</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Your Coins</h3>
            <div className="text-center">
              {this.props.selectedCoins.map((value, index) => {
                if(value === 'white') { value = 'gray'}
                return <i className="fa fa-bandcamp fa-4x" style={{color: value}} onClick={() => {this.removeSelectedCoin(index)}} key={index}/>
              })}
            </div>
          </div>
          <div>
            <h3>Selected Coins</h3>
            <div className="text-center">
              {this.props.selectedCoins.map((value, index) => {
                if(value === 'white') { value = 'gray'}
                return <i className="fa fa-bandcamp fa-4x" style={{color: value}} onClick={() => {this.removeSelectedCoin(index)}} key={index}/>
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModalCoin}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}