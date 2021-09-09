import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CLEAN_ALERT,
    AUTH_FAILURE,
    AUTH_SUCCESS,
    AUTH_USER,
    SIGN_OUT
} from '../../types';


const authReducer = (state, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS: 
        case SIGNUP_FAILURE:
        case AUTH_FAILURE:
            return {
                ...state, 
                message: action.payload
            }
        case AUTH_SUCCESS:
            localStorage.setItem('NS_token', action.payload);
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
        case AUTH_USER:
            return {
                ...state,
                user: action.payload
            }
        case SIGN_OUT:
            localStorage.removeItem('NS_token');
            return {
                ...state,
                user: null,
                token: null,
                authenticated: null
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