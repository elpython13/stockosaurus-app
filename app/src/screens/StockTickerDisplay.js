import React, { useEffect, useState } from "react";
import { TickersEndpoint } from "../app/Constants";

function StockTickerDisplay() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tickers, setTickers] = useState([]);

    useEffect(
        () => {
            fetch(TickersEndpoint)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setTickers(result.results);
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>{tickers.map(ticker => <div>{ticker.ticker_symbol}</div>)}</div>
        );
    }
}

export default StockTickerDisplay;
