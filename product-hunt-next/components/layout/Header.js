import React from 'react';
import SearchBar from '../ui/SearchBar';
import Nav from './Nav';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContainerHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem; 
`;

const Header = () => {
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--grey3);
                padding: 1rem 0;
            `}
        >
            <ContainerHeader>
                <div>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    <SearchBar/>
                    <Nav/>
                </div>
                <div>
                    <p>Hello David</p>
                    <button type="button">Logout</button>
                    
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign up</Link>
                </div>
            </ContainerHeader>
        </header>
     );
}
 
export default Header;