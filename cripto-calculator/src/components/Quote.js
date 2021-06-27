import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 30px
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Price = styled.span`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;


const Quote = ({ result }) => {
    
    if(Object.keys(result).length === 0) return null;

    return (
        <Container>
            <Price> Actual price: <span>{result.PRICE}</span> </Price>
            <Info> Daily high price: <span>{result.HIGHDAY}</span> </Info>
            <Info> Daily lower price: <span>{result.LOWDAY}</span> </Info>
            <Info> Latest 24h variation: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info> Last update: <span>{result.LASTUPDATE}</span> </Info>
        </Container>
    );
}
 
export default Quote;