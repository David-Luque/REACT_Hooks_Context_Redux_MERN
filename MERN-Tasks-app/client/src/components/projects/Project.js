import React from 'react';

const Project = ({ projectInfo }) => {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {projectInfo.name}
            </button>
        </li>
    );
}
 
export default Project;