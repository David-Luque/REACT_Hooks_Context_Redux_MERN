import React, { Fragment } from 'react';

const NewProject = () => {
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >
                New project
            </button>

            <form
                className="form-new-project"
            >
                <input
                    type="text"
                    name="name"
                    className="input-text"
                    placeholder="Project name"

                />
                
                <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Add project"
                />
            </form>
        </Fragment>  
    );
}
 
export default NewProject;