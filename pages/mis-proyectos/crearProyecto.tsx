import type { NextPage } from 'next'
import { useQuery, useMutation } from '@apollo/client';
import React,{useEffect,useState} from 'react'
import useFormData from '../../hook/useFormData';
import { useUser } from '../../context/userContext.js'
import { useObj,ObjContext } from '../../context/objectContext.js'

import { GET_USUARIO } from '../../graphql/usuarios/queries';
import { CREAR_PROYECTO } from '../../graphql/proyectos/mutations';
import {toast } from 'react-toastify';
import Input from '../../components/Input'
import ButtonLoading from '../../components/ButtonLoading';
import { nanoid } from 'nanoid';



const Home: NextPage = () => {

  const { userData } = useUser();

  const{form, formData,updateFormData} = useFormData(null);

  const{data:queryData,loading:queryLoading}=useQuery(GET_USUARIO,{variables:{where:{id:userData.id}}});

  const [crearProyecto, {data:mutationData, loading:mutationLoading}] = useMutation(CREAR_PROYECTO);

  const submitForm = (e:any)=>{
    e.preventDefault(); 


    const estado = 'Activo'
    const fase = 'Iniciado'
    const lider ={connect:{email:userData.email}}

    if (Object(formData)['objetivosEspecificos']){
 
        Object(formData)['objetivosEspecificos'] = Object.values(Object(formData)['objetivosEspecificos']);
        console.log("antes de ejecutarme soy, porque esto remueve los ids de cada obj:",Object(formData)['objetivosEspecificos'])
        const dataObj = Object(formData)['objetivosEspecificos']
        const objetivosEspecificos={createMany:{data:dataObj}}
        delete Object(formData)['objetivosEspecificos']
        Object(formData)['objetivosEspecificos'] = objetivosEspecificos
    } 

    const data={...formData,estado,fase,lider}

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
    
    if (queryLoading) return <div> Cargando ...</div>

    console.log(queryData)

    return (
        <div className='d-flex flex-column w-100 h-100 p-3  '>
            <h1 className='text-center'>Creacion de Proyecto</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column justify-content-center align-items-center'
            >

                <span className='text-uppercase text-primary'>Lider del proyecto: {queryData.usuario.nombre + ' ' + queryData.usuario.apellido}</span>
                <Input
                    label='Nombre del proyecto:'
                    type='text'
                    name='nombre'
                    defaultValue={''}
                    required={true}
                    className='input widthInput'
                    disabled={false}
                />
                <Input
                    label='Presupuesto:'
                    type='text'
                    name='presupuesto'
                    defaultValue={''}
                    required={true}
                    disabled={false}
                />
                <Input
                    label='Fecha de inicio:'
                    type='date'
                    name='fechaInicio'
                    defaultValue={''}
                    required={true}
                    disabled={false}
                />
                <Input
                    label='Objetivo general:'
                    type='text'
                    name='objetivoGeneral'
                    defaultValue={''}
                    required={true}
                    className='input widthInput '
                    disabled={false}
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
            <Input 
                name={`nested||objetivosEspecificos||${id}||descripcion`}  
                label='Descripcion' 
                type='text' 
                required={true} 
                disabled={false}
                defaultValue={''}
                />

            <i onClick={()=>eliminarObjetivo(id)} className='fas fa-minus cursor-pointer mt-6' />
        </div>
    )
}

export default Home
