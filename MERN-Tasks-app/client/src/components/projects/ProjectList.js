import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';



const ProjectList = () => {

    //extract projects from initial state
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //obtain projects when component loads
    useEffect(() => {
        getProjects();
    }, [])

    //check in "projects" has content
    if(projects.length === 0) return <p>No projects. Create the first one</p>;

    return (
        <ul className="list-projects">
            {projects.map(project => (
                <Project
                    key={project.id}
                    projectInfo={project}
                />
            ))}
        </ul>
    );
}
 
export default ProjectList;