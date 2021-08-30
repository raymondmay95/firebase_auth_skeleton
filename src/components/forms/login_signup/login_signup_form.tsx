import React, { SyntheticEvent, useState} from "react";
import { useLocation } from "react-router";
import { useAuth } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react";
import ConfirmPasswordFeild from "./confirmPassword";
import {FormErrors} from "../../errors/index";

const LoginSignUpForm: React.FC = () => {
   const {pathname} = useLocation()
   const [credentials, setCredentials] = useState({
      email: "",
      password: "",
      password_confirm: ""
   })
   const {signInWithEmailPassword, signUpWithEmailPassword } = useAuth()
   const [disableButton, setDisableButton] = useState<boolean>(false)
   const [disableConfirm, setDisableConfirm] = useState<boolean>(false)
   const [errors, setErrors] = useState<any[]>([])

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
            setErrors([])
         } catch (error) {
            console.log(error)
            setErrors((prev)=>[error])
         }
      } else {
         try {
            await signUpWithEmailPassword(credentials.email, credentials.password)
            setErrors([])
         } catch (error) {
            console.log(error)
            setErrors((prev)=>[error])
         }
      }
      return setDisableButton(false)
   }

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const targetCredential = event.target.name
      // We are resetting the errors here when inputs change!!!
      setErrors([])
      setCredentials((prevCredentials)=> {
         const newState = {...prevCredentials, [targetCredential]: event.target.value}
         return newState
      })
   }

   return (
      <>
         <FormErrors errors={errors} />
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

export default LoginSignUpForm
