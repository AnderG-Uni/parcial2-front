import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login.jsx';
import InfoAdmin from './Components/Info_admin.jsx';
import InfoUser from './Components/Info_user.jsx';
import NewUser from './Components/Registro_users.jsx';
import NewAdmin from './Components/Resgistro_admin.jsx';



function App() {
  //const [user, setUser] = useState(0)

  return (

    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index ></Route>
        <Route path='/InfoUser' ></Route>
        <Route path='/InfoAdmin' ></Route>
        <Route path='/NewUser' ></Route>
        <Route path='/NewAdmin' ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
