import React from 'react';
import PropTypes from 'prop-types';

const ExpenseCard = ({ expense }) => (
    <li className="expenses">
        <p>
            {expense.name}
            <span className="expense">$ {expense.quantity}</span>
        </p>
    </li>
);

ExpenseCard.propTypes = {
    expense: PropTypes.object.isRequired
}
 
export default ExpenseCard;