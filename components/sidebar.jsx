import React from 'react'
import Link from 'next/link'

import ButtonAuth from "../components/Login-btn"

const SideBar = () => {
  return (
    <div className="d-flex flex-column h-100 flex-md-row flex-nowrap "> 
 
        <nav id="sidebar" className='vh-100 '>
            <div className="sidebar-header">
                <h3>GESTOR DE PROYECTOS</h3>
            </div>

            <ul className="list-unstyled components">
                <p> </p>

                <li>
                    <Link href="/"> Inicio</Link>
                </li>

                <li>
                    <Link href="/perfil"> Perfil</Link>
                </li>

                <li>
                    <Link href="/usuarios"> Usuarios</Link>
                </li>
                
                <li>
                    <Link href="/lista-proyectos"> Proyectos</Link>
                </li>


                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Mis proyectos </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <Link href="/mis-proyectos/">Ver mis proyectos</Link>
                        </li>

                        <li>
                            <Link href="/mis-proyectos/crearProyecto">Crear proyecto</Link>
                        </li>

                        <li>
                            <Link href="/mis-proyectos/solicitudesEstudiantes/"> Solicitudes de estudiantes</Link>
                        </li>

                        <li>
                            <Link href="/mis-proyectos/misInscripciones"> Mis inscripciones</Link>
                        </li>

                    </ul>
                </li>


            </ul>
            <ButtonAuth />
            
        </nav>   


    </div>


    

  )
}

export default SideBar