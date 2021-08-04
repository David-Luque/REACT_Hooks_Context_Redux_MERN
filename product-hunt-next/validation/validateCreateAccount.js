export default function validateCreateAccount(values) {
    let errors = {};

    //validate username
    if(!values.name) {
        errors.name = 'Name is required';
    };

    //validate email
    if(!values.email) {
        errors.email = 'Email is required';
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = 'Email not valid';
    };

    //validate password
    if(!values.password) {
        errors.password = 'Password  is required'
    } else if(values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long'
    };

    return errors;
};