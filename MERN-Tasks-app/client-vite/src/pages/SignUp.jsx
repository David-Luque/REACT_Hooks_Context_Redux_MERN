import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axios from 'axios';

export default function SignUp() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repeatPass, setRepeatPass ] = useState('');
    const [ alert, setAlert ] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if([ name, email, password, repeatPass ].includes('')) {
            setAlert({
                msg: 'All fields are required',
                error: true
            });
            return;
        }

        if(password.length < 6) {
            setAlert({
                msg: 'Passwords must have at least 6 characters',
                error: true
            });
            return;
        };

        if(password !== repeatPass) {
            setAlert({
                msg: 'Passwords must be identical',
                error: true
            });
            return;
        };

        setAlert({});

        //Create user on API
        try {
            const response = await axios.post('http://localhost/4000/api/users', { name, email, password });
            console.log(response);
        } catch(error) {
            console.log(error)
        }
        
    };

    const { msg } = alert;


    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl">
                Create your account to manage your {" "}
                <span className="text-slate-700">projects</span>
            </h1>

            { msg && <Alert {...alert} /> }

            <form 
                className="my-10 bg-white shadow rounded-lg p-10"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="name"
                    > Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="email"
                    > Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    > Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Your password here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="repeatPass"
                    > Repeat password
                    </label>
                    <input
                        id="repeatPass"
                        type="password"
                        name="repeatPass"
                        placeholder="Repeat your password here"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={repeatPass}
                        onChange={e => setRepeatPass(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Sign up" 
                    className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link 
                    to={"/"}
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Do you have an account? Login here
                </Link>
                {/* <Link 
                    to={"forget-pass"}
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                >
                    Forgot your password?
                </Link> */}
            </nav>
        </>
    );
};