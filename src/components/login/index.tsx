import { FC } from "react";
import { useAuth } from "../../context";
import { Redirect } from "react-router";
import FederalizedAuthLinks from "../navigation/federalized_ auth_links";
import Form from "../forms/login_signup_form";

const LoginForm: FC = () => {
   const {currentUser } = useAuth()
   // const [errors, setErrors] = useState<any>()

   // if a user exist they should not be on this page.
   if (currentUser) {
      return <Redirect to="/" />
   }
   return (
   <>
      <div style={{display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", flexDirection: "column"}}>
         {/* <div>
            {errors ? errors.message : null}
         </div> */}
         <Form />
         <FederalizedAuthLinks />
      </div>
   </>
   )
}

export default LoginForm
