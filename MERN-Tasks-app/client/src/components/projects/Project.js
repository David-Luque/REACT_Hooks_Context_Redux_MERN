import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ projectInfo }) => {

    const projectsContext = useContext(projectContext);
    const { getActualProject } = projectsContext;


    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=>{getActualProject(projectInfo.id)}}
            >
                {projectInfo.name}
            </button>
        </li>
    );
}
 
export default Project;