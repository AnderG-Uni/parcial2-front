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
            window.location = 'https://uniyoutube.vercel.app'
        };

        // Función para subir el video
        const UploadVideo = async () => {
            
            const iduser = localStorage.getItem("id"); //obtengo el (id del user) del usuario autenticado  del local storage
            const email = localStorage.getItem("user"); //obtengo el (ID) del usuario autenticado  del local storage 
            const nombrevideo = document.getElementById('NombreVideo');
            const file = videoFile.files[0];
            if (!file) {
            alert('Por favor, selecciona un video');
            return;
            }
    
            const formData = new FormData();
            formData.append('video', file);
            formData.append('nombrevideo', nombrevideo.value);
            formData.append('user', email);
            formData.append('iduser', iduser);
    
            try {
                //const response = await fetch('http://localhost:5000/apiv1/UploadVideo', {
                    const response = await fetch('https://uniyoutube-back.vercel.app/apiv1/UploadVideo', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (response.ok) {
                    alert('El video fue guardado exitosamente.');
                    GetUserVideoUrl();

                } else {
                    alert('Error al subir el video: ' + data.message);
                }
            } catch (error) {
            alert('Error al conectar con el servidor');
            }
        };

        // Función para obtener y reproducir el video
        const GetUserVideoUrl = async () => {
            const user = localStorage.getItem("user");

            try {
                //const response = await axios.post('http://localhost:5000/apiv1/GetUserVideo', {user});
                const response = await axios.post('https://uniyoutube-back.vercel.app/apiv1/GetUserVideo', {user});
                //console.log("Data Videos1:", response.data);

                    if (response.data && response.data.length > 0) {
                        setVideos(response.data);
                        //console.log("Datos de los videos del usuario:", response.data);
                    } else {
                        //console.log("Data Videos3:", response.data);
                        console.error('No se pudieron obtener los videos');
                    }

            } catch (error) {
                alert('Error al conectar con el servidor');
            }
        }


        useEffect(() => {

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

            
            CargarInfoUser();
            CargarAccessLogin();
            GetUserVideoUrl();
        }, []);


        const HOMEVideos = () => {
            Navigate("/InicioVideos")
            //window.location = 'https://gana-loco-ander.vercel.app'
        };

        const ReproductorVideos = (videoId) => {
            Navigate(`/Reproducir/${videoId}`);
        };


        return (

            <>
            <header>
                <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top border">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="#"></a>
                        <a class="navbar-brand" href="#"></a>

                        <img  src="https://img.icons8.com/?size=100&id=85011&format=png&color=000000" alt='star' height="30" className='Miniatura'/>
                        {DatosUser.map((datauser) => ( <span className='m-2'> <h5  class="mb-0 text-center text-success Miniatura"> Mi Perfil  </h5> </span> )) } 

                        <a class="navbar-brand" href="#"></a>
                        <a class="navbar-brand" href="#"></a>
                        <img  src="https://img.icons8.com/?size=100&id=TZ2lKyH3LVjx&format=png&color=000000" alt='star' height="30" className='Miniatura' onClick={HOMEVideos} />
                        {DatosUser.map((datauser) => ( <span className='m-2' onClick={HOMEVideos}> <h5 class="mb-0 text-center Miniatura"> Inicio </h5> </span> )) } 
                        


                        <ul class="navbar-nav ms-auto d-flex flex-row">
                            <div className='pt-2 d-none d-md-flex input-group w-auto my-auto'>

                                {AuditLogin.map((auditlogin) => ( <span className='m-2' title='Ultimo ingreso'> <img src="https://img.icons8.com/?size=100&id=82767&format=png&color=000000" height="25"  title='Ultimo ingreso'/> {auditlogin.fecha}</span> )) } 
                            </div>

                            <li class="nav-item">
                                <a class="nav-link me-3 me-lg-0" href="#">
                                    <i class="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            <li class="nav-item "></li>

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
                    <div class="pt-1">
                    <div className='card-body'>
                    <br />
                    </div>

                        <section>

                            {/* tabla 1 millon */}
                            <div className="card mt-5">
                                <div className="row col col-12   py-3">
                                    <div className='col col-6 text-center'>
                                        <h3 className="mb-0 text-center text-success"> <strong>Mis videos</strong> </h3>
                                    </div>

                                    <div className='col col-2'></div>

                                    <div className='col col-4'>
                                        <div className="input-group mb-3 col col-6">
                                        <input type="file" className="form-control" id="videoFile" title='Archivo de video' accept='video/*'  />
                                        <input type="text" className="form-control" id="NombreVideo" title='Titulo del video' placeholder='Título...'  />
                                        
                                        <button className='btn btn-primary' onClick={UploadVideo}>Subir</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive row ps-4">


                                            {/* tabla 50 mil */}
                                            
                                            {videos.length > 0 ? (
                                                videos.map((video) => (
                                                <div key={video._id} class="card mt-2 mb-3 ms-auto me-2 col col-3 my-auto mx-auto p-2 pe-1 ps-1 pb-0">

                                                    <div className="card-body p-0">
                                                        <div className="table-responsive text-center">
                                                        
                                                        <h5 class="mb-0 text-center Miniatura" onClick={() => ReproductorVideos(video._id)} > {video.NombreVideo} </h5>
                                                        <video onClick={() => ReproductorVideos(video._id)} width="300" height="180"  className="video-preview Miniatura">
                                                            <source src={video.Url} type="video/mp4" />
                                                            Video no compatible
                                                        </video>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            ) : (
                                                  <h5 className='mb-5 pb-5'>No hay videos en la plataforma</h5>
                                            )}


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