import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
    
    const [ search, setSearch ] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    const { setRecipesSearch, setRequest } = useContext(RecipesContext);

    const handleChange = e => {
        const { name, value } = e.target;
        setSearch({
            ...search,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        setRecipesSearch(search);
        setRequest(true);
    };


    return (
        <form 
            className="col-12"
            onSubmit={handleSubmit}
        >
            <fieldset className="text-center">
                <legend> Seach cocktails by category or ingredient </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                        value={search.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        value={search.category}
                        onChange={handleChange}
                    >
                        <option value="">-- Select category --</option>
                        {categories.map(elem => (
                            <option
                                value={elem.strCategory}
                                key={elem.strCategory}
                            >
                                {elem.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Seach"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Form;