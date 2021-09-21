import { readFileSync } from 'fs'; //to read a file
import path from 'path'; //to return a file path

export const cryptos = JSON.parse(
    readFileSync(path.join(__dirname, 'crypto_api.json')).toString()
);

export const currencies = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
];