import React, { Fragment, useState  } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {

  //PRODUCTS LIST STATE
  const [ products, setProducts ] = useState([
    {id: 1, name: "shirt", price: 25},
    {id: 2, name: "console", price: 315},
    {id: 3, name: "phone", price: 145},
    {id: 4, name: "food", price: 75},
    {id: 5, name: "book", price: 15}
  ]);

  //SHOPING CART STATE
  const [ cart, setCart ] = useState([]);

  
  const date = new Date().getFullYear();


  return (
    <Fragment>
      <h1>Shopping app</h1>
      <Header
        number={15}
        label="15"
      />

      <h2>Product list</h2>
      {products.map(product => (
        <Product
          key={product.id}
          products={products}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
 
      <Cart
        cart={cart}
        setCart={setCart}
      />

      <Footer 
        date={date}
      />
    </Fragment>
  );
}

export default App;
