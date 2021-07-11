import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


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
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition 
                        key={project.id} 
                        timeout={200} 
                        classNames="project"
                    >
                        <Project projectInfo={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
        </ul>
    );
}
 
export default ProjectList;