import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';

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

const Form = () => {

    const CURRENCIES = [
        {code: 'USD', name: 'US Dolar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'GBP', name: 'British pound sterline'}
    ]

    const [currency, setCurrency, SelectCurrency] = useCurrency('Choose currency', '', CURRENCIES);


    return (
        <form>

            <SelectCurrency/>

            <Button
                type="submit"
                value="Convert"
            />
        </form>
    );
}
 
export default Form;