import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCurrency = (label, initialState, options)=>{

    //custom hook state
    const [state, setState] = useState(initialState)
    
    const SelecCurrency = ()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Select currency --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, SelecCurrency];
};

export default useCurrency;