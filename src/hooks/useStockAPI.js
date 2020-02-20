import {useEffect} from 'react';
import axios from 'axios';
import {stockApiUrl, stockApiToken} from '../constants.js';

/**
 * given a stock name (the symbol), will fetch deatiled information on the stock from an external api
 * will then parse off only the information that will be used by the rest of the application and send
 * it to the given useState function
 * @param  {string} stockName     the stock name, symbol
 * @param  {function} updateState   updates the application state for stock details
 * @param  {object} [axios=axios] library for making an external call
 * @return {Null}
 */
export const useStockAPI = (stockName, updateState, axios=axios) => {
  const fullStockUrl = stockApiUrl + '?symbol=' + stockName + '&api_token=' + stockApiToken;
  useEffect(() => {
    axios.get(fullStockUrl)
      .then((response) => {
        updateState(parseResponse(response.data[0])); // will always be first entry since always only requesting one stock
      })
      .catch((error) => {
        console.log("ERROR", error);
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
