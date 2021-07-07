import React, { Fragment, useState } from 'react';

const NewProject = () => {

    const [project, setProject] = useState({
        name: ''
    });
    const { name } = project;

 
    const handleChange = e => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        //validate

        //aggregate to state

        //restart form
    };


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
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    className="input-text"
                    placeholder="Project name"
                    value={name}
                    onChange={handleChange}
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