import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
           <div className="container ">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD - React, Redux, Rest API & Axios
                    </Link>
                    
                </h1>
            </div> 
            <Link 
                to={"/products/add"}
                className="btn btn-danger new-post d-block d-md-inline-block"
            > 
                Add product &#43;
            </Link>
        </nav>
    );
}
 
export default Header;