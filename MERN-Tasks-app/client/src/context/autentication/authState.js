import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    SUCCESS_REGIST,
    FAILURE_REGIST,
    GET_USER,
    SUCCESS_LOGIN,
    FAILURE_LOGIN,
    CLOSE_SESSION
} from '../../types'; 


const AuthState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState) 


    //create user
    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            console.log(response.data);
            dispatch({
                type: SUCCESS_REGIST,
                payload: response.data
            });
            //get user
            authenticateUser();
        } catch (error) {
            console.log(error.response);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: FAILURE_REGIST,
                payload: alert
            });
        }
    };

    //return authenticated user
    const authenticateUser = async ()=>{
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const response = await axiosClient.get('/api/auth');
            console.log(response);
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: FAILURE_LOGIN
            });
        }
    };


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};


export default AuthState;