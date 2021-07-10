import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { 
    PROJECT_TASKS,
    ADD_PROJECT,
    ADD_TASKS
} from '../../types/index';


const TaskState = props => {
    
    const initialState = {
        tasks: [
            {name: 'choose platform', isCompleted: false, projectId: 1},
            {name: 'choose colors', isCompleted: false, projectId: 2},
            {name: 'set payment platform', isCompleted: false, projectId: 3},
            {name: 'select hosting', isCompleted: false, projectId: 4},
            {name: 'choose platform', isCompleted: false, projectId: 1},
            {name: 'choose colors', isCompleted: false, projectId: 3},
            {name: 'set payment platform', isCompleted: false, projectId: 4},
            {name: 'select hosting', isCompleted: false, projectId: 2},
            {name: 'choose platform', isCompleted: false, projectId: 4},
            {name: 'choose colors', isCompleted: false, projectId: 3},
            {name: 'set payment platform', isCompleted: false, projectId: 2},
            {name: 'select hosting', isCompleted: false, projectId: 1},
            {name: 'choose platform', isCompleted: false, projectId: 2},
            {name: 'choose colors', isCompleted: false, projectId: 4},
            {name: 'set payment platform', isCompleted: false, projectId: 1},
            {name: 'select hosting', isCompleted: false, projectId: 3 }
        ],
        projectTasks: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //FUNCTIONS
    //obtain all project tasks
    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    };

    //create a new task
    const createTask = task => {
        dispatch({
            type: ADD_TASKS,
            payload: task
        });
    };


    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getTasks,
                createTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;