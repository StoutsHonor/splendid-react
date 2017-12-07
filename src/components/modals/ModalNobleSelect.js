import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ModalNobleSelect extends Component {

  render() {
    return (
      <Modal 
        className="text-center"
        bsSize="large" 
        aria-labelledby="contained-modal-title-sm"
        show={this.props.showModalNobleSelect}
        onHide={() => this.props.toggleModal('NobleSelect')}>
        <Modal.Header>
          {this.props.nobles.map((noble, key) => {
            return (
              <div className="panel panel-warning col-sm-2" style={{height: 175, marginLeft: 10, cursor: 'pointer'}} key={key} onClick={() => this.props.handleSelectedNoble(key)}>
                <div className="panel-heading"><i className="fa fa-bolt fa-3x">3</i></div>
                <div className="panel-body">
                  <div>
                    {noble.white ? <div><i className="fa fa-eercast fa-2x" style={{color:'gray'}}>{noble.white}</i></div> : null }
                    {noble.blue ? <div><i className="fa fa-eercast fa-2x" style={{color:'blue'}}>{noble.blue}</i></div> : null }
                    {noble.green ? <div><i className="fa fa-eercast fa-2x" style={{color:'green'}}>{noble.green}</i></div> : null }
                    {noble.red ? <div><i className="fa fa-eercast fa-2x" style={{color:'red'}}>{noble.red}</i></div> : null }
                    {noble.black ? <div><i className="fa fa-eercast fa-2x" style={{color:'black'}}>{noble.black}</i></div> : null }
                  </div>
                </div>
              </div>
            )
          })}
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