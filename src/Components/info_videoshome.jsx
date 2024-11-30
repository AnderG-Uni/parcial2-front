import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import '../index.css'


function InfoAdmin(){

    const USUARIO = localStorage.getItem("id"); //obtengo el (ID) del usuario autenticado  del local storage    
    if(USUARIO){
        const [DatosUser, setDatosUser] = useState([]);
        const [AuditLogin, setAuditLogin] = useState([]);
        const Navigate = useNavigate();
        //videos
        const [videos, setVideos] = useState([]);

        const handleLogout = () => {
            localStorage.clear();
            window.location = 'https://gana-loco-ander.vercel.app'
        };

        useEffect(() => {

            // Función para obtener y reproducir el video
            const GetAllVideoUrl = async () => {
                try {
                //const response = await axios.get(`http://localhost:5000/apiv1/GetAllVideo`);
                const response = await axios.get(`https://uniyoutube-back.vercel.app/apiv1/GetAllVideo`);
                if (!response.ok) {
                    setVideos(response.data);
                    //console.log("Data Videos2:", response.data);
                  } else {
                    console.error('No se pudieron obtener los videos');
                  }
                } catch (error) {
                alert('Error al obtener los videos.');
                }
            }
            
            const CargarInfoUser = async () => {
                try {
                    const user = localStorage.getItem("user"); //obtengo el (usuario) del usuario autenticado  del local storage
                    const response2 = await axios.post('https://uniyoutube-back.vercel.app/apiv1/info_user', {user});
                    setDatosUser(response2.data);
                } catch (error) {
                console.error(error);
                }
            };

            const CargarAccessLogin = async () => {
                try {
                    const user = localStorage.getItem("user"); //obtengo el (usuario) del usuario autenticado  del local storage
                    const response3 = await axios.post('https://uniyoutube-back.vercel.app/apiv1/info_audit_users', {user});
                    setAuditLogin(response3.data);
                } catch (error) {
                console.error(error);
                }
            };

            GetAllVideoUrl();
            CargarInfoUser();
            CargarAccessLogin();
        }, []);

       
        const Myprofile = () => {
            Navigate("/InicioUser")
        };

        const ReproductorVideos = (videoId) => {
            Navigate(`/Reproducir/${videoId}`);
        };


        return (

            <>
            <header>
                <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white ">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#"></a>
                        <a class="navbar-brand" href="#"></a>

                        <img  src="https://img.icons8.com/?size=100&id=85011&format=png&color=000000" alt='star' height="30" className='Miniatura' onClick={Myprofile}/>
                        <i class="fi fi-rr-globe" ></i>
                        {DatosUser.map((datauser) => ( <span className='m-2' onClick={Myprofile}> <h5 class="mb-0 text-center Miniatura"> Mi Perfil  </h5> </span> )) } 

                        <a class="navbar-brand" href="#"></a>
                        <a class="navbar-brand" href="#"></a>
                        <img  src="https://img.icons8.com/?size=100&id=TZ2lKyH3LVjx&format=png&color=000000" alt='star' height="30" className='Miniatura' />
                        {DatosUser.map((datauser) => ( <span className='m-2' > <h5 class="mb-0 text-center text-success Miniatura"> Inicio </h5> </span> )) } 
                        

                        <ul class="navbar-nav ms-auto d-flex flex-row">
                            <div className='pt-2 d-none d-md-flex input-group w-auto my-auto'>
                                {AuditLogin.map((auditlogin) => ( <span className='m-2' title='Ultimo ingreso'> <img src="https://img.icons8.com/?size=100&id=82767&format=png&color=000000" height="25"  title='Ultimo ingreso'/> {auditlogin.fecha}</span> )) } 
                            </div>

                            <li class="nav-item">
                                <a class="nav-link me-3 me-lg-0" href="#">
                                    <i class="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            <li class="nav-item me-3 me-lg-0">
                                <a class="nav-link" href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>

                            <li class="nav-item ">
                                <button className='btn btn-primary' onClick={handleLogout} > 
                                <img src="https://img.icons8.com/?size=100&id=105592&format=png&color=000000" class="rounded-circle" height="22"
                                        alt="" loading="lazy" />  <span>Salir</span>
                                </button>
                            </li>

                            <li class="nav-item me-3 me-lg-0">
                                <a class="nav-link" href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
            

                <main>
                    <div class="pt-0">
                        <section>

                            <div class="card mt-0">
                                <div class=" row col col-12 py-1">

                                <div className='col col-6 text-center'>
                                        <h3 class="mb-0 text-center text-success"> <strong>Todos los videos</strong> </h3>
                                    </div>

                                    <div className='col col-2'></div>

                                    <div className='col col-4'><div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-success" type="button">Buscar</button>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="card-body">
                                    <div className=' table-responsive'> 
                                        <div class="table-responsive row  col col-12">

                                            {/* más videos a mostrar  */}
                                            
                                                {videos.length > 0 ? (
                                                videos.map((video) => (
                                                <div key={video._id} class="card mt-2 mb-3 ms-auto me-2 col col-3 my-auto mx-auto p-2 pe-1 ps-1 pb-1">

                                                    <div className="card-body p-0">
                                                        <div className="table-responsive text-center">
                                                        
                                                        <h5 className="mb-0 text-center Miniatura" onClick={() => ReproductorVideos(video._id)} > {video.NombreVideo} </h5>
                                                        <video onClick={() => ReproductorVideos(video._id)}  width="300" height="180"  className="video-preview Miniatura">
                                                            <source src={video.Url} type="video/mp4" />
                                                            Video
                                                        </video>
                                                        <div className='row col col-12'>
                                                            <img src="https://img.icons8.com/?size=100&id=83311&format=png&color=000000" height="25" className='col col-2 ms-2' title='Comentarios'/>
                                                            <img src="https://img.icons8.com/?size=100&id=60010&format=png&color=000000" height="25" className='col col-2' title='Me Gusta'/>
                                                            <img src="https://img.icons8.com/?size=100&id=60712&format=png&color=000000" height="25" className='col col-2 me-3' title='No Me Gusta'/>
                                                            <p className='col col-1'></p>
                                                            <p className='Fecha col col-4' title='Fecha de subido el video'>{video.Fecha} </p>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                ))
                                                ) : (
                                                  <h5>No hay videos en la plataforma</h5>
                                                )}
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>
                </main>
            </>
        )

    }else{
        //Se redirecciona al login si no existe una varia de usuario valida 
        window.location= 'https://uniyoutube.vercel.app' // ruta de ront
    }
}

export default InfoAdmin