import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    if(!project) return null;

    const [ actualProject ] = project;


    return (
        <div className="form">
            <form>
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