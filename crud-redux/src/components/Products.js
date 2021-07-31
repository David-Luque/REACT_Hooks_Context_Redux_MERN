import React, { Fragment, useEffect } from 'react';
import Product from './Product';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';


const Products = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        //api call
        const getProducts = () => dispatch( getProductsAction() );
        getProducts();
    }, []);

    //obtain state values
    const products = useSelector(state => state.products.products) 
    //console.log(products)
    const error = useSelector(state => state.products.error)
    const loading = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">
                Products list
            </h2>

            {error ? (
                <p className="font-weight-bold alert alert-danger text-center mt-4">
                    There was an error
                </p>
            ) : null}

            {loading ? <p className="text-center">Loading...</p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? 'Not products yet' : (
                        products.map(product => (
                            <Product 
                                key={product.id} 
                                productInfo={product}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
        
    );
}
 
export default Products;