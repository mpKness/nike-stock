import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a table row for each stock in default state stock array', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.stock-row')).toBe(5);
});
