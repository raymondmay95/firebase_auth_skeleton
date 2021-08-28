import React from 'react'
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../../context'

const FederalizedAuthLinks: React.FC = () => {
   const { signInWithFacebook, signInWithGoogle } = useAuth()
   const handleClick = (identifyer: string) => {
      const [api, checker] = identifyer.split("_")
      if (checker !== "auth") return null
      if (api === "google") signInWithGoogle()
      if (api === "apple") console.log("must create logic to handle apple sign in")
      if (api === "fb") signInWithFacebook()
   }
   return (
      <div>
         <ul style={{display: "flex", listStyleType: "none", padding: 0, margin: 0, width: "100%"}}>
               <li key="auth_fb" style={{justifySelf: "flex-start"}}>
                  <button id="fb_auth" type="button" onClick={(event) => handleClick(event.currentTarget.id)}>
                     <FontAwesomeIcon icon={faFacebook} />
                  </button>
               </li>
               <li key="auth_google" style={{justifySelf: "center"}}>
                  <button id="google_auth" type="button" onClick={(event) => handleClick(event.currentTarget.id)}>
                     <FontAwesomeIcon icon={faGoogle} />
                  </button>
               </li>
               <li key="auth_apple" style={{justifySelf: "flex-end"}}>
                  <button id="apple_auth" type="button" onClick={(event) => handleClick(event.currentTarget.id)}>
                     <FontAwesomeIcon icon={faApple} />
                  </button>
               </li>
         </ul>
      </div>
   )
}

export default FederalizedAuthLinks
