import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    if(!project) return null;

    console.log(project)

    const [ actualProject ] = project;


    const handleSubmit = e => {
        e.preventDefault();

        //validate

        //pass validation

        //aggregate to task state

        //restart form
    };


    return (
        <div className="form">
            <form
                onSubmit={handleSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        name="name"
                        placeholder="Write task here"
                    />
                </div>
                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
        
    );
}
 
export default FormTask;