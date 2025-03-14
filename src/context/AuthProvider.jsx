import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {   

    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);

    const userRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const userLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const updateUser = (user, updateData) => {
        setLoader(true);
        return updateProfile(user, updateData)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
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
            console.log('State captured', currentUser?.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://server-side-cyan-beta.vercel.app/jwt', user, { withCredentials: true })
                    .then(res =>{ 
                        console.log('Login token:', res.data)
                        setLoader(false)

                    })
                    .catch(err => console.error('Error generating token:', err));
            } else {
                // Clear the token when user logs out
                axios.post('https://server-side-cyan-beta.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('Logout token cleared:', res.data)
                        setLoader(false)

                    })
                    .catch(err => console.error('Error clearing token:', err));
            }

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