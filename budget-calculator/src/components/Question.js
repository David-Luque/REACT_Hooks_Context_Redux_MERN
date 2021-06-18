import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {

    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false);

    const setBudgetQuantity = e => {
        e.preventDefault();

        //validate
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            return;
        }

        //action if valid
        setError(false)
        setBudget(quantity);
        setRemaining(quantity);
        setShowQuestion(false);
    };

    return (
        <Fragment>
            <h2>Choose quantity</h2>

            {error ? <Error message="Quantity in invalid" /> : null }

            <form
                onSubmit={setBudgetQuantity}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your quantity here"
                    onChange={ e => setQuantity( parseInt(e.target.value, 10) ) }
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Confirm"
                />
            </form>
        </Fragment>
    );
}

Question.propTypes = { 
    setBudget: PropTypes.func.isRequired, 
    setRemaining: PropTypes.func.isRequired, 
    setShowQuestion: PropTypes.func.isRequired
}
 
export default Question;