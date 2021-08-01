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
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
} from '../types';

//every reducer has his own statea
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    editProduct: null
};

export default function(state=initialState, action) {
    switch(action.type) {
        case START_GET_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR:
        case DELETED_PRODUCT_ERROR:
        case EDITED_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload
            }
        case DELETED_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deleteProduct),
                deleteProduct: null
            }
        case GET_EDIT_PRODUCT:
            return {
                ...state,
                editProduct: action.payload
            }
        case EDITED_PRODUCT_SUCCESS:
            return {
                ...state,
                editProduct: null,
                products: state.products.map(product => 
                    product.id === action.payload.id
                    ? product = action.payload
                    : product
                )
            }


        default:
            return state;
    }
};