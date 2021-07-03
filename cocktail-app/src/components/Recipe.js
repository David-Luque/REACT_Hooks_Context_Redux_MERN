import React from 'react';

const Recipe = ({ recipeInfo }) => {

    const { strDrink, strDrinkThumb } = recipeInfo;

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header"> {strDrink} </h2>
                <img className="card-img-top" src={strDrinkThumb} alt={strDrink}/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        See recipe
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Recipe;