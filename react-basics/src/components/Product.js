import React from 'react'

const Product = ({ product, cart, setCart, products }) => {

    const { name, price, id } = product;

    const addProduct = id =>{
        const product = products.filter(product => product.id === id)[0]
        setCart([
            ...cart,
            product // also "...product" is valid
        ]);   
    };

    const deleteProduct = id => {
        const cartProducts = cart.filter(product => product.id !== id)
        setCart(cartProducts)
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            {products 
            ? <button
                    type="button"
                    onClick={ () => addProduct(id) }
                > Buy
                </button>
            :   <button
                    type="button"
                    onClick={ () => deleteProduct(id) }
                > Delete
                </button>
            }
        </div>
    );
}
 
export default Product;