/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {render as rtlRender} from '@testing-library/react';
import reduxStore from '@root/store';
import {Provider} from 'react-redux';
import fetchInitialData from '@root/core/redux/thunks/fetch_initial_data';
import '@testing-library/jest-dom';

function render(ui, {store = reduxStore, ...renderOptions} = {}) {
  // fetchInitialData
  store.dispatch({
    type: fetchInitialData.fulfilled.type,
    payload: [
      {
        name: 'steve',
        age: 32,
        color: 'red',
        music: 'blues',
      },
      {
        name: 'bill',
        age: 36,
        color: 'yellow',
        music: 'rock',
      },
    ],
  });

  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
