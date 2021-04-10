import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from '@root/app/app';
import store from '@root/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
