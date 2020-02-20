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
  it('should add a stock to the table when the add stock button is clicked', () => {
    const wrapper = shallow(<App />);

    const textField = wrapper.find('.add-stock-text-field');
    textField.simulate('change', { target: {value: 'test'}});
    const addButton = wrapper.find('.add-stock-button');
    addBuutton.simulate('click');
    expect(wrapper.find('.stock-row').length).toBe(6);
    expect(wrapper.find('.stock-row').at(5).text).toBe('test');
  });
});
