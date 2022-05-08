import type { NextPage } from 'next'
import { Enum_Rol , Enum_EstadoUsuario } from '../../utils/enums'
import Link from 'next/link'

const Home: NextPage = () => {

  const data =
    {
      Usuarios:[ 
          {_id:'1',nombre:'Andres', apellido :'Padilla',correo:'and@hot.com', identificacion:'11100',rol:'ESTUDIANTE',estado:'PENDIENTE'},
          {_id:'1',nombre:'Andres', apellido :'Padilla',correo:'and@hot.com', identificacion:'11105',rol:'ESTUDIANTE',estado:'PENDIENTE'}
      ]
    }
  


  return (
      <div>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Lista de Usuarios</h1>
                <table className='tabla'>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Correo</th>
                      <th>Identificación</th>
                      <th>Rol</th>
                      <th>Estado</th>

                    </tr>
                  </thead>
                  <tbody>
                    {data && data.Usuarios ? (
                      <>
                        {data.Usuarios.map((u) => {
                          return (
                            <tr key={u._id}>
                              <td>{u.nombre}</td>
                              <td>{u.apellido}</td>
                              <td>{u.correo}</td>
                              <td>{u.identificacion}</td>
                              <td>{Enum_Rol[u.rol]}</td>
                              <td>{Enum_EstadoUsuario[u.estado]}
                                  <Link href={`/usuarios/editar/${u._id}`}>
                                    <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer px-3' />
                                  </Link>         
                              </td>
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
