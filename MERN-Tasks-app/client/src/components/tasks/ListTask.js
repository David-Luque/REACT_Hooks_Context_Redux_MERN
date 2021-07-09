import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTask = () => {

    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    if(!project) return <h2>Select any project</h2>;

    const [ actualProject ] = project;

    const deleteCurrentProject = ()=>{
        deleteProject(actualProject.id)
    };

    return (
        <Fragment>
            <h2>Project: {actualProject.name}</h2>
            {/* <ul className="list-tasks">
                {projectTasks.length === 0
                    ? (<li className="task"> <p>No peanding tasks</p> </li>)
                    : projectTasks.map(task => (
                        <Task taskInfo={task} />
                    ))
                }
            </ul> */}

            <button
                type="button"
                className="btn btn-delete"
                onClick={deleteCurrentProject}
            >
                Delete project &times;
            </button>
        </Fragment>
        
    );
}
 
export default ListTask;