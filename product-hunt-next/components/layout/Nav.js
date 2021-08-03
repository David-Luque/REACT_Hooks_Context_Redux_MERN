import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return ( 
        <nav>
            <Link href="/">Home</Link>
            <Link href="/popular">Most popular</Link>
            <Link href="/newProduct">New product</Link>
        </nav>
     );
}
 
export default Nav;