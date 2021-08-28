import { FC } from "react";
import { useAuth } from "../../context";
import FederalizedAuthLinks from "../navigation/federalized_ auth_links";
import { Redirect } from "react-router-dom";
import Form from "../forms/login_signup_form";

const SignUp: FC = () => {
   const {currentUser} = useAuth()
   // const [errors, setErrors] = useState<any>()
   if (currentUser) {
      return <Redirect to="/" />
   }


   return (
      <>
         <div style={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column"}}>
            {/* {errors && (
            <div>
               <ul style={{listStyleType: "none"}}>
                  {errors && errors.map((error: {message:string,code:string}) => {
                     if (error.message) {
                        const {message} = error
                        return <li>{message}</li>
                     }
                     return null
                  })}
               </ul>
            </div>
            )} */}
            <Form />
            <FederalizedAuthLinks />
         </div>
      </>
   )
}

export default SignUp
