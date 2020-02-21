import React from 'react';
import {shallow} from 'enzyme';
import StockTableRow from './StockTableRow.jsx';

describe('StockTableRow', () => {
  it('should call the provided fetch function with the given stock name when clicked on', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<StockTableRow fetchFromApi={mockFunction} stock='test' />);
    wrapper.find('td').at(0).simulate('click');
    expect(mockFunction.mock.calls[0][0]).toBe('test');
  });
  it('should call remove function when x is clicked', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<StockTableRow fetchFromApi={mockFunction} removeStock={mockFunction} stock='test' />);
    wrapper.find('#remove-stock-test').at(0).simulate('click');
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
