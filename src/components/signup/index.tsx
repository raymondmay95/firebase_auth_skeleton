import { FC } from "react";
import FederalizedAuthLinks from "../navigation/federalized_ auth_links";
import {LoginSignUpForm} from "../forms";
import { Redirect } from "react-router";
import { useAuth } from "../../context";

const SignUp: FC = () => {
   const {currentUser} = useAuth()
   if (currentUser) {
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

export default SignUp
