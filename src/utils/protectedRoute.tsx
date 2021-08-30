import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import app from '../config/firebase';
import { useAuth } from '../context';
import LoginForm from '../components/login';

const ProtectedRoute: React.FC<React.PropsWithChildren<any>> = ({path, children}) => {
  const {pathname} = useLocation()
  const {currentUser} = useAuth()
  const authenticated = currentUser ? true : false
  try {
    app.analytics().setCurrentScreen(pathname)
    app.analytics().logEvent('screen_view')
  } catch (error) {
    console.log(error)
  }
  console.log(currentUser)

  if (!authenticated) {
    return <LoginForm />
  } else {
    return (
      <Route path={`${path}`}>
        {children}
      </Route>
  )
  }
}

export default ProtectedRoute
