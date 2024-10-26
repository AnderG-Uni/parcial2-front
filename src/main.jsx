import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/login.jsx';
import Admin from './Components/Info_admin.jsx';
import User from './Components/Info_user.jsx';
import NewUser from './Components/Registro_users.jsx';
import NewAdmin from './Components/Resgistro_admin.jsx';


//function Main() {
 // const [isAuthenticated, setIsAuthenticated] = useState(false);

  //const handleLoginSuccess = () => {  //al iniciar sesión
  //  setIsAuthenticated(true);
 // };

 // const handleLogout = () => {  // Cerrar la sesión
 //   setIsAuthenticated(false);
 // };


 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

  //return (
    //<React.StrictMode>
  //    {/* isAuthenticated ? <User onLogout={handleLogout} /> : <Login onLoginSuccess={handleLoginSuccess}  />  */}
   //   {/* isAuthenticated ? <NewUser onLogout={true}/> : <Login  onLoginSuccess={true}/> */}
      
     // <App />
    //</React.StrictMode>
  //)
//}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Main />);

//NewAdmin();