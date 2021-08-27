import React, {FC, useState} from "react";
import { useAuth } from "../../context";
import { useHistory } from "react-router";
const SignUp: FC = () => {
   const history = useHistory()
   const {signUpWithEmailPassword} = useAuth()
   const [credentials, setCredentials] = useState({
      email: "",
      password: ""
   })
   const handleSubmit = (event:React.FormEvent) => {
      event.preventDefault()
      const {email, password} = credentials
      if (email !== "" && password !== "") {
         signUpWithEmailPassword(email, password)
      }
      history.push("/home")
   }

   const handleChange = (event: any): void => {
      const credentialToTarget = event.target.name
      setCredentials((prevCredentials) => {
         return {
            ...prevCredentials, [credentialToTarget] : event.target.value
         }
      })
   }
   return (
      <>
         <div style={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column"}}>
            <div>
               <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "150%"}}>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="email" value={credentials.email} onChange={handleChange} required />
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" value={credentials.password} onChange={handleChange} required />
                  <button type="submit" style={{width:"100%"}}>Submit</button>
               </form>
            </div>
            <div>
               <ul style={{display: "flex", listStyleType: "none", padding: 0, margin: 0, width: "100%"}}>
                     <li key="auth_fb" style={{justifySelf: "flex-start"}}>
                        <a href="https://www.facebook.com">FB</a>
                     </li>
                     <li key="auth_google" style={{justifySelf: "center"}}>
                        <a href="https://www.google.com">Google</a>
                     </li>
                     <li key="auth_apple" style={{justifySelf: "flex-end"}}>
                        <a href="https://www.apple.com">Apple</a>
                     </li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default SignUp
