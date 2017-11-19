import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';

class NoblesDisplay extends Component {

  render() {
    return (
      <div className="text-center">
        <Panel header="Nobles">
          {this.props.nobles.map((noble, key) => {
            return <Image key={key} className="col-sm-2" src="http://nerdyraptor.net/wp-content/uploads/2014/10/Noble.jpg" thumbnail/>
          })}
        </Panel>
      </div>
    )
  }
}

export default NoblesDisplay;