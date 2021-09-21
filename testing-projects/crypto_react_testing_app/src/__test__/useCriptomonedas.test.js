import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Formulario'
import userEvent from '@testing-library/user-event';
import { currencies, cryptos } from '../__mocks__/criptomonedas';
import axios from 'axios';

const mockAxios = axios;
const guardarMoneda = jest.fn();
const guardarCriptomoneda = jest.fn();

test('<useCriptomonedas /> Component mounting', async ()=>{
    //get fake data with spy function on axios api call
    mockAxios.get = jest.fn().mockResolvedValue({
        data: cryptos
    });

    render(
        <Form 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
        />
    );

    //verify quantity of currencies options
    const currenciesDropdown = screen.getByTestId('currency-select');
    expect(currenciesDropdown.children.length).toEqual(currencies.length + 1);

    //verify quantity of crypto-currencies options
    const cryptoOptions = screen.findAllByTestId('crypto-option');
    expect(await cryptoOptions).toHaveLength(10);

    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    
    //select bitcoins and dollars on form select fields
    const currencySelect = screen.getByTestId('currency-select');
    const cryptoSelect = screen.getByTestId('crypto-select');
    userEvent.selectOptions(currencySelect, 'USD');
    userEvent.selectOptions(cryptoSelect, 'BTC');

    
    //form submit
    userEvent.click(screen.getByTestId('submit-btn'));
    //verify that functions has been called
    expect(guardarMoneda).toHaveBeenCalled();
    expect(guardarMoneda).toHaveBeenCalledTimes(1);
    expect(guardarCriptomoneda).toHaveBeenCalled();
    expect(guardarCriptomoneda).toHaveBeenCalledTimes(1);
});