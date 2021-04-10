import React from 'react';
import App from '@root/app/app';
import {render, screen} from '@root/util/testing/wrapper';

test('App', () => {
  render(<App />);

  expect(screen.getByText('Update')).toBeInTheDocument();
  expect(screen.getByText('bill')).toBeInTheDocument();
  expect(screen.getByText('steve')).toBeInTheDocument();
});
