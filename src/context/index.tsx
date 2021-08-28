import React, { createContext, useState, useContext, Context } from 'react'
import { useEffect } from 'react'
import { auth } from '../config/firebase'
import { googleAuthProvider, facebookAuthProvider } from "../config/providers"

const AuthContext: Context<any> = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
   const [currentUser, setCurrentUser] = useState<null | typeof auth.currentUser>(null)

   const value = {
      currentUser,
      signUpWithEmailPassword,
      signInWithEmailPassword,
      signInWithGoogle,
      signInWithFacebook,
      signOut
   }

   function signOut() {
      return auth.signOut()
   }
   // ------------- Signing in with Auth providers **Start** ------------
   function signInWithGoogle() {
      return auth.signInWithPopup(googleAuthProvider)
   }
   function signInWithFacebook() {
      return auth.signInWithPopup(facebookAuthProvider)
   }
   // TODO: creat logic for apple signin
   // function signInWithApple() {}
   // ------------- Signing in with Auth providers **End** ------------


   // Email and Password Only ---- handled by login and sign up forms; from with our app
   function signInWithEmailPassword(email:string,password: string) {
      return auth.signInWithEmailAndPassword(email, password)
   }
   function signUpWithEmailPassword(email: string, password: string): Promise<any>{
      return auth.createUserWithEmailAndPassword(email, password)
   }

   useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((user:any) => {
         if (user) {
            setCurrentUser(user)
         } else {
            setCurrentUser(null)
         }
      })

      return unsubscribe
   },[])

   return (
      <AuthContext.Provider value={value}>
         { children }
      </AuthContext.Provider>
   )

}

export default AuthProvider
