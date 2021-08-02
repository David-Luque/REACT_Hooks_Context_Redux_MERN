//import react from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

const Heading = styled.h1`
  background-color: coral;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Heading>HOME</Heading>
      </Layout>
    </div>
  )
}
