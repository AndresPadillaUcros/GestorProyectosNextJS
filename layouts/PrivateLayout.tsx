import React from 'react'
import SideBar from '../components/sidebar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from 'react-loading-dot'

import { useState ,useEffect} from "react"
import { useUser } from "context/userContext"
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from 'graphql/usuarios/queries'

import { useSession, signIn } from "next-auth/react"
import Loader from 'components/ClipLoader'

const PrivateLayout = ({children}:{children:any}) => {

    const { data: session, status } = useSession()

    const {userData,setUserData} =useUser()
    
    const{data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USUARIO,{ variables:{where:{email:session?.user?.email}}});

    // Esto es para que el private layout haga el render (sidebar) aun cuando no haya tomado los datos de la Query. Este useEffect solo funciona una vez, es
    // decir que el query solo se hace en la primera pagina que cargue con el private component
    // Pero luego pongo queryLoading para que solo salga el sidebar cuando esten todos los menus cargados

    useEffect (()=>{
        if(queryData){
            setUserData({...queryData.user,image:session?.user?.image})
        }
    },[queryData])

   
    if(queryLoading) return   <div> <Loader /> </div>

  return (
    <div className='d-flex flex-column h-auto flex-md-row flex-nowrap'>
        <SideBar />
        <div className='d-flex vh-100 vw-100 '>
            <div className='h-100 w-100 overflow-auto' >
                {queryData&&(children)}
            </div>
        </div>

        <ToastContainer />
    </div>
)}

export default PrivateLayout