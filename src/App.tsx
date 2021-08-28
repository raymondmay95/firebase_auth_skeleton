import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
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
            {currentUser ?
            <button type="button" onClick={signOut}>Sign Out</button>
            :
            <a href="/login">Login</a>
          }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
