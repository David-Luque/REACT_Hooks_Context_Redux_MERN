import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    NEW_PROJECT_FORM, 
    OBTAIN_PROJECTS,
    ADD_PROJECT
} from '../../types/index';





const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Virtual shop' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Web design' }
    ]

    const initialState = {
        projects: [],
        form : false
    }

    //dispatch to execute actions
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //funtions to CRUD actions
    const showForm = ()=>{
        dispatch({
            type: NEW_PROJECT_FORM
        })
    };

    //obtain projects
    const getProjects = () => {
        dispatch({
            type: OBTAIN_PROJECTS,
            payload: projects
        })
    };

    //add project
    const addProject = project => {
        project.id = uuidv4();

        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    };


    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
};

export default ProjectState;