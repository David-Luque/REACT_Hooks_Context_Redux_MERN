import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

//AHOW ALERT
export function showAlertAction(alert) {
    return (dispatch)=>{
        dispatch(createAlert(alert))
    };
};

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

//HIDE ALERT
export function hideAlertAction() {
    return dispatch => {
        dispatch(hideAlert());
    };
};

const hideAlert = ()=>({
    type: HIDE_ALERT
});