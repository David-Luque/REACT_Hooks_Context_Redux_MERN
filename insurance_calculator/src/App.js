import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormComtainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resume, setResume] = useState({
    totalQuote: 0,
    data: {
      model: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);


  const { totalQuote, data } = resume;

  return (
    <Container className="App">
      <Header
        title= "Insurance calculator"
      />
      <FormComtainer>
        <Form
          setResume={setResume}
          setLoading={setLoading}
        />

        {loading ? <Spinner/> : null}


        {!loading && 
          <Resume
            data={data}
          />
        }
        
        {!loading && 
          <Result
            totalQuote={totalQuote}
          />
        }
      </FormComtainer>
    </Container>
  );
}

export default App;
