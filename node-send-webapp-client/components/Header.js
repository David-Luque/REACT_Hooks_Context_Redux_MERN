import React, { useContext } from 'react';
import Link from 'next/link';
import authContext from '../context/auth/authContext';

const Header = () => {

    const AuthContext = useContext(authContext);
    const { authenticated, user, signOut } = AuthContext;

    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img className="w-64 mb-8 md:mb-0" src="logo.svg" alt="Home logo" />
            </Link>
            
            <div>
                { authenticated ? (
                    <div className="flex items-center">
                        <p className="mr-3">Hello {user.name}</p>
                        <button
                            type="button"
                            className="bg-black px-5 py-3 rounded text-white font-bold uppercase"
                            onClick={() => signOut()}
                        >Close sesison </button>
                    </div>
                ) : (
                    <>
                        <Link href="/login">
                            <a className="bg-red-500 px-5 py-3 rounded text-white font-bold uppercase mr-3">
                                Login
                            </a>
                        </Link>
                        <Link href="/signup">
                            <a className="bg-black px-5 py-3 rounded text-white font-bold uppercase">
                                Sign up
                            </a>
                        </Link>
                    </>
                ) }
            </div>
        </header>
    );
}
 
export default Header;