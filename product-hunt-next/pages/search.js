import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import ProductDetails from '../components/layout/ProductDetails';
import useProducts from '../hooks/useProducts';


const Search = () => {
  
  const router = useRouter();
  const { query: { q } } = router;

  const { products } = useProducts('createdAt');

  const [ searchResult, setSearchResult ] = useState([]);
   
  useEffect(()=>{
    const search = q.toLowerCase();
    const filterProducts = products.filter(product => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.enterprise.toLowerCase().includes(search)
      )
    });
    setSearchResult(filterProducts);
  }, [q, products]);


  return (
    <div>
      <Layout>
        <div className="products-list">
          <div className="container">
            <ul className="bg-white">
              {searchResult.map(product => (
                <ProductDetails
                  key={product.id}
                  {...product}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}; 

export default Search;