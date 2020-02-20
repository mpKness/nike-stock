import {useStockAPI} from '.';

import {renderHook, act} from '@testing-library/react-hooks';

const axiosMock = jest.fn();
axiosMock.mockReturnValue({
    "symbols_requested": 1,
    "symbols_returned": 1,
    "data": [
        {
            "symbol": "SNAP",
            "name": "Snap Inc.",
            "currency": "USD",
            "price": "16.62",
            "price_open": "17.09",
            "day_high": "17.39",
            "day_low": "16.60",
            "52_week_high": "19.76",
            "52_week_low": "9.13",
            "day_change": "-0.58",
            "change_pct": "-3.37",
            "close_yesterday": "17.20",
            "market_cap": "23603558400",
            "volume": "12223148",
            "volume_avg": "19127328",
            "shares": "1160130048",
            "stock_exchange_long": "New York Stock Exchange",
            "stock_exchange_short": "NYSE",
            "timezone": "EST",
            "timezone_name": "America/New_York",
            "gmt_offset": "-18000",
            "last_trade_time": "2020-02-20 12:12:00",
            "pe": "N/A",
            "eps": "-0.75"
        }
    ]
});

describe('useStockAPI', () => {
  it('should call axios with stock name, parse the payload from axios, then send the stock details to the given state function', () => {
    const stockName = 'SNAP';
    const state = {};
    const useStateMock = (newState => {state = newState});
    renderHook(() => useStockAPI(stockName, useStateMock, axiosMock));
    expect(state).toEqual({symbol: 'SNAP', name: 'Snap Inc.', price: '16.62', stock_exhange: 'NYSE'});
  });
});
