import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));




const Recipe = ({ recipeInfo }) => {

    //Material UI Modal config.
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = ()=>{
        setOpen(true)
    };
    const handleClose = ()=>{
        setOpen(false)
    };



    const { recipeData, setRecipeId, setRecipeData } = useContext(ModalContext);

    const { strDrink, strDrinkThumb, idDrink } = recipeInfo;

    //show and format all the ingredients
    const showIngredients = info => {
        let ingredients = [];
        for(let i = 1; i < 16; i++){
            if( info[`strIngredient${i}`] ) {
                ingredients.push(
                    <li key={i}>
                        {info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}
                    </li>
                );
            }
        }
        return ingredients;
    };



    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header"> {strDrink} </h2>
                <img className="card-img-top" src={strDrinkThumb} alt={strDrink}/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            setRecipeId(idDrink);
                            handleOpen();
                        }}
                    >
                        See recipe
                    </button>
                    
                    <Modal
                        open={open}
                        onClose={()=>{
                            handleClose();
                            setRecipeData({});
                            setRecipeId(null);

                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeData.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>{recipeData.strInstructions}</p>
                            <img className="img-fluid my-4" src={recipeData.strDrinkThumb} alt={recipeData.strDrink}/>
                            <h3>Ingredients and quantity</h3>
                            <ul>
                                {showIngredients(recipeData)}
                            </ul>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
}
 
export default Recipe;