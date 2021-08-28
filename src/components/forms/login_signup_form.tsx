import React, {SyntheticEvent, useState} from "react";
import { useLocation } from "react-router";
import { useAuth } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react";
import ConfirmPasswordFeild from "../forms/confirmPassword";


const Form: React.FC = () => {
   const {pathname} = useLocation()
   const [credentials, setCredentials] = useState({
      email: "",
      password: "",
      password_confirm: ""
   })
   const {signInWithEmailPassword, signUpWithEmailPassword } = useAuth()
   const [disableButton, setDisableButton] = useState<boolean>(false)
   const [disableConfirm, setDisableConfirm] = useState<boolean>(false)

   useEffect(()=>{
      if (pathname === "/login") {
         setDisableConfirm(false)
      } else if (pathname === "/signup") {
         setDisableConfirm(true)
      }
   }, [pathname])

   const handleSubmit: React.FormEventHandler = async (event: SyntheticEvent) => {
      event.preventDefault()
      setDisableButton(true)
      if (!disableConfirm) {
         try {
            await signInWithEmailPassword(credentials.email, credentials.password)
            setCredentials({
               email: "",
               password: "",
               password_confirm: ""
            })
         } catch (error) {
            console.log(error)
         }
      } else {
         try {
            await signUpWithEmailPassword(credentials.email, credentials.password)
         } catch (error) {
            console.log(error)
         }
      }
      return setDisableButton(false)
   }

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const targetCredential = event.target.name
      setCredentials((prevCredentials)=> {
         const newState = {...prevCredentials, [targetCredential]: event.target.value}
         return newState
      })
   }
   return (
      <>
         <div>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "150%"}}>
               <label htmlFor="email">Email</label>
               <input name="email" type="email" value={credentials.email} onChange={handleChange} required />
               <label htmlFor="password">Password</label>
               <input name="password" type="password" value={credentials.password} onChange={handleChange} minLength={6} required />
               <ConfirmPasswordFeild display={disableConfirm} credentials={credentials} handleChange={handleChange} />
               <button type="submit" disabled={disableButton} style={{width:"100%"}}>
                  {"Submit "}
                  <FontAwesomeIcon icon={faSignInAlt} />
               </button>
            </form>
         </div>
      </>
   )
}

export default Form
