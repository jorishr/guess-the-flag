import React from 'react';
import '../styles/flag.scss';

export default function Flag(props){
    const { flag } = props;
    if(!flag){
        return (
            <div className="loader-container">
                <p>Loading game data...</p>
                <div className="loader"></div>
            </div>
        )
    } else {    
        return (
            <div className="flag-container">
                <img src={flag} alt="country flag"/>
            </div>
        )
    }
}