import type { NextPage } from 'next'
import Link from 'next/link'
import { useQuery} from '@apollo/client';
import { Loading } from 'react-loading-dot'

import { Enum_EstadoProyecto , Enum_FaseProyecto } from 'utils/enums'
import { GET_PROYECTOS } from 'graphql/proyectos/queries';
import type { NextPageWithAuth } from "pages/_app"
import { useSession } from "next-auth/react"

const Home: NextPageWithAuth = () => {



  const {data,loading}=useQuery(GET_PROYECTOS);


  if (loading) return <div> <Loading background="blue" /> </div>

  console.log("proyectos",data)


  return (
      <div>
          <h1 className='text-center'>Lista de Proyectos</h1>
          <table className='tabla'>
            <thead>
              <tr>
                <th>Nombre Proyecto</th>
                <th>Nombre Lider</th>
                <th>Fase del Proyecto</th>
                <th>Estado del Proyecto</th>
                <th>Numero de estudiantes</th>
                <th>Ver mas</th>
              </tr>
            </thead>
            <tbody>
              {data && data.proyectos ? (
                <>
                  {data.proyectos.map((u:any) => {
                    return (
                      <tr key={u.id}>
                        <td>{u.nombre}</td>
                        <td>{u.lider.name} {u.lider.apellido}</td>
                        <td>{Enum_EstadoProyecto[u.estado]}</td>
                        <td>{Enum_FaseProyecto[u.fase]}</td>
                        <td>{u.inscripciones.length}</td>
                        <td>
                          <Link href={`/lista-proyectos/editarProyecto/${u.id}`} passHref>
                            <i className='fas fa-book-reader' role="button" />
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