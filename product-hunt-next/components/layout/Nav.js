import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../firebase';

const Navi = styled.nav`
    padding-left: 2rem;
    
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--grey2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;


const Nav = () => {

    const { user } = useContext(FirebaseContext);


    return ( 
        <Navi>
            <Link href="/">Home</Link>
            <Link href="/most-popular">Most popular</Link>
            {user && (
                <Link href="/new-product">New product</Link>
            )}
        </Navi>
     );
}
 
export default Nav;