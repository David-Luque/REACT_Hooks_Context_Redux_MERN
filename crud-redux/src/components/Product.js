import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ productInfo }) => {

    const { name, price, id } = productInfo;

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price} </span></td>
            <td className="actions">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >Remove</button>
            </td>
        </tr> );
}
 
export default Product;