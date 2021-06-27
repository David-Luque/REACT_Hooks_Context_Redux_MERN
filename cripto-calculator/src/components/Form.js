import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCriptoCurrency from '../hooks/useCriptoCurrency';
import Error from './Error';
import PropTypes from 'prop-types';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
        transition: background-color .3s ease;
    }
`;

const Form = ({ setCurrecy, setCripto }) => {

    const [criptoList, setCriptoList] = useState([]);
    const [error, setError] = useState(false);

    const CURRENCIES = [
        {code: 'USD', name: 'US Dolar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'GBP', name: 'British pound sterline'}
    ]

    const [currency, SelectCurrency] = useCurrency('Choose currency', '', CURRENCIES);
    const [cripto, SelectCripto] = useCriptoCurrency('Choose cripto', '', criptoList);


    //execute API call
    useEffect(()=>{
        const apiCall = async ()=>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const result = await axios.get(url)

            setCriptoList(result.data.Data);
        };
        apiCall();
    }, []);


    const handleSubmit = e => {
        e.preventDefault();

        if(currency === '' || cripto === ''){
            setError(true);
            return;
        }

        setError(false)

        setCurrecy(currency)
        setCripto(cripto)
        
    };


    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error message="All fields are required" /> : null}

            <SelectCurrency/>
            <SelectCripto/>
            <Button
                type="submit"
                value="Convert"
            />
        </form>
    );
}

Form.propTypes = {
    setCurrecy: PropTypes.func.isRequired,
    setCripto: PropTypes.func.isRequired
}
 
export default Form;