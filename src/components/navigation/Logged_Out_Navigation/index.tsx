import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"

const LoggedOutNavigation: React.FC = () => {
  return (
    <>
      <div style={{width: "100%"}}>
        <ul style={{listStyleType:"none", display: "flex", justifyContent: "space-around"}}>
          <li key="loggedOut_Login-navbar">
            <NavLink to="/login" style={{textDecoration: "none"}}>
              {"Login "}
              <FontAwesomeIcon icon={faSignInAlt} />
            </NavLink>
          </li>
          <li key="loggedOut_SignUp-navbar">
            <NavLink to="/signup" style={{textDecoration: "none"}}>
              {'Sign Up '}
              <FontAwesomeIcon icon={faUserPlus} />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LoggedOutNavigation
