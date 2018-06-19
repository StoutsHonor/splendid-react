import React from 'react';

import { ColorSchemesProvider, ColorSchemesConsumer } from './ColorSchemes';
import { ModalStatesProvider, ModalStatesConsumer } from './ModalStates';
import { PlayersProvider, PlayersConsumer } from './Players';

export function Providers({children}) {
  return (
    <ColorSchemesProvider>
    <ModalStatesProvider>
    <PlayersProvider>
      {children}
    </PlayersProvider>
    </ModalStatesProvider>
    </ColorSchemesProvider>
  )
}

export function Consumers({children}) {
  return (
    <ColorSchemesConsumer>
      {colorSchemes => (
        <ModalStatesConsumer>
          {modalStates => (
            <PlayersConsumer>
              {players => children({
                colorSchemes,
                modalStates,
                players
              })}
            </PlayersConsumer>
          )}
        </ModalStatesConsumer>
      )}
    </ColorSchemesConsumer>
  )
}