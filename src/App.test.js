import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders a table row for each stock in default state stock array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.stock-row').length).toBe(5);
  });
  it('renders the details section with the empty default values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.stock-detail').length).toBe(4);
  });
});
