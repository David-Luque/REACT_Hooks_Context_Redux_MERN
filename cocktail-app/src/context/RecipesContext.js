import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props)=>{

    const [ recipes, setRecipes ] = useState([]);

    const [ recipesSearch, setRecipesSearch ] = useState({
        name: '',
        category: ''
    }); 
    const { name, category } = recipesSearch; 

    const [request, setRequest] = useState(false);


    useEffect(()=>{
        if(request) {
            const getRecipes = async ()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const result = await axios.get(url);
                //console.log(result.data.drinks)
                setRecipes(result.data.drinks);
            };
            getRecipes();
        }
    }, [recipesSearch]);



    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setRecipesSearch,
                setRequest
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
};

export default RecipesProvider;