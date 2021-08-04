import React, { useState, useEffect } from 'react';

const useValidation = (initialState, validation, fn) => {
    
    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState({});
    const [ submitForm, setSubmitForm ] = useState(false);

    useEffect(()=>{
        if(submitForm) {
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors) fn(); // fn = function wich is executed in component

            setSubmitForm(false);
        }
    }, [errors]);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validation(values);
        setErrors(errorsValidation);
        setSubmitForm(true); 
    };

    //on blur event
    const handleBlur = ()=>{
        const errorsValidation = validation(values);
        setErrors(errorsValidation);
    };

    
    return {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    };
}
 
export default useValidation;