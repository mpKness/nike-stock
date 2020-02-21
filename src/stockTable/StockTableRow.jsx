import React from 'react';
import './StockTableRow.css';

/**
 * lists a stock and provides a click handler that call the given fetch from api function
 * @param {function} fetchFromApi used to call an external api to get stock details
 * @param {function} removeStock used to remove this stock from the table of stocks
 * @param {string} stock      the name of the stock
 */
const StockTableRow = ({fetchFromApi, removeStock, stock}) => {
  return (
    <tr className='stock-row'>
      <td onClick={() => {fetchFromApi(stock)}} className='stock-row-data'> {stock} </td>
      <td onClick={() => {removeStock(stock)}} className={'remove-stock'} id={'remove-stock-' + stock}> X </td>
    </tr>
  );
}

export default StockTableRow;
