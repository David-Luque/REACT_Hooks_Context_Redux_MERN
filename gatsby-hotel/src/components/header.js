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


const Header = () => {
    return (
        <header
            css={css`
                background-color: #333;
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
                    <h1>Gatsby hotel</h1>
                </HomeLink>
                
                <Nav/>

            </div>
        </header>
    );
}
 
export default Header;