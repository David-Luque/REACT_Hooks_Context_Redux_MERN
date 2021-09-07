import React from 'react';

const Header = () => {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <img className="w-64 mb-8 md:mb-0" src="logo.svg" alt="Home logo" />
        </header>
    );
}
 
export default Header;