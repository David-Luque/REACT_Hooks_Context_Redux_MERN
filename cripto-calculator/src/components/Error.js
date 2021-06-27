import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
    text-align: center;
`;

const Error = ({ message })=>{
    return (
        <ErrorMessage> {message} </ErrorMessage>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;