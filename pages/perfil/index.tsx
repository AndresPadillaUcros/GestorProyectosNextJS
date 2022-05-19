import type { NextPage } from 'next'
import React,{useEffect} from 'react'
import {toast } from 'react-toastify'
import { Loading } from 'react-loading-dot'
import { useQuery, useMutation } from '@apollo/client';

import useFormData from '../../hook/useFormData'
import Input from '../../components/Input'
import ButtonLoading from '../../components/ButtonLoading'
import DropDown from '../../components/Dropdown'

import { Enum_EstadoUser , Enum_Rol} from '../../utils/enums'
import { GET_USUARIO } from '../../graphql/usuarios/queries'
import { EDITAR_USUARIO} from '../../graphql/usuarios/mutations'


import { useSession } from "next-auth/react"

const Home: NextPage = () => {
    
    
    const { data: session, status } = useSession()

    const userData = session?.user
    


    const{form, formData,updateFormData} = useFormData(null);

    const{data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USUARIO,{ variables:{where:{email:userData?.email}}});

    const [editarUsuario, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO,
        {refetchQueries:[{query:GET_USUARIO} ] } );

    const submitForm = (e:any)=>{
        e.preventDefault(); 
        console.log("la form data es:",formData)
        editarUsuario({
            variables:{
                      where:{email:userData?.email}, 
                      data:{
                        name:{set:  Object(formData)['name']},
                        apellido:{set:  Object(formData)['apellido']},
                        identificacion:{set:  Object(formData)['identificacion']},
                        },
                      }
        })
    };

    useEffect(()=>{
        if (mutationData){
            toast.success('Perfil modificado con exito',{position: "top-right",autoClose: 2000, hideProgressBar: true,closeOnClick: true,});
        }
    }, [mutationData])

    if(status==='loading') return <div>  <Loading background="blue" /></div>
    if (queryLoading) return <div> <Loading background="blue" /> </div>

    console.log(queryData)
    return (
        <div className='d-flex flex-column w-100 h-100 p-3  '>
                <h1 className=' text-center'>Editar Perfil</h1>
                <form
                    onSubmit={submitForm}
                    onChange={updateFormData}
                    ref={form} 
                    className='d-flex flex-column justify-content-center align-items-center'
                >
                    <Input
                        label='Nombre:'
                        type='text'
                        name='name'
                        defaultValue={queryData.user.name}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Apellido:'
                        type='text'
                        name='apellido'
                        defaultValue={queryData.user.apellido}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Identificacion:'
                        type='text'
                        name='identificacion'
                        defaultValue={queryData.user.identificacion}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Correo:'
                        type='email'
                        name='email'
                        defaultValue={queryData.user.email}
                        required={true}
                        disabled={true}
                    />
                    <DropDown
                        label='Rol:'
                        name='rol'
                        defaultValue={queryData.user.rol}
                        required={true}
                        options={Enum_Rol}
                        disabled={true}
                    />
                    <DropDown
                        label='Estado:'
                        name='estado'
                        defaultValue={queryData.user.estado}
                        required={true}
                        options={Enum_EstadoUser}
                        disabled={true}
                    />

                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoading}
                        text='Confirmar'
                    /> 
                </form>               
          </div>
    )
}

export default Home
