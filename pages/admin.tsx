
import { useSession } from "next-auth/react"
import Loader from "../components/ClipLoader"
import type { NextPage } from 'next'
import type { NextPageWithAuth } from "./_app"

/* export type NextPageWithAuth = NextPage & {auth: boolean} */

const Home:NextPageWithAuth = () => {
  const { data: session } = useSession()


  return(
      <div>hola</div>
  )
}

export default Home


Home.auth = {
  role: "rere",
  loading: <div> lofdfdfdaging...</div>,
  unauthorized: "/localhost:300/", // redirect to this url
}


/*  function AdminDashboard() {
    const { data: session } = useSession()
    // session is always non-null inside this page, all the way down the React tree.
    return "Some super secret dashboard"
  }

 export default AdminDashboard 

AdminDashboard.auth = true */