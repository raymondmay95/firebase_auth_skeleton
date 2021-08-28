import React, { FC, useState } from "react";
import { useAuth } from "../../context";
import { Redirect } from "react-router";

const LoginForm: FC = () => {
   const {currentUser, signInWithGoogle} = useAuth()
   // const { /* Destructored providers from auth object */} = useAuth()
   const [email, setEmail] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   // if a user exist they should not be on this page.
   if (currentUser) {
      return <Redirect to="/" />
   }

   // TODO: open providers popup for auth and handle signing in by submiting credentials through site
   const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      signInWithGoogle()
   }
   // const handleSubmit = (e:FormSubmitEvent) => {}
   return (
   <>
      <div style={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column"}}>
         <div>
            <form style={{display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "150%"}}>
               <label htmlFor="email">Email</label>
               <input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
               <label htmlFor="password">Password</label>
               <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} minLength={6} required />
               <button type="submit" style={{width:"100%"}}>Submit</button>
            </form>
         </div>
         <div>
            <ul style={{display: "flex", listStyleType: "none", padding: 0, margin: 0, width: "100%"}}>
                  <li key="auth_fb" style={{justifySelf: "flex-start"}}>
                     <button type="button">FB</button>
                  </li>
                  <li key="auth_google" style={{justifySelf: "center"}}>
                     <button type="button" onClick={(event) => handleClick(event)}>Google</button>
                  </li>
                  <li key="auth_apple" style={{justifySelf: "flex-end"}}>
                     <button type="button">Apple</button>
                  </li>
            </ul>
         </div>
      </div>
   </>
   )
}

export default LoginForm
