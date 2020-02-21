import React from 'react';
import {shallow} from 'enzyme';
import StockDetails from './StockDetails.jsx';

describe('StockDetails', () => {
  it('renders the details section with the empty default values', () => {
    const testDetails = {
      symbol: '',
      name: '',
      price: '',
      stock_exchange: ''
    };
    const wrapper = shallow(<StockDetails details={testDetails} />);
    expect(wrapper.find('.stock-detail').length).toBe(4);
  });
});
