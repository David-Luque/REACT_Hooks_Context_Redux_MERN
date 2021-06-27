import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptos.png';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;


function App() {

  const [currency, setCurrecy] = useState('');
  const [cripto, setCripto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const sendRequest = async ()=>{
      if(currency === '' || cripto === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`
      const result = await axios.get(url);
      
      //show spinner
      setLoading(true);

      //hide spinner and show result
      setTimeout(()=>{
        setLoading(false)
        setResult(result.data.DISPLAY[cripto][currency]);
      }, 2000);
    };

    sendRequest();

  }, [currency, cripto]);


  const component = (loading) ? <Spinner/> : <Quote result={result} /> ;

  return (
    <Container className="App">
      <div>
        <Image
          src={image}
          alt="Criptos image"
        />
      </div>
      <div>
        <Heading>Cryptocurrency trading values</Heading>

        <Form
          setCurrecy={setCurrecy}
          setCripto={setCripto}
        />

        {component}

      </div>
    </Container>
  );
}

export default App;
