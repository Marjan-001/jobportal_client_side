import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({ children }) => {
    const [user, setUser] = useState({ disPlayName: 'www' })
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { createUser, signIn, user };

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;