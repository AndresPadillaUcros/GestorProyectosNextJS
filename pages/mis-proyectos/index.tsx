import type { NextPage } from 'next'
import Link from 'next/link'
import { Enum_EstadoProyecto , Enum_FaseProyecto } from '../../utils/enums'

const queryDataProyecto =
{
  FiltrarProyectoPorLider:[ 
    {_id:'1',nombre:'Proyecto 1', lider:{nombre:'Amdres',apellido:'Marica'} ,estado:'ACTIVO', fase:'INICIADO'},
    {_id:'1',nombre:'Proyecto 1', lider:{nombre:'Amdres',apellido:'Marica'} ,estado:'ACTIVO', fase:'INICIADO'},
  ]
}


const Home: NextPage = () => {
  return (
    <div>
        <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Mis proyectos</h1>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre Proyecto</th>
              <th>Fase</th>
              <th>Estado</th>
              <th>Nombre Lider</th>
            </tr>
          </thead>
          <tbody>
            {queryDataProyecto && queryDataProyecto.FiltrarProyectoPorLider ? (
              <>
                {queryDataProyecto.FiltrarProyectoPorLider.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}
                        <Link href={`/proyectos/editar/${u._id}`}>
                          <i className='fas fa-book-reader text-yellow-600 hover:text-yellow-400 cursor-pointer px-3' />
                        </Link> 
                      </td>
                      <td>{Enum_EstadoProyecto[u.estado]}</td>
                      <td>{Enum_FaseProyecto[u.fase]}</td>
                      <td>{u.lider.nombre} {u.lider.apellido}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div> No autorizado </div>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default Home
