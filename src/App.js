import React, {useState} from 'react';
import './App.css';

function App() {
  const [stocks, setStocks] = useState(['SNAP', 'MS', 'VZ', 'DNR', 'HPQ']);

  function generateRows() {
    return stocks.map((stock, index) =>
      <tr key={index} className='stock-row'>
        <td> {stock} </td>
      </tr>
    );
  }

  return (
    <div className="App">
      <div className="stock-details" />
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
