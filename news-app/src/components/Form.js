import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Form = ({ setCategory }) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' }
    ];

    const [category, SelectNews] = useSelect('general', OPTIONS);

    const handleSubmit = e => {
        e.preventDefault();

        setCategory(category)
    };


    return (
        <div className={`row ${styles.seach}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Seach by category</h2>

                    {<SelectNews/>}

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Seach"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}
 
export default Form;