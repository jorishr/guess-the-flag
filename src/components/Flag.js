import React from 'react';
import imgWorld from '../world.jpg';
import '../styles/flag.scss';

export default function Flag(props){
    const { flag } = props;
    if(!flag){
        return (
        <div className="flag-container">
            <img src={imgWorld} alt="world"/>
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