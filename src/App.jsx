import React, {useState} from 'react';
import StockDetails from './StockDetails.jsx';
import StockTableRow from './StockTableRow.jsx';
import AddStockForm from './AddStockForm.jsx';
import {callStockAPI} from './hooks/callStockAPI.js';
import './App.css';

function App() {
  const [stocks, setStocks] = useState(['SNAP', 'MS', 'VZ', 'DNR', 'HPQ']);
  const [details, setDetails] = useState({symbol: '', name: '', price: '', stock_exchange: ''});
  const [stockInput, setStockInput] = useState('');

  function handleStockInputChange(event) {
      setStockInput(event.target.value);
  }

  function fetchFromApi(stock) {
    callStockAPI(stock)
      .then(response => {
        setDetails(response)
      });
  }

  function addStock(event) {
    event.preventDefault();
    let newStocks = [...stocks];
    newStocks.push(stockInput);
    setStocks(newStocks)
  }

  function generateRows() {
    return stocks.map((stock, index) =>
      <tr key={index} className='stock-row'>
        <StockTableRow stock={stock} fetchFromApi={fetchFromApi} />
      </tr>
    );
  }

  return (
    <div className="App">
      <StockDetails details={details}/>
      <div className="stock-table">
        <table>
          <tbody>
            {generateRows()}
          </tbody>
        </table>
      </div>
      <AddStockForm addStock={addStock} stockInput={stockInput} changeInput={handleStockInputChange}/>
    </div>
  );
}

export default App;
