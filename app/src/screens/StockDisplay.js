import React, { useEffect, useState } from "react";

function StockDisplay() {
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
          <div className="stocks-container">
            <div className="graph-toolbar">
              <h3>graph toolbar component</h3>
            </div>
            <div className="graph">
                <h3>graph component</h3>
                {tickers.map(ticker => <div>{ticker.ticker_symbol}</div>)}
            </div>

          </div>
        );
    }
}

export default StockDisplay;
