import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const useStockAPIMock = jest.fn();
const mockDetails = {
  symbol: 'test symbol',
  name: 'test name',
  price: 'test price',
  stock_exchange: 'test stock exchange'
};
useStockAPIMock.mockReturnValue(mockDetails);

describe('App', () => {
  it('renders a table row for each stock in default state stock array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.stock-row').length).toBe(5);
  });
});
