import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Form = ({ createDate }) => {

    const [date, setDate] = useState({
        pet: '',
        owner: '',
        day: '',
        time: '',
        description: ''
    });

    const [error, setError] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setDate({
            ...date,
            [name]: value
        })
    }; 

    const {pet, owner, day, time, description} = date;

    const submitDate = e => {
        e.preventDefault();

        //verify inputs
        if(
            pet.trim() === '' ||
            owner.trim() === '' ||
            day.trim() === '' ||
            time.trim() === '' ||
            description.trim() === ''
        ){
            setError(true);
            return;
        }
        //Remove previous error message
        setError(false);

        //Assign unique ID
        date.id = uuidv4();

        //Create the date
        createDate(date);
        
        //Restart form
        setDate({
            pet: '',
            owner: '',
            day: '',
            time: '',
            description: ''
        });
    };

    return (
        <Fragment>
            <h2>Date form</h2>

            { error 
                ? <p className="alert-error">All fields are required</p>
                : null
            }

            <form
                onSubmit={submitDate}
            >
                <label>Pet name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Day</label>
                <input
                    type="date"
                    name="day"
                    className="u-full-width"
                    onChange={handleChange}
                    value={day}
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Description</label>
                <textarea
                    name="description"
                    className="u-full-width"
                    onChange={handleChange}
                    value={description}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Apply</button>
            </form>
        </Fragment>
        
    );
};

Form.propTypes = {
    createDate: PropTypes.func.isRequired
}
 
export default Form;