import React from 'react';

import { PlayersProvider, PlayersConsumer } from './Players';
import { ColorSchemesProvider, ColorSchemesConsumer } from './ColorSchemes';

export function Providers({children}) {
  return (
    <ColorSchemesProvider>
      <PlayersProvider>
        {children}
      </PlayersProvider>
    </ColorSchemesProvider>
  )
}

export function Consumers({children}) {
  return (
    <ColorSchemesConsumer>
      {colorSchemes => (
        <PlayersConsumer>
          {players => children({
            colorSchemes,
            players
          })}
        </PlayersConsumer>
      )}
    </ColorSchemesConsumer>
  )
}