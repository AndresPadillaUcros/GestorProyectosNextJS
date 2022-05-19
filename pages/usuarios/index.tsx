import type { NextPage } from 'next'
import Link from 'next/link'
import { useQuery, } from '@apollo/client';
import Tooltip from '@material-ui/core/Tooltip';
import { Loading } from 'react-loading-dot'

import { Enum_Rol , Enum_EstadoUser } from 'utils/enums'
import { GET_USUARIOS } from 'graphql/usuarios/queries';

import type { NextPageWithAuth } from "pages/_app"

const Home: NextPageWithAuth = () => {


  const {data,loading}=useQuery(GET_USUARIOS);

  if (loading) return <div> <Loading background="blue" /> </div>


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
                    {data && data.users ? (
                      <>
                        {data.users.map((u:any) => {
                          return (
                            <tr key={u.id}>
                              <td>{u.name}</td>
                              <td>{u.apellido}</td>
                              <td>{u.email}</td>
                              <td>{u.identificacion}</td>
                              <td>{Enum_Rol[u.rol]}</td>
                              <td>{Enum_EstadoUser[u.estado]}
                                  <Link href={`/usuarios/editarUsuario/${u.id}`} passHref>
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

Home.auth=true