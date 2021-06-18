import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)

    const addExpense = e => {
        e.preventDefault();

        //validate
        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true);
            return;
        }
        //create expense
        setError(false);
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        //pass up to parent component
        setExpense(expense);
        setCreateExpense(true);
        
        //reset form
        setName('');
        setQuantity(0);
    };

    return (
        <form
        onSubmit={addExpense}
        >
            <h2>Add expense</h2>

            {error ? <Error message="Error: Invalid quantity or empty name" /> : null}

            <div className="field">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="i.e. Transport"
                    value={name}
                    onChange={ e => setName((e.target.value))}
                />
            </div>
            <div className="field">
                <label>Expense quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="i.e. 150"
                    value={quantity}
                    onChange={ e => setQuantity( parseInt(e.target.value, 10) )}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add"
            />
        </form>
    );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}
 
export default Form;