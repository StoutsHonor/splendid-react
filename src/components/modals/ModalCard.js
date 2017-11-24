import React, {Component} from 'react';
import {Modal, Button, Panel} from 'react-bootstrap';

export default class ModalCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let persistColor = this.props.selectedCard.persist;
    if(this.props.selectedCard.persist === "white") {persistColor = "gray"}
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalCard}
        onHide={this.props.toggleModalCard}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">{this.props.isPlayerTurn? "What Would You Like To Do?" : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Panel className="mx-auto"
            header={
              <div>
                <i className="fa fa-eercast fa-3x" style={{color: persistColor}}/>
                {this.props.selectedCard.points ? <i className="fa fa-bolt fa-2x pull-right" style={{color: persistColor}}>{this.props.selectedCard.points}</i> : null }
              </div>
            } 
            bsStyle={this.props.convertStyle(this.props.selectedCard.persist)} 
            style={{backgroundColor: this.props.convertColor(this.props.selectedCard.persist), height: 250, marginLeft: 10, cursor: 'pointer'}}>
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
          {this.props.isPlayerTurn ?
            <div>
            <Button 
              className="btn btn-w-m btn-danger pull-left"
              onClick={this.props.toggleModalCard}>Cancel
            </Button>
            {this.props.playerDetails.reservedCards.length < 3 ?
              <Button
                bsClass="btn btn-w-m btn-warning"
                onClick={() => this.props.reserveCard(this.props.position[0], this.props.position[1])}>Reserve Card
              </Button> 
            :
              <Button
                bsClass="btn btn-w-m btn-warning disabled"
                onClick={() => alert("You can only reserve a maximum of 3 cards, buy from your reserved cards to make more room!")}
              >Cannot Reserve
              </Button>
            }
              <Button
              bsClass="btn btn-w-m btn-success"
              onClick={this.props.toggleModalCard}>Buy Card</Button>
            </div>
          : null }
        </Modal.Footer>
      </Modal>
    )
  }
}