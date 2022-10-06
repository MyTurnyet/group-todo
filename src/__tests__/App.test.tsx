import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const mainDiv: HTMLElement = screen.getByTitle('appTitle');
  expect(mainDiv.textContent).toEqual('Works!')
});
