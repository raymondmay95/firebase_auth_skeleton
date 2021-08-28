import React, { createContext, useState, useContext, Context } from 'react'
import { useEffect } from 'react'
import { auth, googleAuthProvider } from "../config/firebase"

const AuthContext: Context<any> = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
   const [currentUser, setCurrentUser] = useState<null | typeof auth.currentUser>(null)

   const value = {
      currentUser,
      signUpWithEmailPassword,
      signInWithGoogle,
      signOut
   }

   function signInWithGoogle() {
      auth.signInWithPopup(googleAuthProvider)
   }

   function signOut() {
      return auth.signOut()
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
