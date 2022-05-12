import type { NextPage } from 'next'
import React,{useEffect} from 'react'
import useFormData from '../../hook/useFormData'
import Input from '../../components/Input'
import ButtonLoading from '../../components/ButtonLoading'
import DropDown from '../../components/Dropdown'
import {toast } from 'react-toastify'

import { useQuery, useMutation } from '@apollo/client';
import { Enum_EstadoUsuario , Enum_Rol} from '../../utils/enums'
import { GET_USUARIO } from '../../graphql/usuarios/queries'
import { EDITAR_USUARIO} from '../../graphql/usuarios/mutations'


import { useUser } from '../../context/userContext.js';

const Home: NextPage = () => {

    const { userData } = useUser()
    const  id = userData.id

    const{form, formData,updateFormData} = useFormData(null);


    const{data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USUARIO,{ variables:{where:{id}}});

    const [editarUsuario, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO,
        {refetchQueries:[{query:GET_USUARIO} ] } );

    const submitForm = (e:any)=>{
        e.preventDefault(); 
        editarUsuario({
            variables:{
                      where:{id}, 
                      data:{
                        nombre:{set:  Object(formData)['nombre']},
                        apellido:{set:  Object(formData)['apellido']},
                        identificacion:{set:  Object(formData)['identificacion']},
                        email:{set:  Object(formData)['email']},
                        },
                      }
        })
    };

    useEffect(()=>{
        if (mutationData){
            toast.success('Perfil modificado con exito',{position: "top-right",autoClose: 2000, hideProgressBar: true,closeOnClick: true,});
        }
    }, [mutationData])

    if (queryLoading) return <div> Cargando usuarios...</div>


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
                        name='nombre'
                        defaultValue={queryData.usuario.nombre}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Apellido:'
                        type='text'
                        name='apellido'
                        defaultValue={queryData.usuario.apellido}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Identificacion:'
                        type='text'
                        name='identificacion'
                        defaultValue={queryData.usuario.identificacion}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Correo:'
                        type='email'
                        name='email'
                        defaultValue={queryData.usuario.email}
                        required={true}
                        disabled={false}
                    />
                    <DropDown
                        label='Rol:'
                        name='rol'
                        defaultValue={queryData.usuario.rol}
                        required={true}
                        options={Enum_Rol}
                        disabled={true}
                    />
                    <DropDown
                        label='Estado:'
                        name='estado'
                        defaultValue={queryData.usuario.estado}
                        required={true}
                        options={Enum_EstadoUsuario}
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
