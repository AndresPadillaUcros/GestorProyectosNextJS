import React from 'react'
import Link from 'next/link'

import ButtonAuth from "components/Login-btn"
import PrivateComponent from 'components/PrivateComponent';
import { useUser } from 'context/userContext';

const SideBar = () => {

    const {userData}=useUser()

    
  return (
    <div className="d-flex flex-column h-100 flex-md-row flex-nowrap "> 
 
        <nav id="sidebar" className='vh-100 '>
            <div className="sidebar-header d-dflex text-center">
                <h3>GESTOR DE PROYECTOS</h3>
            </div>

            <PrivateComponent roleList={['Lider','Administrador','Estudiante']}>
                <div className="d-dflex text-center">
                    <h6>Rol: {userData.rol}</h6>
                </div>
            </PrivateComponent>

            <ul className="list-unstyled components">
                <p> </p>
                <PrivateComponent roleList={['Lider','Administrador','Estudiante']}>
                    <li><Link href="/"> Inicio</Link></li>
                    <li><Link href="/perfil"> Perfil</Link></li>
                </PrivateComponent>

                <PrivateComponent roleList={['Lider','Administrador']}>
                    <li><Link href="/usuarios"> Usuarios</Link></li>
                </PrivateComponent>
                
                <PrivateComponent roleList={['Lider','Administrador','Estudiante']}>
                 <li> <Link href="/lista-proyectos"> Proyectos</Link></li>
                </PrivateComponent>

                <PrivateComponent roleList={['Estudiante','Lider']}>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Mis proyectos </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">

                        <PrivateComponent roleList={['Lider']}>
                            <li> <Link href="/mis-proyectos/">Ver mis proyectos</Link></li>
                            <li><Link href="/mis-proyectos/crearProyecto">Crear proyecto</Link></li>
                            <li><Link href="/mis-proyectos/solicitudesEstudiantes/"> Solicitudes de estudiantes</Link></li>
                        </PrivateComponent>

                        <PrivateComponent roleList={['Estudiante']}>
                        <li><Link href="/mis-proyectos/misInscripciones"> Mis inscripciones</Link></li>
                        </PrivateComponent>

                    </ul>
                </li>
                </PrivateComponent>


            </ul>
            <ButtonAuth />
   



        </nav>   


    </div>


    

  )
}

export default SideBar