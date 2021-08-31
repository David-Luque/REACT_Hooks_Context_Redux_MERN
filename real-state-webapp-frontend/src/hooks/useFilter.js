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
            <Select>
                <option value="">-- filter --</option>
                {categories.nodes.map(category => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </Select>
        </Form>
    );

    return {
        FilterUI
    }
}
 
export default useFilter;