import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext';



const NewAccount = () => {

    //extract context values
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;



    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        second_password: ''
    });
    const { username, email, password, second_password } = user

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
        if(
            username.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            second_password.trim() === ''
        ) {
            return showAlert('All fields are required', 'alert-error');
        }

        //password minimum 6 characters
        if(password.length < 6) {
            return showAlert('Password must be longer than 6 characters', 'alert-error');
        }

        //both passwords identical
        if(password !== second_password) {
            return showAlert('Both passwords must be identical', 'alert-error');
        }

        //pass to "action"

    };



    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Create account</h1>

                { alert 
                    ? (
                        <div className={`alert ${alert.category}`}>
                            {alert.msg}
                        </div>
                    ) 
                    : null
                }

                <form
                    onSubmit={handleSubmit}
                >

                    <div className="field-form">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            value={username}
                            onChange={handleChange}
                        />
                    </div>

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
                        <label htmlFor="second_password">Confirm password</label>
                        <input
                            type="password"
                            id="second_password"
                            name="second_password"
                            placeholder="Repeat your password"
                            value={second_password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Create account"
                        />
                    </div>
                </form>

                <Link to={"/"} className="link-account">
                    Do you already have an account?
                </Link>
            </div>
        </div>
        
    );
}
 
export default NewAccount;