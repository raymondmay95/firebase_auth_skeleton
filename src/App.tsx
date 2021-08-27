import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SignUp from './components/signup';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/" exact>
            <div>Hello world</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
