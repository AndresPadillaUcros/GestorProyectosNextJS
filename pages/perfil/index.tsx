import type { NextPage } from 'next'
import React,{useEffect,useState} from 'react'
import {toast } from 'react-toastify'
import { Loading } from 'react-loading-dot'
import { useQuery, useMutation } from '@apollo/client';

import useFormData from 'hook/useFormData'
import Input from 'components/Input'
import ButtonLoading from 'components/ButtonLoading'
import DropDown from 'components/Dropdown'

import { Enum_EstadoUser , Enum_Rol} from 'utils/enums'
import { GET_USUARIO } from 'graphql/usuarios/queries'
import { EDITAR_USUARIO} from 'graphql/usuarios/mutations'

import Image from 'next/image'

import type { NextPageWithAuth } from "pages/_app"
import { useUser } from 'context/userContext';

const Home: NextPageWithAuth = () => {
    
    
    const { userData } = useUser()

    const [load, setLoad] = useState(false)
    
    const{form, formData,updateFormData} = useFormData(null);

   
                 
    const [editarUsuario, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO,
        {refetchQueries:[{query:GET_USUARIO} ] } );

    const submitForm = (e:any)=>{
        e.preventDefault(); 
        console.log("la form data es:",formData)
        editarUsuario({
            variables:{
                      where:{email:userData.email}, 
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



    return (
        <div className='d-flex flex-column w-100 h-100 p-3  '>
                <h1 className=' text-center'>Editar Perfil</h1>

                <div className='d-flex flex-row justify-content-center align-items-center '>

                    <div className='d-flex flex-column justify-content-center mx-5'>
                            <img 
                                src={userData.image}
                                alt={"Profile picture"}
                                width={300}
                                height={300}     
                            />              
                    </div>

                    <form
                        onSubmit={submitForm}
                        onChange={updateFormData}
                        ref={form} 
                        className='d-flex flex-column justify-content-center align-items-center mx-5'
                    >
                        <Input
                            label='Nombre:'
                            type='text'
                            name='name'
                            defaultValue={userData.name}
                            required={true}
                            readOnly={false}
                        />
                        <Input
                            label='Apellido:'
                            type='text'
                            name='apellido'
                            defaultValue={userData.apellido}
                            required={true}
                            readOnly={false}
                        />
                        <Input
                            label='Identificacion:'
                            type='text'
                            name='identificacion'
                            defaultValue={userData.identificacion}
                            required={true}
                            readOnly={false}
                        />
                        <Input
                            label='Correo:'
                            type='email'
                            name='email'
                            defaultValue={userData.email}
                            required={true}
                            readOnly={true}
                        />
                        <DropDown
                            label='Rol:'
                            name='rol'
                            defaultValue={userData.rol}
                            required={true}
                            options={Enum_Rol}
                            readOnly={true}
                        />
                        <DropDown
                            label='Estado:'
                            name='estado'
                            defaultValue={userData.estado}
                            required={true}
                            options={Enum_EstadoUser}
                            readOnly={true}
                        />

                        <ButtonLoading
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                            text='Confirmar'
                        /> 
                    </form>               



                </div>
          </div>
    )
}

export default Home

Home.auth=true