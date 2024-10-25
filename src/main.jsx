import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/login.jsx';
import Admin from './Components/Info_admin.jsx';
import User from './Components/Info_user.jsx';


function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <React.StrictMode>
      {isAuthenticated ? <User onLogout={handleLogout} /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

Admin();