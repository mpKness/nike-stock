import React from 'react';

/**
 * a small form that allows the user to add a stock to the list of stocks
 * @param {function} addStock    function that will add a stock to the stock table (no validation)
 * @param {function} changeInput function that will update the state for the text input
 * @param {string} stockInput  current value of the text input
 */
const AddStockForm = ({addStock, changeInput, stockInput}) => {
  return (
    <form onSubmit={addStock}>
      <input type='text' value={stockInput} onChange={changeInput} className='add-stock-text-field'/>
      <input type='submit' value='Add Stock' className='add-stock-button'/>
    </form>
  );
}

export default AddStockForm;
