import React from "react";
import "./architecture.css";
import DiagramCard from "../components/DiagramCard.js";

export default function Architecture() {     
    return (
        <div className='arch-container'>   
            <div className="arch-diagram"><DiagramCard /></div>
        </div>  
    );
}