import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class NoblesDisplay extends Component {

  render() {
    return (
      <div className="text-center">
        <Panel header="Nobles">
          {this.props.nobles.map((noble, key) => {
            return (
              <div className="panel panel-warning col-sm-2" style={{height: 175, marginLeft: 10}} key={key}>
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
        </Panel>
      </div>
    )
  }
}

export default NoblesDisplay;