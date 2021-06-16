import React from 'react';

function Header({ number, label }) { //desestructured props

    const age = 19;
    let message;

    if(age >= 18){
        message = 'Adult'
    } else {
        message = 'children'
    }
    
    return(
        <div>
            <h2 className="header"> Header </h2>
            <p>{message}</p>
            <p>Number: {number} - label: {label}</p>
        </div>
    )
}

export default Header;