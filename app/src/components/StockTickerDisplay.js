import React, { useEffect, useState } from "react";

function StockTickerDisplay() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tickers, setTickers] = useState([]);

    useEffect(
        () => {
            fetch("http://127.0.0.1:8000/stocks/tickers/")
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
