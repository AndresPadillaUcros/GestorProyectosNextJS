import Link from 'next/link'
import { useQuery } from '@apollo/client';
import { Loading } from 'react-loading-dot'

import { Enum_EstadoInscripcion } from '../../utils/enums';
import { GET_INSCRIPCIONES_ESTUDIANTE } from '../../graphql/inscripcion/queries';
import { useUser } from '../../context/userContext';

const MisInscripciones= () => {

  const { userData } = useUser();


  const{data:queryData,loading:queryLoading}=useQuery(GET_INSCRIPCIONES_ESTUDIANTE,{variables:{where:{usuarioId:{equals:userData.id}}} });


  if (queryLoading) return <div> <Loading background="blue" /> </div>

    return (
      <div>
          <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Inscripciones realizadas:</h1>
          <span className='d-flex flex-column align-items-center justify-content-center'>Estudiante: {userData.nombre + ' ' + userData.apellido}</span>
          <table className='tabla'>
            <thead>
              <tr>
                <th>Proyecto Solicitado</th>
                <th>Lider</th>
                <th>Estado de Inscripcion</th>
                <th>Fecha de ingreso</th>
              </tr>
            </thead>
            <tbody>
              {queryData && queryData.inscripcions ? (
                <>
                  {queryData.inscripcions.map((u:any) => {
                    return (
                      <tr key={u.id}>
                        <td>{u.proyecto.nombre}
                        <Link href={`/lista-proyectos/editarProyecto/${u.proyecto.id}`} passHref>
                            <i className='fas fa-external-link-square-alt text-gray-600 hover:text-yellow-400 cursor-pointer px-3'
                                role='button'
                            />
                        </Link>
                        </td>    
                        <td>{u.proyecto.lider.name} {u.proyecto.lider.apellido}</td>
                        <td>{Enum_EstadoInscripcion[u.estado]}</td>
                        <td>
                          {u.fechaIngreso ?(
                            <>
                              {u.fechaIngreso.slice(0,-14)}
                            </>
                            ):(
                              <>Sin aceptar</>
                            )}    
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

export default MisInscripciones;