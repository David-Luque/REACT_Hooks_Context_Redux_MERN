import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, options)=>{

    //custom hook state
    const [state, setState] = useState(initialState)
    
    const Select = ()=>(
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">-- Select currency --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    );

    return [state, setState, Select];
};

export default useCurrency;