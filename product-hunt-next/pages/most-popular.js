import React from 'react';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/layout/';
import styled from '@emotion/styled';
import useProducts from '../hooks/useProducts';

const Heading = styled.h1`
  background-color: coral;
`;

export default function MostPopular() {
  
  const { products } = useProducts('votes');
  
  return (
    <div>
      <Layout>
        <div className="products-list">
          <div className="container">
            <ul className="bg-white">
              {products.map(product => (
                <ProductDetails
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
};