import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Product = () => {
    //routing to obtain id
    const router = useRouter();
    const { query: { id } } = router;

    useEffect(()=>{
        if(id) {
            
        }
    }, [id]);


    return ( 
        <h1> from {id} </h1>
     );
}
 
export default Product;