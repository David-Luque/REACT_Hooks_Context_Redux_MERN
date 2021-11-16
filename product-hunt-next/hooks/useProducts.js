import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useProducts = (order) => {
    
    const [ products, setProducts ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(()=>{
        const getProducts = ()=>{
        firebase.db
            .collection('products')
            .orderBy(order, 'desc')
            .onSnapshot(handleSnapshot)
        };
        getProducts();
    }, []);

    function handleSnapshot(snapshot) {
        const products = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id

        }
        });
        setProducts(products);
    };
    
    return products;
}
 
export default useProducts;