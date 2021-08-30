import React from "react";

const FormErrors: React.FC<any> = ({errors}) => {

   if (errors.length) {
   return (
      <div id="errors_container">
         <fieldset style={{maxWidth:"200px", fontSize: 8, borderRadius: 3}}>
            <label>Theres seems to have been a problem?</label>
            <ul style={{listStyleType: "none"}}>
               {errors.map((error: {message:string,code:string}) => {
                  if (error.message) {
                     const {message} = error
                     return <li>{message}</li>
                  }
                  return null
               })}
            </ul>
         </fieldset>
      </div>
   )
   } else {
      return null
   }
}

export default FormErrors
