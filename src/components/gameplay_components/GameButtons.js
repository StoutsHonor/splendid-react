import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

class GameButtons extends Component {

  render() {
    return (
      <div>
        <Button 
          bsClass="btn btn-w-m btn-default pull-left">
          <i className="fa fa-arrow-left"></i> Back To Home
        </Button>
        <ButtonGroup bsClass="text-center">
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-superpowers"></i> Collect Coins
          </Button>
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-money"></i> Purchase Card
          </Button>
          <Button 
            bsClass="btn btn-w-m btn-success">
            <i className="fa fa-lock"></i> Reserve Card
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default GameButtons;