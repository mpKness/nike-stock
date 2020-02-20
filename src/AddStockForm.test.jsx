import React from 'react';
import {shallow} from 'enzyme';
import AddStockForm from './AddStockForm.jsx';

describe('AddStockForm', () => {
  it('should add a stock to the table when the add stock button is clicked', () => {
    const mockAddFunction = jest.fn();
    const mockChangeFunction = jest.fn();
    const newStock = 'test';
    
    const wrapper = shallow(<AddStockForm addStock={mockAddFunction} changeInput={mockChangeFunction} stockInput={newStock}/>);
    const addButton = wrapper.find('form').at(0);
    addButton.simulate('submit');

    expect(mockAddFunction.mock.calls.length).toBe(1);
  });
});
