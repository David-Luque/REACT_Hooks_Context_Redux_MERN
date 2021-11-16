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


const Footer = ({ title, siteName }) => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer
                css={css`
                    background-color: rgba(44,62,80);
                    margin-top: 5rem;
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
                    <Nav/>
                    
                    <HomeLink to={'/'}>
                        <h1> {siteName} </h1>
                    </HomeLink>

                </div>
            </footer>
            <p
                css={css`
                    text-align: center;
                    color: #FFF;
                    background-color: rgba(33,44,55);
                    margin: 0;
                    padding: 1rem;

                `}
            >{title} - All rights reserved&copy; - {year}</p>
        </>
    );
}
 
export default Footer;