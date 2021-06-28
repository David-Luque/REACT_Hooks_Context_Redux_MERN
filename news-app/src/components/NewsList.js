import React from 'react';
import NewCard from './NewCard';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (
    <div className="row">
        {news.map(item => (
            <NewCard
                key={item.url}
                info={item}
            />
        ))}
    </div>
);

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList;