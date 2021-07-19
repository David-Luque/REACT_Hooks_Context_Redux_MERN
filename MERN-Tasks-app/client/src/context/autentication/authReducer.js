import {
    SUCCESS_REGIST,
    FAILURE_REGIST,
    GET_USER,
    SUCCESS_LOGIN,
    FAILURE_LOGIN,
    CLOSE_SESSION
} from '../../types';

export default (state, action)=>{
    switch(action.type) {
        case FAILURE_REGIST:
        case FAILURE_LOGIN:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case SUCCESS_REGIST:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
};