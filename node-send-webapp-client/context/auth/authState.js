import authContext from "./authContext";
import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import authReducer from "./authReducer";
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    CLEAN_ALERT
} from '../../types';


const AuthState = ({ children }) => {

    //defining initial state
    const initialState = {
        token: '',
        authenticated: null,
        user: null,
        message: null
    };

    //defining reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    //signup new users
    const signUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data.msg
            });
        } catch (error) {
            dispatch({
                type: SIGNUP_FAILURE,
                payload: error.response.data.msg
            });
        }
        //clean alert after 3 seconds
        setTimeout(()=>{
            dispatch({
                type: CLEAN_ALERT
            });
        }, 3000);
    };

    //user authenticated
    const authUser = name => {
        dispatch({
            type: USER_AUTHENTICATED,
            payload: name
        });
    };


    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                signUser,
                authUser
            }}
        >
            {children}
        </authContext.Provider>
    )
};

export default AuthState;