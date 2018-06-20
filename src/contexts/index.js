import React from 'react';

import { ColorSchemesProvider, ColorSchemesConsumer } from './ColorSchemes';
import { ModalStatesProvider, ModalStatesConsumer } from './ModalStates';
import { PlayerStatesProvider, PlayerStatesConsumer } from './PlayerStates';

export function Providers({children}) {
  return (
    <ColorSchemesProvider>
    <ModalStatesProvider>
    <PlayerStatesProvider>
      {children}
    </PlayerStatesProvider>
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
            <PlayerStatesConsumer>
              {playerStates => children({
                colorSchemes,
                modalStates,
                playerStates
              })}
            </PlayerStatesConsumer>
          )}
        </ModalStatesConsumer>
      )}
    </ColorSchemesConsumer>
  )
}