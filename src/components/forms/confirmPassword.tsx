import React from "react"

type ConfirmPasswordFeildProps = {
   display: boolean
   handleChange: React.ChangeEventHandler<HTMLInputElement>
   credentials: {
      email: string,
      password: string,
      password_confirm: string
   }
}

const ConfirmPasswordFeild: React.FC<ConfirmPasswordFeildProps> = ({display, handleChange, credentials}) => {
   if (display) {
      return (
      <>
         <label htmlFor="password">Confirm Password</label>
         <input name="password_confirm" type="password" value={credentials.password_confirm} onChange={handleChange} minLength={6} required />
      </>
      )
   } else return null
}

export default ConfirmPasswordFeild
