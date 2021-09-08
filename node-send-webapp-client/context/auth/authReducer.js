import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CLEAN_ALERT
} from '../../types';


const authReducer = (state, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS: 
        case SIGNUP_FAILURE:
            return {
                ...state, 
                message: action.payload
            } 
        case CLEAN_ALERT:
            return {
                ...state,
                message: null
            } 
        default:
            return state;
    }
};

export default authReducer;