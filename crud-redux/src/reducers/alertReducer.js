import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

//every reducer has his own state
const initialState = {
    alert: null
}

export default function alertReducer(state=initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state
    }
};