import React from 'react';

const Climate = ({ result }) => {
    
    const { name, main } = result;

    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather in {name}:</h2>
                <p className="temperature">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p> Highest: 
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p> Lower: 
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}
 
export default Climate;