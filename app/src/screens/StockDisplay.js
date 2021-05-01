import React, { useEffect, useState } from "react";
import "./stockdisplay.css";
import { StocksEndpoint } from "../app/Constants";
import LineSimple from '../components/LineSimple';
import GraphToolbar from '../components/GraphToolbar';

export default function StockDisplay() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stocks, setStocks] = useState([]);
    const [ticker, setTicker] = useState(['TSLA']);
    const handleChange = (event) => { setTicker(event.target.value); }

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
              <GraphToolbar ticker={handleChange}/>
            </div>
            <div className="graph">
                <h3>{ticker}</h3>
                <LineSimple data={stocks}/>
                
            </div>
          </div>   
        );
    }
  }
  