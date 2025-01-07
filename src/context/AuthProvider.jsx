import React, { createContext, useState } from 'react';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {   

    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoader
    }

    return <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
        
    };

export default AuthProvider;