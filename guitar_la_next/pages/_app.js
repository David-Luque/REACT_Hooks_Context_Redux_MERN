import { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  //we define here in "_app.js" a global state that will be available in all pages and components 
  const [ cart, setCart ] = useState([]);

  useEffect(()=>{
    const localStorageCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(localStorageCart);
  }, []);
  
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [ cart ]);

  //better create a function to pass on props that pass directly the setState function
  const addToCart = product => {
    if(cart.some(item => item.id === product.id)) {
      const updatedCart = cart.map(item => {
        if(item.id === product.id) {
          item.quantity = item.quantity + product.quantity
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([ ...cart, product ]);
    }
  };

  const updateQuantity = product => {
    const updatedCart = cart.map(item => {
      if(item.id === product.id) {
        item.quantity = product.quantity;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeProduct = id => {
    const updatedCart = cart.filter(item =>  item.id !== id)
    setCart(updatedCart)
  };



  //finally we pass the props to "Component"
  return <Component 
    {...pageProps} 
    cart={cart}  
    addToCart={addToCart}
    updateQuantity={updateQuantity}
    removeProduct={removeProduct}
  />
}

export default MyApp
