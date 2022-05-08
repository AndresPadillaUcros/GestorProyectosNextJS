import React from 'react'


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
                    <a href="/"> Inicio</a>
                </li>

                <li>
                    <a href="/perfil"> Perfil</a>
                </li>

                <li>
                    <a href="/usuarios"> Usuarios</a>
                </li>
                
                <li>
                    <a href="/lista-proyectos"> Proyectos</a>
                </li>


                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Mis proyectos </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/mis-proyectos/">Ver mis proyectos</a>
                        </li>

                        <li>
                            <a href="/mis-proyectos/crearProyecto">Crear proyecto</a>
                        </li>

                        <li>
                            <a href="/mis-proyectos/solicitudesEstudiantes"> Solicitudes de estudiantes</a>
                        </li>

                    </ul>
                </li>


            </ul>

        </nav>   
        
        <div >
                <div >
                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </div>
        </div>


    </div>


    

  )
}

export default SideBar