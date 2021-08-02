//import react from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

const Heading = styled.h1`
  background-color: royalblue;
`;

export default function SecondPage() {
  return (
    <div>
      <Layout>
        <Heading>Second page</Heading>
      </Layout>
    </div>
  )
}
