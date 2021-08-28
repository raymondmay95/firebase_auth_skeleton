import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom"
import LoginForm from './components/login';
import SignUp from './components/signup';
import { useAuth } from './context';

const App: React.FC = () => {
  const {signOut, currentUser} = useAuth()
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/" exact>
            <div style={{display: "flex", width: "100vw", justifyContent: "center", height: "100vh", alignItems: "center", overflow: "hidden"}}>
              {currentUser ?
              <button type="button" onClick={signOut}>Sign Out</button>
              :
              <NavLink to="/login">Login</NavLink>
              }
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
