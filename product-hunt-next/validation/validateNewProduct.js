export default function validateNewProduct(values) {
    let errors = {};

    //validate username
    if(!values.name) {
        errors.name = 'Name is required';
    };

    //validate enterprise
    if(!values.enterprise) {
        errors.enterprise = 'Enterprise name is required'
    }

    //validate URL
    if(!values.url) {
        errors.url = 'Product URL is required'
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
        errors.url = 'URL not valid'
    }

    //validate description
    if(!values.description) {
        errors.description = 'Product description is required'
    }

    return errors;
};