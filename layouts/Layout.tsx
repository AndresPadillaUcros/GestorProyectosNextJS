import React from 'react'
import SideBar from '../components/sidebar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "context/userContext"
import { useSession, signIn } from "next-auth/react"
import { GET_USUARIO } from 'graphql/usuarios/queries'
import { useQuery, useMutation } from '@apollo/client';
import { useState ,useEffect} from "react"
import Loader from 'components/ClipLoader'


const Layout = ({children}:{children:any}) => {

    const { data: session, status } = useSession()
    const{data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USUARIO,{ variables:{where:{email:session?.user?.email}}});
    const {userData,setUserData} =useUser()

    useEffect (()=>{
        if(queryData){
            setUserData({...queryData.user,image:session?.user?.image})
        }
    },[queryData])

    if (status==='unauthenticated'){
        return (
            <div className='d-flex flex-column h-auto flex-md-row flex-nowrap'>
                <SideBar />
                <div className='d-flex vh-100 vw-100 '>
                    <div className='h-100 w-100 overflow-auto' >
                        {children}
                    </div>
                </div>
        
                <ToastContainer />
            </div>
        ) 
    }

    if (status==='authenticated'){
        // nuevamente este queryLoading es para que solo aparezca la barra cuando el sidebar ya tengo todos los menus
        if (queryLoading) return <div> <Loader /></div>
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
        )
    }else {
        return <div><Loader /></div>
    }

 }



export default Layout