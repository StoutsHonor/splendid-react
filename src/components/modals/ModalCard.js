import React, {Component} from 'react';
import {Modal, Button, Panel} from 'react-bootstrap';

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
          <Panel className='col-sm-2'
            header={
              <div>
                <i className="fa fa-superpowers fa-3x"/>
                {this.props.selectedCard.points ? <i className="fa fa-bolt fa-2x pull-right">{this.props.card.points}</i> : null }
              </div>
            } 
            bsStyle={this.convertStyle(this.props.selectedCard.persist)} 
            style={{backgroundColor: this.convertColor(this.props.selectedCard.persist), height: 250, marginLeft: 10, cursor: 'pointer'}}>
            <div>
              {this.props.selectedCard.white ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'gray'}}>{this.props.selectedCard.white}</i></div> : null }
              {this.props.selectedCard.blue ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'blue'}}>{this.props.selectedCard.blue}</i></div> : null }
              {this.props.selectedCard.green ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'green'}}>{this.props.selectedCard.green}</i></div> : null }
              {this.props.selectedCard.red ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'red'}}>{this.props.selectedCard.red}</i></div> : null }
              {this.props.selectedCard.black ? <div><i className="fa fa-bandcamp fa-2x" style={{color:'black'}}>{this.props.selectedCard.black}</i></div> : null }
            </div>
          </Panel>
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