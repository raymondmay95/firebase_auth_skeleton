import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginForm from './components/login';
import SignUp from './components/signup';
import { useAuth } from './context';
import LoggedOutNavigation from './components/navigation/Logged_Out_Navigation';
import ProtectedRoute from './utils/protectedRoute';

const App: React.FC = () => {
  const {signOut, currentUser} = useAuth()
  console.log(currentUser?.email)

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
          <Route path="/200">
            <div>
              not authorized
            </div>
          </Route>
          <ProtectedRoute path="/test" children={<><div>Hello</div></>} />
          <Route path="/" exact>
            <div style={{display: "flex", width: "100vw", justifyContent: "center", height: "100vh", alignItems: "center", overflow: "hidden"}}>
              {currentUser ?
              <button type="button" onClick={signOut}>Sign Out</button>
              :
              <LoggedOutNavigation />
              }
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
