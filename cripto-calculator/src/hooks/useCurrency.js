import React, { Fragment, useState } from 'react';

const useCurrency = ()=>{

    //custom hook state
    const [state, setState] = useState('')
    
    const Select = ()=>(
        <Fragment>
            <label>Currency</label>
            <select>
                <option value="MXN">Mexican peso</option>
            </select>
        </Fragment>
    );

    return [state, setState, Select];
};

export default useCurrency;