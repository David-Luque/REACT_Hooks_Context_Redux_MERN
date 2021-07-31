import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';


export function createNewProductAction(product) {
    return async (dispatch)=>{
        dispatch(addProduct());
        try {
            //insert data in API
            await axiosClient.post('/products', product);

            //if everything ok, update state
            dispatch(addProductSuccess(product))

            //alert
            Swal.fire(
                'Done',
                'Product added successfully',
                'success'
            )
        } catch (error) {
            //if error
            console.log(error)
            dispatch(addProductError(true));
            //alert
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text:'Try again'
            })
        }
    };
};

const addProduct = ()=>({
    type: ADD_PRODUCT,
    payload: true
});

//if product are saved in database
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

//if any error
const addProductError = status =>({
    type: ADD_PRODUCT_ERROR,
    payload: status
});


//FUNCTION TO OBTAIN PRODUCTS DATA FROM DB
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());
        try {
            const response = await axiosClient.get('/products');
            //console.log(response.data);
            dispatch(downloadProductsSuccess(response.data))
        } catch (error) {
            //console.log(error);
            dispatch(downloadProductsError())
        }
    };
};

const downloadProducts = () => ({
    type: START_GET_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = ()=>({
    type: GET_PRODUCTS_ERROR,
    payload: true
});