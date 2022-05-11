import type { NextPage } from 'next'
import { Enum_EstadoProyecto , Enum_FaseProyecto } from '../../utils/enums'
import Link from 'next/link'
import { GET_PROYECTOS } from '../../graphql/proyectos/queries';
import { useQuery, useMutation } from '@apollo/client';

const Home: NextPage = () => {

  const {data,loading}=useQuery(GET_PROYECTOS);


  if (loading) return <div> Cargando usuarios...</div>

  console.log(data)


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
                <th>Ver mas</th>
              </tr>
            </thead>
            <tbody>
              {data && data.proyectos ? (
                <>
                  {data.proyectos.map((u:any) => {
                    return (
                      <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.lider.nombre} {u.lider.apellido}</td>
                        <td>{Enum_EstadoProyecto[u.estado]}</td>
                        <td>{Enum_FaseProyecto[u.fase]}</td>
                        <td>
                          <Link href={`/proyectos/editar/${u._id}`}>
                            <i className='fas fa-book-reader text-yellow-600 hover:text-yellow-400 cursor-pointer' />
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
