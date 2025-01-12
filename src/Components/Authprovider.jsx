/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from './firebaseconfig'


import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const googleprovider = new GoogleAuthProvider();
const twitterprovider = new TwitterAuthProvider();
const githubprovider = new GithubAuthProvider();

 export const AuthContext=createContext();
const Authprovider = ({children}) => {
const auth=getAuth(app);
const [user, setUser] = useState(null)


// creatuser
 const creatUser=(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
 }

 // googlelogin
 const googlelogin = () => {
    return signInWithPopup(auth, googleprovider)
}

// twitter
const twitterlogin = () => {
    return signInWithPopup(auth, twitterprovider)
}

// github
const githublogin = () => {
    return signInWithPopup(auth, githubprovider)
}

const handleSignOut = () => {
        
    return signOut(auth)
        
};


useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (currentuser) => {
        if (currentuser) {
            console.log(currentuser)
        }
        else {
            console.log('logout successfully');
            setUser(null)
        }
    })
})

const allvalue={
creatUser,
googlelogin,
twitterlogin,
githublogin,
handleSignOut,
user,
setUser
}
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;