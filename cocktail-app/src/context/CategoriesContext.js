import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//CREATE CONTEXT
export const CategoriesContext = createContext();

//PROVIDER, where the functions and status are located
const CategoriesProvider = (props)=>{

    //Create state of Context
    const [categories, setCategories] = useState([]);

    //execute API call
    useEffect(()=>{
        const getCategories = async ()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }
        getCategories();
    }, []);


    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}; 

export default CategoriesProvider;