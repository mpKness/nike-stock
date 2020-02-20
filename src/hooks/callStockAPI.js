import axios from 'axios';
import {stockApiUrl, stockApiToken} from '../constants.js';

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
        console.log(response);
        resolve(parseResponse(response.data.data[0])); // will always be first entry since always only requesting one stock
      })
      .catch((error) => {
        console.log("ERROR", error);
        resolve();
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
    name: response.name,
    price: response.price,
    symbol: response.symbol,
    stock_exchange: response.stock_exchange_short
  };
}
