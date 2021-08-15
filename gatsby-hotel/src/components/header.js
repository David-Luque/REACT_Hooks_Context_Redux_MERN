import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Nav from './nav';


const HomeLink = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;


const Header = ({ siteName }) => {
    return (
        <header
            css={css`
                background-color: rgba(44,62,80);
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media(min-width:768px) {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                `}
            >
                <HomeLink to={'/'}>
                    <h1> {siteName} </h1>
                </HomeLink>
                
                <Nav/>

            </div>
        </header>
    );
}
 
export default Header;