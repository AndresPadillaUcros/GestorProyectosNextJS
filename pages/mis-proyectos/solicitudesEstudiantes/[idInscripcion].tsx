import React,{useEffect} from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'


import { useQuery, useMutation } from '@apollo/client';
import useFormData from 'hook/useFormData';
import {toast } from 'react-toastify';
import { Loading } from 'react-loading-dot'


import ButtonLoading from 'components/ButtonLoading';
import DropDown from 'components/Dropdown';

import { Enum_EstadoInscripcion } from 'utils/enums';
import { GET_INSCRIPCION,GET_INSCRIPCIONES } from 'graphql/inscripcion/queries';
import { APROBAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import type { NextPageWithAuth } from "pages/_app"



const EditarInscripcion:NextPageWithAuth=()=> {

    const router = useRouter()
    const { idInscripcion } = router.query


    const{form, formData,updateFormData} = useFormData(null);   


    const{data:queryDataInscripcion,loading:queryLoadingInscripcion}=useQuery(GET_INSCRIPCION,{variables:{where:{id:idInscripcion}}});
    
    const [aprobarInscripcion, {data:mutationData, loading:mutationLoading}] = useMutation(APROBAR_INSCRIPCION,
        {refetchQueries:[{query:GET_INSCRIPCIONES},{query:GET_INSCRIPCION,variables:{where:{id:idInscripcion}}} ] } );

    const submitForm = (e:any)=>{
        e.preventDefault(); 


        const data={
            estado:{set:  Object(formData)['estado']},
        }

        aprobarInscripcion({
            variables:{data,
                where:{id:idInscripcion}
            }
        })
    };
    
    useEffect(()=>{
        if (mutationData){
            toast.success('Inscripcion aprobada con exito',{position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true,});
        }
    }, [mutationData])

    
    if (queryLoadingInscripcion) return <div>  <Loading background="blue" /> </div>
    
    console.log("la inscripcion es:", queryDataInscripcion)
    const inscripcion= queryDataInscripcion.inscripcion.estudiante

    return (
        <div className='p-10'>

            <Link href="/mis-proyectos/solicitudesEstudiantes" passHref>
              <i className='fas fa-arrow-left fa-2x' />
            </Link>


            <h1 className='m-4 text-center'>Informacion del Estudiante</h1>
        
            <div className='d-flex flex-column p-10 align-items-center m-2 '>
                <span className='uppercase  text-blue-600'>  Nombre:{' '+inscripcion.nombre} {inscripcion.apellido}  </span>
                <span className='uppercase  text-blue-600'>  Correo: {' '+inscripcion.email}  </span>
            </div>

            <h3 className='text-center my-5'>Proyectos donde participa el estudiante:</h3>
            <table className='tabla tabla2' >
                <thead>
                <tr>
                    <th>Proyecto</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                 {inscripcion.inscripciones.map((u:any) => {
                    return (
                        <tr key={u._id}>
                             <td>{u.proyecto.nombre}</td>
                             <td>{u.estado}</td>
                        </tr>
                    )
                 })}
                </tbody>
            </table>

            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column  justify-content-center align-items-center '
            >  

                <DropDown
                    label='Estado Inscripcion:'
                    name='estado'
                    defaultValue={queryDataInscripcion.inscripcion.estado}
                    required={true}
                    options={Enum_EstadoInscripcion}
                    readOnly={false}
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

export default EditarInscripcion;

EditarInscripcion.auth=true