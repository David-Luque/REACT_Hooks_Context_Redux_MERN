import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`;

const QuoteResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const QuoteText = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;


const Result = ({ totalQuote })=>{     
    return (
        (totalQuote === 0)
            ? <Message>Select model, year and plan</Message>
            : (
                <QuoteResult>
                    <TransitionGroup
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={totalQuote}
                            timeout={ {enter: 500, exit: 500} }
                        >
                            <QuoteText>Total: $<span>{totalQuote}</span></QuoteText>
                        </CSSTransition>
                    </TransitionGroup> 
                </QuoteResult>
            )
    );
};

Result.propTypes = {
    totalQuote: PropTypes.number.isRequired
};

export default Result;