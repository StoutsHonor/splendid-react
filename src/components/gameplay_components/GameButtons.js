import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class GameButtons extends Component {
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
      <div>
        <Button 
          bsClass="btn btn-w-m btn-default pull-left"
          onClick={() => {
            this.setState({navigate: true});
            }}>
          <i className="fa fa-arrow-left"/> Back To Home
        </Button>
        <ButtonGroup bsClass="text-center">
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-superpowers"/> Collect Coins
          </Button>
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-money"/> Purchase Card
          </Button>
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-lock"/> Reserve Card
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default GameButtons;