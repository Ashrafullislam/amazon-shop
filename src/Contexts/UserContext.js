import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,  getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../component/FirebaseConfig/Firebase.init';

const auth = getAuth(app);
 export const AuthContext = createContext();

const UserContext = ({children}) => {

const [user, setUser] = useState({});
// state loading when user sign in or sign out resereved the state show the loading
const [loading,setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

// create user with eamil and password 
const CreateUser = (email,password,confirm) => {
  setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password,confirm)

}

// Login user with email and password 
const LogInUser = (email,password) => {
  setLoading(true)
  return  signInWithEmailAndPassword(auth,email,password) 
}

//signin with  google 
const SignInWithGoogle = () => {
  setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

// LogOut 
const LogOut = () => {
  setLoading(true)
   return signOut(auth )

}
// observe  the user  and change stata when user sign in,signout
 useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth,currentUser => {
    setLoading(false)
    setUser(currentUser);
   })
   return ()=> unSubscribe()
 },[])


const authInfo = {user,SignInWithGoogle,CreateUser, LogInUser,LogOut ,loading }

    return (
        <AuthContext.Provider value={authInfo}> 
         {children}
         </AuthContext.Provider>
    );
};

export default UserContext;