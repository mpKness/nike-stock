import React, {useState} from 'react';
import StockDetails from './StockDetails.jsx';
import './App.css';

function App() {
  const [stocks, setStocks] = useState(['SNAP', 'MS', 'VZ', 'DNR', 'HPQ']);
  const [details, setDetails] = useState({symbol: '', name: '', price: '', stock_exchange: ''});

  function generateRows() {
    return stocks.map((stock, index) =>
      <tr key={index} className='stock-row'>
        <td> {stock} </td>
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
    </div>
  );
}

export default App;
