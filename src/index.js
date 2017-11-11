import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
  <Provider store={createStore}>
    <ConnectedRouter>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
