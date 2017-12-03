import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default class ModalEnd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        navigate: false
      }
    }
    render() {
      if(this.state.navigate) {
        return <Redirect to='/' push={true}/>
      }
      return (
        <Modal 
          className="text-center"
          bsSize="large" 
          aria-labelledby="contained-modal-title-sm"
          show={this.props.showModalEnd}
          onHide={() => this.props.toggleModal('End')}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Congratulations, You Won!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {
                this.props.toggleModal('End');
                this.setState({navigate: true});
              }}>Go to Score Screen</Button>
          </Modal.Footer>
        </Modal>
      )
    }
  }