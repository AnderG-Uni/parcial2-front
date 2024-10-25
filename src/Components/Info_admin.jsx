import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../index.css'

function InfoAdmin(){
   

    //const home = useNavigate();

   

    //function goHome(){
    //    home("/");
    //}

    function handleClick(e){
        // console.log(signoEditar);
        // console.log(textoEditar);
        e.preventDefault();
        fetch(`https://horoscopo-api-ander.vercel.app/v1/signos/${signoEditar}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"textoEditar": textoEditar})
        })
    }


    return (

        <>
        <header>

            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top border">

                <div class="container-fluid">

                    <a class="navbar-brand" href="#">
                        <img src="https://img.icons8.com/?size=100&id=18666&format=png&color=000000" height="35" alt="" loading="lazy" />
                    </a>

                    <form class="d-none d-md-flex input-group w-auto my-auto">
                        <input autocomplete="off" type="search" class="form-control rounded"
                            placeholder='Search...' />
                        
                    </form>

                    <span className='m-2'><h5 class="mb-0 text-center"> Bievenido:  Admin</h5> </span>


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
                            <button className='btn btn-primary' > 
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
                            <div class="card-header text-center py-3">
                                <h5 class="mb-0 text-center">
                                    <strong>Lista de usuarios ganadores</strong>
                                </h5>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover text-nowrap ">
                                        <thead>
                                            <tr>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Cedula</th>
                                                <th scope="col">Telefono</th>
                                                <th scope="col">Código</th>
                                                <th scope="col">Premio</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                
                                                <td>228</td>
                                                <td>350</td>
                                                <td>$4,787.64</td>
                                                <td>$13.68</td>
                                                <td>$4,787.64</td>
                                                <td>$13.68</td>
                                            </tr>
                                            <tr>
                                                
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>-48.8%%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>29.6%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>14.0%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>46.4%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>29.6%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>-11.5%</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>-17,654</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>28</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>111</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>$-1.78</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
                                                    </span>
                                                </td>
                                                
                                            </tr>
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

export default InfoAdmin