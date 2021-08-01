import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';

const EditProduct = () => {

    const [editedProduct, setEditedProduct] = useState({
        name: '',
        price: ''
    });

    const history = useHistory();
    const dispatch = useDispatch();
    //PRODUCT TO EDIT
    const productToEdit = useSelector(state => state.products.editProduct);
    //console.log(product)

    // FILL PRODUCT IN STATE
    useEffect(()=>{
        setEditedProduct(productToEdit)
    }, [productToEdit]);

    const { name, price } = editedProduct;


    const handleChange = e => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value
        })
    };

    const submitEditProduct = async e => {
        e.preventDefault();
        await dispatch(editProductAction(editedProduct));
        // not redirect until data has been updated
        history.push('/');
    };


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit product
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label>Product name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Product name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price (€)</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Product price"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div> 
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Save changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;