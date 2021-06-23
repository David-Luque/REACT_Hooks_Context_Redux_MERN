import React, { useState } from 'react';

const Form = () => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    });
    const [error, setError] = useState(false);

    const { city, country } = search;

    const handleChange = e => {
        const { name, value } = e.target;
        setSearch({
            ...search,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
    };


    return ( 
        <form
            onSubmit={handleSubmit}
        >

        {error && <p className="red darken-4 error">All fields are required</p>}

            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Seach weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Form;