import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ModalContext = createContext();


const ModalProvider = (props) => {

    const [recipeId, setRecipeId] = useState(null);
    const [ recipeData, setRecipeData ] = useState({});

    useEffect(()=>{
         
        const recipeRequest = async ()=>{
            if(!recipeId) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
            const reqResult = await axios.get(url);
            setRecipeData(reqResult.data.drinks[0])
        };
        recipeRequest();
        
    }, [recipeId]);
    

    return (
        <ModalContext.Provider
            value={{
                recipeData,
                setRecipeId,
                setRecipeData
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;