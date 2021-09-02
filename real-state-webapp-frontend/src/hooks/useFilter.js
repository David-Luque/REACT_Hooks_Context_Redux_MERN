import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Form = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;

`;


const useFilter = () => {

    const [ category, setCategory ] = useState('');

    const { categories } = useStaticQuery(graphql`
        query {
            categories: allStrapiCategories {
                nodes {
                    name
                    id
                }
            }
        }
    `);

    const FilterUI = () => (
        <Form>
            <Select
                onChange = { e => {setCategory(e.target.value)} }
                value={category}
            >
                <option value="">-- filter --</option>
                {categories.nodes.map(option => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </Select>
        </Form>
    );

    return {
        category,
        FilterUI
    }
}
 
export default useFilter;