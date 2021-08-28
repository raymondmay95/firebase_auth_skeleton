import React, { FC, useState} from "react";
import { useAuth } from "../../context";
import { useHistory } from "react-router";

const SignUp: FC = () => {
   const history = useHistory()
   const {signUpWithEmailPassword} = useAuth()
   const [errors, setErrors] = useState<Array<{code:string, message:string}>>([])
   const [buttonStatus_disabled, setButtonStatus_disabled] = useState<boolean>(false)
   const [credentials, setCredentials] = useState({
      email: "",
      password: ""
   })

   const handleSubmit = async (event:React.FormEvent) => {
      event.preventDefault()
      setButtonStatus_disabled(true)
      const {email, password} = credentials
      if (email !== "" && password !== "") {
         try {
            await signUpWithEmailPassword(email, password)
            history.push("/home")
         } catch(error) {
            // console.log(error) // To console log salesforce errors and validation
            setErrors([error])
         }
      }

      if (errors) {console.log(errors)}
      setButtonStatus_disabled(false)
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
            {errors && (
            <div>
               <ul style={{listStyleType: "none"}}>
                  {errors.map(({message}) => <li>{message}</li>)}
               </ul>
            </div>
            )}
            <div>
               <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "150%"}}>
                  <label htmlFor="email">Email</label>
                  <input name="email" type="email" value={credentials.email} onChange={handleChange} required />
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" value={credentials.password} onChange={handleChange} minLength={6} required />
                  <button disabled={buttonStatus_disabled} type="submit" style={{width:"100%"}}>Submit</button>
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
