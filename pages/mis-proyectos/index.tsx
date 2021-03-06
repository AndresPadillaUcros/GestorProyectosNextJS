import type { NextPage } from 'next'
import Link from 'next/link'

import { useQuery} from '@apollo/client';
import { Loading } from 'react-loading-dot'

import { Enum_EstadoProyecto , Enum_FaseProyecto } from 'utils/enums'
import { GET_PROYECTOS_LIDER } from 'graphql/proyectos/queries'

import type { NextPageWithAuth } from "pages/_app"
import { useUser } from 'context/userContext';

const Home: NextPageWithAuth = () => {


  const { userData } = useUser()


  const{data:queryData,loading:queryLoading}=useQuery(GET_PROYECTOS_LIDER,{variables:{where:{lider:{is:{email:{equals:userData.email}}}}}});

  if (queryLoading ) return <div> <Loading background="blue" /> </div>


  return (
    <div>
        <h1 className=' text-center'>Mis proyectos</h1>
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
            {queryData && queryData.proyectos ? (
              <>
                {queryData.proyectos.map((u:any) => {
                  return (
                    <tr key={u.id}>
                      <td>{u.nombre}
                        <Link href={`/lista-proyectos/editarProyecto/${u.id}`} passHref>
                          <i className='fas fa-book-reader text-yellow-600 hover:text-yellow-400 cursor-pointer px-3' />
                        </Link> 
                      </td>
                      <td>{Enum_EstadoProyecto[u.estado]}</td>
                      <td>{Enum_FaseProyecto[u.fase]}</td>
                      <td>{u.lider.name} {u.lider.apellido}</td>
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