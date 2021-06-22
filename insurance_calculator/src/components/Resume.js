import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { capitalWord } from '../helper';

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resume = ({ data }) => {
    
    const {model, year, plan } = data

    if(model === '' || year === '' || plan === '') {
        return null
    }
    
    return (
        <ResumeContainer>
           <h2>Quote resume</h2>
           <ul>
               <li>Model: {capitalWord(model)}</li>
               <li>Year: {year}</li>
               <li>Plan: {capitalWord(plan)}</li>
           </ul>
        </ResumeContainer>
        
    );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Resume;