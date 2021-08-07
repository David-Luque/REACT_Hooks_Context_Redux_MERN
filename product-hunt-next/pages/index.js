import React, { useEffect, useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/layout/ProductDetails';
import { FirebaseContext } from '../firebase';
import styled from '@emotion/styled';

const Heading = styled.h1`
  background-color: coral;
`;

export default function Home() {
  
  const [ products, setProducts ] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(()=>{
    const getProducts = ()=>{
      firebase.db
        .collection('products')
        .orderBy('createdAt', 'desc')
        .onSnapshot(handleSnapshot)
    };
    getProducts();
  }, []);

  function handleSnapshot(snapshot) {
    const products = snapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    });
    setProducts(products);
  };

  
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