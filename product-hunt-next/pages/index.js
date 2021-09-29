import React from 'react';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/layout/ProductDetails';
import useProducts from '../hooks/useProducts';
import styled from '@emotion/styled';

const Heading = styled.h1`
  background-color: coral;
`;

export default function Home() {

  const { products } = useProducts('createdAt');
  
  return (
    <div>
      <Layout>
        <div className="products-list">
          <div className="container">
            <ul className="bg-white">
              {products.map(product => {
                console.log(product)
                return (
                  <div key={product.id}>
                    <p> Product </p>
                    <ProductDetails
                      product={product}
                    />
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
};