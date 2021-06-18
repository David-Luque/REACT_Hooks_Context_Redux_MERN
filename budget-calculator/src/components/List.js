import React from 'react';
import ExpenseCard from './ExpenseCard';
import PropTypes from 'prop-types';

const List = ({ expenses }) => (
    <div className="item-expenses">
        <h2>My expenses</h2>
        {expenses.map(expense => (
            <ExpenseCard
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
);

List.propTypes = {
    expenses: PropTypes.array.isRequired
}
 
export default List;