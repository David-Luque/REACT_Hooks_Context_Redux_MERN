import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { 
    PROJECT_TASKS,
    ADD_TASKS,
    VALIDATE_TASK,
    DELETE_TASK
} from '../../types/index';


const TaskState = props => {
    
    const initialState = {
        tasks: [
            {id: 1, name: 'choose platform', isCompleted: false, projectId: 1},
            {id: 2, name: 'choose colors', isCompleted: false, projectId: 2},
            {id: 3, name: 'set payment platform', isCompleted: false, projectId: 3},
            {id: 4, name: 'select hosting', isCompleted: false, projectId: 4},
            {id: 5, name: 'choose platform', isCompleted: false, projectId: 1},
            {id: 6, name: 'choose colors', isCompleted: false, projectId: 3},
            {id: 7, name: 'set payment platform', isCompleted: false, projectId: 4},
            {id: 8, name: 'select hosting', isCompleted: false, projectId: 2},
            {id: 9, name: 'choose platform', isCompleted: false, projectId: 4},
            {id: 10, name: 'choose colors', isCompleted: false, projectId: 3},
            {id: 11, name: 'set payment platform', isCompleted: false, projectId: 2},
            {id: 12, name: 'select hosting', isCompleted: false, projectId: 1},
            {id: 13, name: 'choose platform', isCompleted: false, projectId: 2},
            {id: 14, name: 'choose colors', isCompleted: false, projectId: 4},
            {id: 15, name: 'set payment platform', isCompleted: false, projectId: 1},
            {id: 16, name: 'select hosting', isCompleted: false, projectId: 3 }
        ],
        projectTasks: null,
        taskError: false
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

    //validate task an show error
    const validateTask = ()=>{
        dispatch({
            type: VALIDATE_TASK,
        });
    };

    //delete task
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                getTasks,
                createTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;