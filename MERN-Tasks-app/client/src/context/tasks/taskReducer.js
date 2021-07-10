import {
    PROJECT_TASKS,
    ADD_TASKS
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
                tasks: [...state.tasks, action.task]
            }
        
        default:
             return state;
     }
};