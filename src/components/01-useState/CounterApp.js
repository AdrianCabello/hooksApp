import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
    })

    const { counter1, counter2 } = state;

    const add = () => {
        setState({
            ...state, counter1: counter1 + 1
        })
    };

    return (
        <>
            <h1> Counter {counter1} {counter2}</h1>
            <hr />
            <button className='btn btn-primary' onClick={add} >Boton </button>
        </>
    )
}