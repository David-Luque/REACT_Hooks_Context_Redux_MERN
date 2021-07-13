import {
    PROJECT_TASKS,
    ADD_TASKS,
    VALIDATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SELECT_TASK,
    EDIT_TASK,
    CLEAN_TASK
} from '../../types/index';

export default (state, action) => {
     switch(action.type) {
        
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASKS:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                taskError: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true 
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                selectedTask: null
            }

        default:
             return state;
     }
};