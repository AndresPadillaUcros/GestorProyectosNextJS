import React  from 'react';
import type { NextPage } from 'next'
import { useQuery } from '@apollo/client';
import Link from 'next/link'
import { Loading } from 'react-loading-dot'

import { Enum_EstadoInscripcion } from '../../../utils/enums';
import { GET_INSCRIPCIONES_DEL_LIDER } from '../../../graphql/inscripcion/queries';

import { useUser } from '../../../context/userContext';

const  Home: NextPage = () => {
  const { userData } = useUser(); 


  const{data:queryData,loading:queryLoading}=useQuery(GET_INSCRIPCIONES_DEL_LIDER, {variables:{where:{
                                                                                                        proyecto:{
                                                                                                          is:{
                                                                                                            lider:{
                                                                                                              is:{
                                                                                                                id:{
                                                                                                                  equals:userData.id
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                       }
                                                                                                }
                                                                                    }
                                                      );




  if (queryLoading) return <div> <Loading background="blue" /> </div>


  console.log("los inscripciones son:",queryData)



    return (
      <div>
          <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Lista de solicitudes de estudiantes:</h1>
          <span className='uppercase flex flex-col items-center justify-center text-blue-600'>Lider del proyecto: {userData.nombre + ' ' + userData.apellido}</span>
          <table className='tabla'>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Correo</th>
                <th>Proyecto Solicitado</th>
                <th>Estado de Inscripcion</th>
              </tr>
            </thead>
            <tbody>
              {queryData && queryData.inscripcions ? (
                <>
                  {queryData.inscripcions.map((u:any) => {
                    return (
                      <tr key={u.id}>
                        <td>{u.estudiante.nombre} {u.estudiante.apellido}</td>
                        <td>{u.estudiante.email}</td>
                        <td>{u.proyecto.nombre}</td>
                        <td>{Enum_EstadoInscripcion[u.estado]}
                          <Link href={`/mis-proyectos/solicitudesEstudiantes/${u.id}`} passHref>
                            <i className='fas fa-pen px-3' 
                                role='button'   
                            />
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
  };

export default Home;