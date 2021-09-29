import { useState, useEffect } from 'react';
import firebase from '../firebase';

function useAuthentication() {
    const [ authorizeUser, setAuthorizeUser ] = useState(null);

    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setAuthorizeUser(user)
            } else {
                setAuthorizeUser(null)
            }
        });
        return () => unsuscribe();
    }, []);

    return authorizeUser;
};

export default useAuthentication;