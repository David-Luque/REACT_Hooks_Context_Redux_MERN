import React from 'react';
import Product from './Product';
import './cart.css';

const Cart = ({ cart, setCart }) => (
    <div className="cart">
        <h2>Shopping cart</h2>
        {cart.length === 0
        ?   <p>Your cart is empty</p>
        :   cart.map(item => (
            <Product 
                key={item.id}
                product={item}
                cart={cart}
                setCart={setCart}
            />
            ))
        }
    </div>
);
 
export default Cart;