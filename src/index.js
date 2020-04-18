import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from '@root/app/app';
import {articlesReducer} from '@root/reducers';
import configureStore from '@root/modules/configure_store';

const store = configureStore({
  reducers: {
    articles: articlesReducer,
  },
  state: {
    articles: [],
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
