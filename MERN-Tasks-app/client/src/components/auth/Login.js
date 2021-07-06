import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        //validate empty fields

        //pass to "action"

    };



    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Login</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Login"
                        />
                    </div>
                </form>

                <Link to={"/new-account"} className="link-account">
                    Create new account
                </Link>
            </div>
        </div>
        
    );
}
 
export default Login;