import axios from 'axios';
import {stockApiUrl, stockApiToken} from '../constants.js';

// {"Message":"Error! The requested stock(s) could not be found."}
// {"Message":"Error! The requested stock(s) could not be found."}

/**
 * given a stock name (the symbol), will fetch deatiled information on the stock from an external api
 * will then parse off only the information that will be used by the rest of the application and return
 * the parsed data
 * @param  {string} stockName     the stock name, symbol
 * @return {Promise} resolves with the response from the api
 */
export const callStockAPI = (stockName) => {
  const fullStockUrl = stockApiUrl + '?symbol=' + stockName + '&api_token=' + stockApiToken;
  return new Promise((resolve, reject) => {
    axios.get(fullStockUrl)
      .then((response) => {
        let stockDetails = {};
        if(!response.data.data) {
          stockDetails.name = 'INVALID STOCK NAME';
        } else {
          stockDetails = parseResponse(response.data.data[0]);
        }
        resolve(stockDetails); // will always be first entry since always only requesting one stock
      })
      .catch((error) => {
        console.log("ERROR", error);
        resolve({name: 'UNKNOWN ERROR: ' + error});
      });
  });
}

/**
 * given a response from the external api, return an object with only the fields the app will be using
 * @param  {object} response stock details from the external api
 * @return {object}          the details parsed down to just the ones used in the app
 */
function parseResponse(response) {
  return {
    symbol: response.symbol,
    name: response.name,
    price: response.price,
    stock_exchange: response.stock_exchange_short
  };
}

export const mock = (stockName, axios) => callStockAPI(stockName);
