import type { NextPage } from 'next'
import { useSession, signIn } from "next-auth/react"
import Loader from "../components/ClipLoader"
import ButtonAuth from "../components/Login-btn"
import type { NextPageWithAuth } from "pages/_app"


const Home= () => {

  const { data: session, status } = useSession()


  if(status==='loading') return <div>  <Loader /> </div>


  if (status === "unauthenticated") {
    return <h3 className="text-center mt-5">Sorry,you do not have acesss, please sign in </h3>
  } 


  if (status === "authenticated") {
    return <h3 className="text-center mt-5">Enjoy the application! </h3>
  } 

}

export default Home
