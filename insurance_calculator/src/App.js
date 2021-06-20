import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

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
  return (
    <Container className="App">
      <Header
        title= "Insurance calculator"
      />
      <FormComtainer>
        <Form/>
      </FormComtainer>
    </Container>
  );
}

export default App;
