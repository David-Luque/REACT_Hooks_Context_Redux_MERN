import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    DELETED_PRODUCT_SUCCESS,
    DELETED_PRODUCT_ERROR,
    GET_EDIT_PRODUCT,
    START_EDIT_PRODUCT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
} from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

//FUNCTION TO CREATE NEW PRODUCTS
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


//FUNCTION TO SELECT AND DELETE PRODUCT
export function deleteProductAction(id) {
    return async (dispatch)=>{
        //console.log(id)
        dispatch( getDeleteProduct(id) )
        try {
            await axiosClient.delete(`/products/${id}`);
            //if was successfylly deleted from db, now we can delete also from state
            dispatch(deletedProductSuccess());
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            );
        } catch (error) {
            console.log(error)
            dispatch(deletedProductError());
        }
    };
};

const getDeleteProduct = id => ({
    type: GET_DELETE_PRODUCT,
    payload: id
});
const deletedProductSuccess = ()=>({
    type: DELETED_PRODUCT_SUCCESS
});
const deletedProductError = ()=>({
    type: DELETED_PRODUCT_ERROR,
    payload: true
});


//FUNCTION TO SET PRODUCT FOR EDIT
export function getProductEdit(product) {
    return (dispatch) => {
        dispatch(getProductAction(product));
    };
};

const getProductAction = product => ({
    type: GET_EDIT_PRODUCT,
    payload: product
});


// FUNCTION TO EDIT PRODUCT
export function editProductAction(product) {
    return async (dispatch)=>{
        dispatch(editProduct());
        try {
            await axiosClient.put(`/products/${product.id}`, product);
            dispatch(editProductSuccess(product));
        } catch(error) {
            console.log(error);
            dispatch(editProductError());
        }
    };
}; 

const editProduct = () => ({
    type: START_EDIT_PRODUCT //nothing change, this type has only describing purpose
});
const editProductSuccess = product => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
});
const editProductError = ()=>({
    type: EDITED_PRODUCT_ERROR
});