import React from 'react';

const StockTableRow = ({fetchFromApi, stock}) => {
  return (
    <td onClick={() => {fetchFromApi(stock)}}> {stock} </td>
  );
}

export default StockTableRow;
