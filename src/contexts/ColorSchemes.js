import React, { Component } from 'react';

const ColorSchemesContext = React.createContext();

export class ColorSchemesProvider extends Component {

  convertColor = color => {
    if(color === 'white') { return "#dcdcdc";}
    if(color === 'blue') { return "#b0e0e6";}
    if(color === 'green') {return "#3cb371";}
    if(color === 'red') {return "#FFE4E1";}
    if(color === 'black') { return "#696969";}
    return color;
  }

  convertStyle = style => {
    if(style === 'white' || style ==='black') { return 'default'}
    if(style === 'blue') { return 'primary'}
    if(style === 'green') { return 'success'}
    if(style === 'red') { return 'danger'}
  }

  render() {
    return (
      <ColorSchemesContext.Provider
        value={{
          actions : {
            convertColor: this.convertColor,
            convertStyle: this.convertStyle
          }
        }}
      >
        {this.props.children}
      </ColorSchemesContext.Provider>
    )
  }
}

export const ColorSchemesConsumer = ColorSchemesContext.Consumer;