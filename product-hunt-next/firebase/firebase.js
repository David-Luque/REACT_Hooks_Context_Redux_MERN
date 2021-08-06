import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    //register user
    async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName: name
        })
    };

    //login user
    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    //logout user session
    async logout() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;