import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//action from redux
import { createNewProductAction } from '../actions/productActions';
import { showAlertAction, hideAlertAction } from '../actions/alertActions';


const NewProduct = ({history}) => {
    //component local state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    //Use "useDispatch" to create a function
    const dispatch = useDispatch();

    //acces to store's state
    const loading = useSelector( state => state.products.loading )
    const error = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alerts.alert)
    //productAction's action call 
    const addProduct = product => dispatch(createNewProductAction(product));

    //when user submit
    const submitNewProduct = e => {
        e.preventDefault();
        //validate form
        if(name.trim() === '' || price <= 0) {
            const alert = {
                msg: 'All fields are required',
                category: 'alert alert-danger text-center text-uppercase p3'
            }
            return dispatch(showAlertAction(alert));
        }
        //if no errors
        dispatch(hideAlertAction());
        //Create new product
        addProduct({
            name,
            price
        });
        //redirect
        history.push('/');
    };


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add new product
                        </h2>

                        {alert && (<p className={alert.category}> {alert.msg} </p>) }

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Product name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Product name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Product price"
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div> 
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Confirm
                            </button>
                        </form>

                        { loading ? <p>Loading...</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error</p> : null }

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;