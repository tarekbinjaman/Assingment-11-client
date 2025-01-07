import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {   

    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
        setLoader(true);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoader(true);
    } 

    const updateUser = (user, updateData) => {
        return updateProfile(user, updateData)
        setLoader(true);
    }

    const logOut = () => {
        return signOut(auth)
        setLoader(false)
    }

    const googleSignin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoader,
        userRegister,
        userLogin,
        updateUser,
        logOut,
        googleSignin,

    };

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsbscribe();
        }
    }, [])

    return <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
        
    };

export default AuthProvider;