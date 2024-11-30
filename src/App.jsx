import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login.jsx';
import NewUser from './Components/Registro_users.jsx';

import VideosInicio from './Components/info_videoshome.jsx';
import VideosUser from './Components/info_videosuser.jsx';
import Reproductor from './Components/info_reproductor.jsx';



function App() {
  const [user, setUser] = useState(0)

  return (

    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index element={<Login callback={setUser}/>}></Route>
        <Route path='/NewUser' element={<NewUser user={user}/>} ></Route>
        <Route path='/Reproducir/:id' element={<Reproductor user={user}/>} ></Route>
        <Route path='/InicioUser' element={<VideosUser user={user}/>} ></Route>
        <Route path='/InicioVideos' element={<VideosInicio user={user}/>} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
