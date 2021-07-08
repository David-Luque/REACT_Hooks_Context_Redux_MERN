import { 
    ADD_PROJECT,
    NEW_PROJECT_FORM,
    OBTAIN_PROJECTS
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case NEW_PROJECT_FORM:
            return {
                ...state,
                form: true
            }
        
        case OBTAIN_PROJECTS:
        return {
            ...state,
            projects: action.payload
        }

        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false
            }

        default:
            return state;
    }
}