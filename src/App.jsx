import React, {useState} from 'react';
import StockDetails from './stockTable/StockDetails.jsx';
import StockTableRow from './stockTable/StockTableRow.jsx';
import AddStockForm from './stockTable/AddStockForm.jsx';
import {callStockAPI} from './server/callStockAPI.js';
import './App.css';

function App() {
  const [stocks, setStocks] = useState(['SNAP', 'MS', 'VZ', 'DNR', 'HPQ']);
  const [details, setDetails] = useState({symbol: '', name: '', price: '', stock_exchange: ''});
  const [stockInput, setStockInput] = useState('');

  /**
   * takes an input event and puts the value as the value for stock input
   * @param  {object} event the event object from the input
   */
  function handleStockInputChange(event) {
      setStockInput(event.target.value);
  }

  /**
   * calls the external api to get stock detail for the given stock and sets it in the details state
   * will set a loading message while waiting for the response
   * @param  {string} stock the stock to fetch details for
   */
  function fetchFromApi(stock) {
    setDetails({'': 'Loading...'});
    callStockAPI(stock)
      .then(response => {
        setDetails(response)
      });
  }

  /**
   * adds a stock to the stock table based on the stock input state
   * @param {object} event the submit event
   */
  function addStock(event) {
    event.preventDefault();
    let newStocks = [...stocks];
    newStocks.push(stockInput);
    setStocks(newStocks)
  }

  /**
   * removes a stock from the stock table
   * @param  {string} stockToRemove the name of the stock to remove
   */
  function removeStock(stockToRemove) {
    let newStocks = [...stocks];
    newStocks = newStocks.filter((value) => value !== stockToRemove);
    setStocks(newStocks);
  }

  /**
   * returns a table row for each entry in the stocks array
   * @return {Component} a stock table row component
   */
  function generateRows() {
    return stocks.map((stock, index) =>
      <StockTableRow stock={stock} fetchFromApi={fetchFromApi} removeStock={removeStock} key={index}/>
    );
  }

  return (
    <div className="App">
      <StockDetails details={details}/>
        <table className="stock-table">
          <thead>
            <tr>
              <td> Stock Table </td>
            </tr>
          </thead>
          <tbody>
            {generateRows()}
          </tbody>
        </table>
      <AddStockForm addStock={addStock} stockInput={stockInput} changeInput={handleStockInputChange}/>
    </div>
  );
}

export default App;
