import React, { useState, useEffect } from 'react';
import Display from './Display';
import Flag from './Flag';

export default function Game(props){
    //state
    const [countryList, setCountrList] = useState([]);
    const [options, setOptions] = useState([]);
    const [target, setTarget] = useState({});
    const [answer, setAnswer] = useState(undefined)
 
    useEffect(() => {
        function getGameData(){
            const countryList = [];
            fetchData().then(list => {
                list.map(e => countryList.push(e))
                const options = pickRandomCountries(countryList, 4);
                const target  = options[Math.floor(Math.random() * options.length)];
                setOptions(options);
                setTarget(target);
            });
        } 
        getGameData()
    }, [countryList])
    //game logic
    async function fetchData(){
        const url = 'https://restcountries.eu/rest/v2/all'
        let response = await fetch(url);
        if(response.ok){
            return await response.json();
        } else return console.log(`HTTP Error: ${response.status}`);
    }

    function pickRandomCountries(arr, n){
        let result = [];
        while(result.length < n){
            const random = Math.floor(Math.random() * arr.length);
            const pick = arr[random];
            if(!result.includes(arr[random])){
                result.push(pick);
            }
        }
        return result;
    }
    //event handlers
    function handleAnswer(e){
        e.target.innerText === target.name ?
            setAnswer('correct') :
            setAnswer('wrong');
    }
    function handleReset(){
        setAnswer('')
        setTarget(undefined)
        setCountrList([])
    }
    //render
    if(!target){
        return <div>Loading...</div>
    } else {
        const { flag, name } = target;
        return (
        <>
            <Display    options={options} 
                        answer={answer}
                        targetName={name} 
                        handleAnswer={handleAnswer}
                        handleReset={handleReset}/>
            <Flag flag={flag}/>
        </>
        )
    }
}