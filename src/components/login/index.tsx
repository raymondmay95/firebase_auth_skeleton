import React, { FC, useState } from "react";

const LoginForm: FC = () => {
   const [email, setEmail] = useState<string>("")
   const [password, setPassword] = useState<string>("")

   return (
   <>
      <form>
         <label htmlFor="email">email</label>
         <input name="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>setEmail(e.target.value)} />
         <label htmlFor="password">password</label>
         <input name="password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>setPassword(e.target.value)} />
         <input type="submit">Submit</input>
      </form>
   </>
   )
}

export default LoginForm
