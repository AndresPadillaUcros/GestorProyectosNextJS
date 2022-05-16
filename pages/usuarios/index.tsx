import type { NextPage } from 'next'
import { Enum_Rol , Enum_EstadoUsuario } from '../../utils/enums'
import Link from 'next/link'
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import Tooltip from '@material-ui/core/Tooltip';

const Home: NextPage = () => {


  const {data,loading}=useQuery(GET_USUARIOS);

  if (loading) return <div> Cargando usuarios...</div>


  return (
      <div>
                <h1 className='text-center'>Lista de Usuarios</h1>
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
                    {data && data.usuarios ? (
                      <>
                        {data.usuarios.map((u:any) => {
                          return (
                            <tr key={u.id}>
                              <td>{u.nombre}</td>
                              <td>{u.apellido}</td>
                              <td>{u.email}</td>
                              <td>{u.identificacion}</td>
                              <td>{Enum_Rol[u.rol]}</td>
                              <td>{Enum_EstadoUsuario[u.estado]}
                                  <Link href={`/usuarios/editarUsuario/${u.id}`}>
                                    <Tooltip title='Editar'>
                                      <i className='fas fa-pen' role="button"/>
                                    </Tooltip>
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
