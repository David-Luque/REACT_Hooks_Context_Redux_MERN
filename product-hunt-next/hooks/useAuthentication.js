import { useState, useEffect } from 'react';
import firebase from '../firebase';

export default function useAuthentication() {
    const [ authUser, setAuthUser ] = useState(null);

    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }

            return unsuscribe();
        })
    }, []);

    return authUser;
};
