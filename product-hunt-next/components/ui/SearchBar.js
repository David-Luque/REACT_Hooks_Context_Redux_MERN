import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Router from 'next/router'; //better than import { useRouter } because we need to pass some values

const InputText = styled.input`
    border: 1px solid var(--grey3);
    padding: 1rem;
    min-width: 300px;
    border-radius: 5px;
`;

const ButtonSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: cover;
    background-image: url('/static/img/search-icon2.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 5px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover {
        cursor: pointer;
    }
`;

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const searchProduct = e => {
        e.preventDefault();
        if(search.trim() === '') return;
        
        //redirect user to "/search" page and send query to search component
        Router.push({
            pathname: '/search',
            query: {q : search}
        });
    };

    return ( 
        <form
            css={css`
                position: relative;
            `}
            onSubmit={searchProduct}
        >
            <InputText 
                type="text"
                placeholder="Search products"
                onChange={e => setSearch(e.target.value)}
            />
            <ButtonSubmit type="submit">Search</ButtonSubmit>
        </form>
     );
}
 
export default SearchBar;