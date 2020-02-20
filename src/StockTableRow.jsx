import React from 'react';

/**
 * lists a stock and provides a click handler that call the given fetch from api function
 * @param {function} fetchFromApi used to call an external api to get stock details
 * @param {string} stock      the name of the stock
 */
const StockTableRow = ({fetchFromApi, removeStock, stock}) => {
  return (
    <tr className='stock-row'>
      <td onClick={() => {fetchFromApi(stock)}}> {stock} </td>
      <td onClick={() => {removeStock(stock)}} className={'remove-stock-' + stock}> X </td>
    </tr>
  );
}

export default StockTableRow;
