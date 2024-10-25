import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import '../index.css'

Modal.setAppElement('#root');

function InfoUser({ onLogout }){

    const [GetCodigos, SetCodigos] = useState(''); //almaceno los datos obtenidos 
    const [codigo, setCodigo] = useState('');
    const [DatosTabla, setDatosTabla] = useState([]); 
    const [DatosUser, setDatosUser] = useState([]); 
   
    //if(user!=='Admin' || !user){
    //    return <Navigate to="/"/>
    //}

    
      const handleLogout = () => {
        localStorage.clear();
        onLogout();
      };
      

    useEffect(() => {

        const CargarTabla = async () => {
          try {

            const response1 = await axios.get('http://localhost:5000/apiv1/info_user_tabla');
            setDatosTabla(response1.data);

          } catch (error) {
            console.error(error);
          }
        };
        
        const CargarInfoUser = async () => {
            try {
  
              const response2 = await axios.get('http://localhost:5000/apiv1/info_user');
              setDatosUser(response2.data);
  
            } catch (error) {
              console.error(error);
            }
          };


        CargarTabla();
        CargarInfoUser();

        //console.log("DATOS: ", DatosUser);
    }, []);


    return (
        <>
        
        <header>

            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top border">

                <div class="container-fluid">

                    <a class="navbar-brand col-sm-1" href="#"> </a>
                     {DatosUser.map((datauser) => ( <span className='m-2'> Bievenido: <h5 class="mb-0 text-center"> {datauser.user} </h5> </span> )) } 
                    
                    <ul class="navbar-nav ms-auto d-flex flex-row">

                        <div className='pt-2 d-none d-md-flex input-group w-auto my-auto'><span> <strong>ultimo acceso: </strong> 24/12/2024 16:15 PM  </span></div>

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
                            <button className='btn btn-primary' onClick={handleLogout}> 
                                <img src="https://img.icons8.com/?size=100&id=42471&format=png&color=000000" class="rounded-circle" height="22"
                                    alt="" loading="lazy" />  <span>Exit</span>
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
        
        
            {
                //aqui empieza la tabla de infomación
            }


            <main>
                <div class="container pt-4">

                <div className='card-body'>
                <br />
                </div>
                    <section class="mb-4">
                        <div class="card mt-5">


                        <div class="container-fluid px-1 py-5 mx-auto">
                            <div class="row d-flex justify-content-center">
                                    
                                    <div class="form-card">
                                        <h5 class="text-center ">Registra nuevos códigos</h5>
                                        <form class="form-card" >

                                            <div class="row justify-content-between text-left">
                                                <dir class="col-sm-2"></dir>
                                                <div class="form-group col-sm-8 flex-column d-flex"> 
                                                    <label class="form-control-label px-3" htmlFor='codigo'>Código<span class="text-danger"> *</span></label> 
                                                    <input type="number" id="codigo" name="codigo" placeholder="1000"  required autoFocus/> </div>
                                                <dir class="col-sm-2"></dir>
                                            </div>

                                            <div class="row justify-content-between text-left mt-3">
                                                <dir class="col-sm-2"></dir>
                                                <div class="form-group col-sm-8"> <button type="submit" class="btn btn-primary">Registrar</button> </div>
                                                <dir class="col-sm-2"></dir>
                                            </div>
                                        </form>
                                    </div>
                                
                            </div>
                        </div>


                            <div class="card-header text-center py-3">
                                <h5 class="mb-0 text-center">
                                    <strong>Lista de códigos registrados</strong>
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover text-nowrap ">

                                        <thead>
                                            <tr>
                                                <th scope="col">Fecha de registro</th>
                                                <th scope="col">Código ingresado</th>
                                                <th scope="col">Premio </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            { DatosTabla.map((datospremio) => (
                                            <tr key={datospremio._id}>
                                                <td>{datospremio.fecha}</td>
                                                <td>{datospremio.codigo}</td>
                                                <td>{datospremio.premio}</td>
                                            </tr>
                                            )) 
                                             } 
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            
        </>
    )
}

export default InfoUser