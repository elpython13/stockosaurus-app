import React, { useEffect, useState } from "react";
import { TickersEndpoint, StocksEndpoint } from "../app/Constants";
import LineSimple from '../components/LineSimple';


function StockDisplay() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stocks, setStocks] = useState([]);
    const [ticker, setTicker] = useState('TSLA');
    const handleChange = (event) => { setTicker(event.target.value) }

    useEffect(
        () => {
            fetch(StocksEndpoint + '?ticker=' + ticker)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setStocks(result.results);
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [ticker])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
          <div className="stocks-container">
            <div className="graph-toolbar">
              <h3>graph toolbar component</h3>
              <form >
                <label>Name:
                <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="graph">
                <h3>graph component</h3>
                <LineSimple data={stocks}/>
                {stocks.map(stock => <div>{stock.date} price: {stock.low}</div>)}
            </div>

          </div>
        );
    }
  }


export default StockDisplay
