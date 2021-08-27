import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context';

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
