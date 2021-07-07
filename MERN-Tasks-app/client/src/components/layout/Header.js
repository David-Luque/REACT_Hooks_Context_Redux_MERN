import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <p className="user-name"> Hello <span>David</span> </p>
            <nav className="nav-main">
                <a href="#!">Log out</a>
            </nav>
        </header>
    );
}
 
export default Header;