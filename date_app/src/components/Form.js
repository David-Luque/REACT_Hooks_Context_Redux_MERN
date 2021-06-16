import React, { Fragment } from 'react'

const Form = () => {
    return (
        <Fragment>
            <h2>Date form</h2>
            <form>
                <label>Pet name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet name"
                />
                <label>Owner name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner name"
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                />
                <label>Description</label>
                <textarea
                    name="time"
                    className="u-full-width"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Apply</button>
            </form>
        </Fragment>
        
    );
}
 
export default Form;