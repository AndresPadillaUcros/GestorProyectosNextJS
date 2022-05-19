import type { NextPage } from 'next'
import { useSession, signIn } from "next-auth/react"
import Loader from "../components/ClipLoader"
import ButtonAuth from "../components/Login-btn"


const Home: NextPage = () => {

  const { data: session, status } = useSession()
  if(status==='loading') return <div>  <Loader /> </div>


  if (status === "unauthenticated") {
    return <h3 className="text-center mt-5">Sorry,you don't have acesss, please sign in</h3>
  } 


  if (status === "authenticated") {
    return <h3 className="text-center mt-5">Enjoy the application! </h3>
  } 



  return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h3>Bienvenido!  Para ver todas las opciones del gestor de proyectos por favor inicie sesion: </h3>

          <ButtonAuth />

          


        </div>
  )
}

export default Home
