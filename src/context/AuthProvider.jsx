import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import userImg from "../assets/John.jpg";



const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            const { displayName, photoURL, email, uid } = currentUser;
      
            // Fallback to default photo if no photoURL is provided
            setUser({
              displayName: displayName || "Guest",
              photoURL: photoURL || userImg,
              email,
              uid,
            });
          } else {
            setUser(null);
          }
          setLoading(false);
        });
      
        return () => unsubscribe();
      }, []);
      

    const authInfo = {
        user,
       createUser,
       loginWithGoogle,
       loading,
       login,
       logOut,
    }


  return (
    <AuthContext.Provider value={authInfo}> 
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
export default AuthProvider
