import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import {useEffect} from 'react'
import Link from 'next/link'
import { useQuery, useMutation } from '@apollo/client'
import useFormData from '../../../hook/useFormData'
import {toast } from 'react-toastify'
import { Loading } from 'react-loading-dot'


import { GET_USUARIO } from '../../../graphql/usuarios/queries'
import { GET_USUARIOS } from '../../../graphql/usuarios/queries'
import { EDITAR_USUARIO} from '../../../graphql/usuarios/mutations'
import { Enum_EstadoUsuario } from '../../../utils/enums'

import Input from '../../../components/Input'
import ButtonLoading from '../../../components/ButtonLoading'
import DropDown from '../../../components/Dropdown'



const Post:NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const{form, formData,updateFormData} = useFormData(null);
  const{data:queryData,error:queryError,loading:queryLoading}=useQuery(GET_USUARIO,{ variables:{where:{id}}});
  
  const [editarUsuario, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO,
      {refetchQueries:[{query:GET_USUARIOS} ] } );

  const submitForm = (e:any)=>{
      e.preventDefault(); 
      editarUsuario({
          variables:{
                    where:{id}, 
                    data:{
                        estado:{set:  Object(formData)['estado']},
                        },
                    }
      })
  };
  

  useEffect(()=>{
      if (mutationData){
          toast.success('Usuario modificado con exito',{position: "top-right",autoClose: 2000, hideProgressBar: true,closeOnClick: true,});
      }
  }, [mutationData])

  useEffect(()=>{
      if (mutationError){
        toast.error("Error al editar el usuario");
      }
      if (queryError){
      toast.error("Error al consultar el usuario");
      }
    },[queryError,mutationError]);


  if (queryLoading) return <div> <Loading background="blue" /> </div>

  return (
      <div className='d-flex flex-column w-100 h-100 p-3  '>
          <Link href="/usuarios" passHref>
              <i className='fas fa-arrow-left fa-2x' />
          </Link>
          <h1 className='text-center'>Editar Usuario</h1>
          <form
              onSubmit={submitForm}
              onChange={updateFormData}
              ref={form} 
              className='d-flex flex-column justify-content-center align-items-center'
          >
              <Input
                  label='Nombre de la persona:'
                  type='text'
                  name='nombre'
                  defaultValue={queryData.usuario.nombre}
                  required={true}
                  disabled={true}
              />
              <Input
                  label='Apellido de la persona:'
                  type='text'
                  name='apellido'
                  defaultValue={queryData.usuario.apellido}
                  required={true}
                  disabled={true}
              />
              <Input
                  label='Correo de la persona:'
                  type='email'
                  name='correo'
                  defaultValue={queryData.usuario.email}
                  required={true}
                  disabled={true}
              />
              <Input
                  label='Identificación de la persona:'
                  type='text'
                  name='identificacion'
                  defaultValue={queryData.usuario.identificacion}
                  required={true}
                  disabled={true}
              />
              <DropDown
                  label='Estado de la persona:'
                  name='estado'
                  defaultValue={queryData.usuario.estado}
                  required={true}
                  disabled={false}
                  options={Enum_EstadoUsuario}
              />
               <span>Rol del usuario: {queryData.usuario.rol}</span>
              <ButtonLoading
                  disabled={Object.keys(formData).length === 0}
                  loading={mutationLoading}
                  text='Confirmar'  
              /> 
              
          </form>
    </div>
  )


}

export default Post