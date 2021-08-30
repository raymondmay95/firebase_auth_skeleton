import { FC } from "react";
import FederalizedAuthLinks from "../navigation/federalized_ auth_links";
import {LoginSignUpForm} from "../forms";
import { useAuth } from "../../context";
import { Redirect } from "react-router-dom";

const LoginForm: FC = () => {
   const {currentUser} = useAuth()
   if (currentUser && currentUser.email) {
      return <Redirect to="/" />
   }
   return (
   <>
      <div style={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column"}}>
         <LoginSignUpForm />
         <FederalizedAuthLinks />
      </div>
   </>
   )
}

export default LoginForm
