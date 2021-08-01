import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productActions';

const Product = ({ productInfo }) => {

    const dispatch = useDispatch();
    const history = useHistory(); //enable history to redirect

    //confirm if user want to remove
    const confirmRemoveProduct = id => {
        //check from user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                //pass to action
                dispatch(deleteProductAction(id));
            }
        })
    };

    const { name, price, id } = productInfo;

    //function to redirect to edit
    const redirectEdit = product => {
        dispatch(getProductEdit(product))
        history.push(`/products/edit/${product.id}`)
    };

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price} </span></td>
            <td className="actions">
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={()=>{redirectEdit(productInfo)}}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>confirmRemoveProduct(id)}
                >Remove</button>
            </td>
        </tr> );
}
 
export default Product;