import type { NextPage } from 'next'
import { useQuery, useMutation } from '@apollo/client';
import {useEffect,useState} from 'react'
import {toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Loading } from 'react-loading-dot'

import Input from 'components/Input'
import ExtendedInput from 'components/ExtendedInput'
import ButtonLoading from 'components/ButtonLoading';

import useFormData from 'hook/useFormData';


import { useObj,ObjContext } from 'context/objectContext.js'
import { GET_USUARIO } from 'graphql/usuarios/queries';
import { CREAR_PROYECTO } from 'graphql/proyectos/mutations';

import type { NextPageWithAuth } from "pages/_app"
import { useUser } from 'context/userContext';


const Home: NextPageWithAuth = () => {

const { userData } = useUser()

  const{form, formData,updateFormData} = useFormData(null);

  const [crearProyecto, {data:mutationData, loading:mutationLoading}] = useMutation(CREAR_PROYECTO);

  const submitForm = (e:any)=>{
    e.preventDefault(); 


    const lider ={connect:{email:userData.email}}

    if (Object(formData)['objetivosEspecificos']){
 
        Object(formData)['objetivosEspecificos'] = Object.values(Object(formData)['objetivosEspecificos']);
        console.log("antes de ejecutarme soy, porque esto remueve los ids de cada obj:",Object(formData)['objetivosEspecificos'])
        const dataObj = Object(formData)['objetivosEspecificos']
        const objetivosEspecificos={createMany:{data:dataObj}}
        delete Object(formData)['objetivosEspecificos']
        Object(formData)['objetivosEspecificos'] = objetivosEspecificos
    } 

    const data={...formData,lider}

    console.log("la data es:",data)
    crearProyecto({
        variables:{data}
      })
    };

    useEffect(()=>{
        if (mutationData){
            toast.success('Proyecto creado con exito',{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
    }, [mutationData])
    
    return (
        <div className='d-flex flex-column w-100 h-100 p-3  '>
            <h1 className='text-center'>Creacion de Proyecto</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column justify-content-center align-items-center'
            >

                <span className='text-uppercase text-primary'>Lider del proyecto: {userData.name + ' ' + userData?.apellido}</span>
                <ExtendedInput
                    label='Nombre del proyecto:'
                    type='text'
                    name='nombre'
                    defaultValue={''}
                    required={true}
                    className='input widthInput'
                    readOnly={false}
                />
                <Input
                    label='Presupuesto:'
                    type='text'
                    name='presupuesto'
                    defaultValue={''}
                    required={true}
                    readOnly={false}
                />
                <Input
                    label='Fecha de inicio:'
                    type='date'
                    name='fechaInicio'
                    defaultValue={''}
                    required={true}
                    readOnly={false}
                />
                <ExtendedInput
                    label='Objetivo general:'
                    type='text'
                    name='objetivoGeneral'
                    defaultValue={''}
                    required={false}
                    className='input widthInput '
                    readOnly={false}
                />
                <Objetivos />

                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Crear Proyecto'
                /> 

            </form>
            
    </div>
    )
    };


const Objetivos=()=>{

    const [listaObjetivos ,setListaObjetivos]=useState<any[]>([])

    const eliminarObjetivo =(id:any)=>{
        setListaObjetivos(listaObjetivos.filter(el=>el.props.id !== id));
    }


    const componenteObjetivoAgregado =()=>{
        const id1 =nanoid();
        
        return <FormObjetivo key={id1} id={id1} />
        
    }
    return (
        <ObjContext.Provider value={{eliminarObjetivo}}>
            <div className='text-center my-3'>
                <span> Objetivos especificos</span>
                <i
                    onClick={()=>setListaObjetivos([...listaObjetivos,componenteObjetivoAgregado()])}
                    className='fas fa-plus cursor-pointer'
                />
                {listaObjetivos.map(objetivo=>{
                    return objetivo;
                })}
            </div>
        </ObjContext.Provider>
    );
}

const FormObjetivo=({id}:{id:any})=>{
    const {eliminarObjetivo} =useObj();

    return(
        <div className='flex items-center'>
            <ExtendedInput 
                name={`nested||objetivosEspecificos||${id}||descripcion`}  
                label='Descripcion' 
                type='text' 
                required={true} 
                readOnly={false}
                defaultValue={''}
                />

            <i onClick={()=>eliminarObjetivo(id)} className='fas fa-minus cursor-pointer mt-6' />
        </div>
    )
}

export default Home
Home.auth=true