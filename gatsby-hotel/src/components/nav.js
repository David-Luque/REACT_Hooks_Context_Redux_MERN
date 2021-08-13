import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media(min-width: 768px) {
        padding-bottom: 0;
    }
`;

//styling an existent component
const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.actual-page {
        border-bottom: 2px solid #FFFFFF;
    }
`

const Nav = ()=>{
    return (
        <Navigation>

            <NavLink to={'/'} activeClassName="actual-page"> 
                Home 
            </NavLink>
            <NavLink to={'/aboutUs'} activeClassName="actual-page"> 
                We page 
            </NavLink>

        </Navigation>
    )
};

export default Nav;