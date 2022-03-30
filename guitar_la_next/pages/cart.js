import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import styles from '../styles/Cart.module.css'
import Image from 'next/image';

export default function Cart({ cart, updateQuantity, removeProduct }) {

    const [ total, setTotal ] = useState(0);
    
    useEffect(()=>{
        const totalCost = cart.reduce((total, product) => { 
            return total + (product.quantity * product.price);
        }, 0)
        setTotal(totalCost);
    }, [ cart ])



    return (
        <Layout page={"Shop cart"}>
            <h1 className="heading">
                Shoping cart
            </h1>
            <main className={`container ${styles.content}`}>
                <div className={styles.cart}>
                    <h2>Articles</h2>
                    {cart.length === 0 ? "Your cart is empty" : (
                        cart.map(product => (
                            <div key={cart.id} className={styles.product}>
                                <div>
                                   <Image 
                                        layout="responsive" 
                                        width={200} 
                                        height={430} 
                                        src={product.image} 
                                        alt={`${product.name} guitar img`}
                                    />
                                </div>
                                <div>
                                    <p className={styles.name}> {product.name} </p>
                                    <div className={styles.quantity}>
                                        <p>Quantity:</p>
                                        <select 
                                            value={product.quantity}
                                            className={styles.select}
                                            onChange={e => updateQuantity({
                                                quantity: e.target.value,
                                                id: product.id
                                            })}
                                        >
                                            <option value="1"> 1 </option>
                                            <option value="2"> 2 </option>
                                            <option value="3"> 3 </option>
                                            <option value="4"> 4 </option>
                                            <option value="5"> 5 </option>
                                        </select>
                                    </div>
                                    
                                    <p className={styles.price}> $ <span>{product.price}</span> </p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{product.price * product.quantity}</span></p>
                                </div>
                                <button 
                                    type="button" 
                                    className={styles.delete_btn}
                                    onClick={()=>{removeProduct(product.id)}}
                                > X </button>
                            </div>  
                        ))
                    )}
                </div>
                <div className={styles.resume}>
                    { total > 0 ? (
                        <>
                            <h3>Order resume</h3>
                            <p>Order resume</p>
                            <p>Total to pay: $ {total}</p>
                        </>
                    ) : (
                        <p>Your cart is empty </p>
                    )}
                </div>
            </main>
        </Layout>
    );
};