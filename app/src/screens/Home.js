import React, { useEffect, useState } from "react";
import './home.css';
import { StocksEndpoint } from "../app/Constants";
import LineSimple from '../components/LineSimple';
import NewsCard from "../components/NewsCard";
import DetailedLook from "../components/DetailedLook";

     
export default function Home() {
    
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
            <div className='home-container'>
                <div className="home-dashboard">home-dashboard</div>       
                <div className='home-graph'>
                    <h3>{ticker}</h3>
                    <LineSimple data={stocks}/>
                </div>
                <div className="detailed-look"><DetailedLook /></div>
                <div className="newscard-1"><NewsCard /></div>
                <div className="newscard-2"><NewsCard /></div>
                <div className="newscard-3"><NewsCard /></div>
            </div>  
        );
    }
}
