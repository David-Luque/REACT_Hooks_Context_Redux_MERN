import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import axiosClient from '../../config/axios';
import {
    SHOW_ALERT,
    HIDE_ALERT,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
    CREATE_LINK_SUCCESS,
    CREATE_LINK_FAILURE
} from '../../types';

const AppState = ({ children }) => {

    const initialState = {
        message_file: null,
        name: '',
        origin_name: '',
        loading: false,
        downloads: 1,
        password: '',
        author: null,
        url: ''
    };
    const [ state, dispatch ] = useReducer(appReducer, initialState);

    const showAlert = msg => {
        dispatch({
            type: SHOW_ALERT,
            payload: msg
        });

        setTimeout(()=>{
            dispatch({
                type: HIDE_ALERT
            });
        }, 3000);
    };

    //upload files to server
    const uploadFile = async (formData, fileName) => {

        dispatch({
            type: UPLOAD_FILE
        });

        try {
            const response = await axiosClient.post('api/files', formData);
            dispatch({
                type: UPLOAD_FILE_SUCCESS,
                payload: {
                    name: response.data.file,
                    origin_name: fileName
                }
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: UPLOAD_FILE_FAILURE,
                payload: error.response.data.msg
            });
        }
    };

    //create link after upload file
    const createLink = async ()=>{
        const data = {
            name: state.name,
            origin_name: state.origin_name,
            downloads: state.downloads,
            password: state.password,
            author: state.author
        }

        try {
            const result = await axiosClient.post('/api/links', data);
            dispatch({
                type: CREATE_LINK_SUCCESS,
                payload: result.data.msg
            });
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <appContext.Provider
            value={{
                message_file: state.message_file,
                name: state.name,
                origin_name: state.origin_name,
                loading: state.loading,
                downloads: state.downloads,
                password: state.password,
                author: state.author,
                url: state.url,
                showAlert,
                uploadFile,
                createLink
            }}
        >
            {children}
        </appContext.Provider>
    );
}
 
export default AppState;