import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    
    &:not(:last-of-type) {
        margin-right: 1rem;
    }

    &.actual-page {
        border-bottom: 2px solid #FFF;
        padding-bottom: 0;
    }
`;


const Navigation = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName="actual-page"> 
                Home 
            </NavLink>
            <NavLink to={'/aboutUs'} activeClassName="actual-page"> 
                About us 
            </NavLink>
            <NavLink to={'/properties'} activeClassName="actual-page"> 
                Properties 
            </NavLink>
        </Nav>
     );
}
 
export default Navigation;