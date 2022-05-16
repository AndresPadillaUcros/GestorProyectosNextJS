import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import useFormData from '../../../hook/useFormData';
import {toast } from 'react-toastify';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Dialog } from '@mui/material';

import Input from '../../../components/Input'
import ButtonLoading from '../../../components/ButtonLoading';
import DropDown from '../../../components/Dropdown';

import { Enum_EstadoProyecto , Enum_FaseProyecto} from '../../../utils/enums';
import { GET_PROYECTO,GET_PROYECTOS} from '../../../graphql/proyectos/queries';

import {EDITAR_OBJETIVO,CREAR_OBJETIVO,ELIMINAR_OBJETIVO,EDITAR_PROYECTO} from '../../../graphql/proyectos/mutations';

import { CREAR_INSCRIPCION } from '../../../graphql/inscripcion/mutations';

import { CREAR_AVANCE } from '../../../graphql/avances/mutations'; 
import { GET_AVANCES } from '../../../graphql/avances/queries'; 


import { useUser } from '../../../context/userContext.js'

/* import { useUser } from 'context/userContext'; */


function EditarProyecto() {        

    const router = useRouter()
    const { idProyecto } = router.query

    const { userData } = useUser();
  

    const{form, formData,updateFormData} = useFormData(null);
    
    const{data:queryDataProyecto,error:queryErrorProyecto,loading:queryLoadingProyecto}=useQuery(GET_PROYECTO,{variables:{where:{id:idProyecto}} } );

    const [editarProyecto, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_PROYECTO,
        {refetchQueries:[{query:GET_PROYECTOS} ] });


    const submitForm = (e:any)=>{
        e.preventDefault() 
        console.log('datos enviados;', formData)
        const data={
            nombre:{set:  Object(formData)['nombre']},
            presupuesto:{set:  Object(formData)['presupuesto']},
            fechaInicio:{set:  Object(formData)['fechaInicio']},
            fechaFin:{set:  Object(formData)['fechaFin']},
            estado:{set:  Object(formData)['estado']},
            fase:{set:  Object(formData)['fase']},

        }
        editarProyecto(
                { variables:{data,where:idProyecto} } 
            )    
    };

    useEffect(()=>{
        if (mutationData){
            toast.success('Proyecto modificado con exito', {position: "top-right", autoClose: 2000, hideProgressBar: true,closeOnClick: true});
        }
    }, [mutationData])

    useEffect(()=>{
        if (mutationError){
          toast.error("Error al editar el proyecto");
        }
        if (queryErrorProyecto){
        toast.error("Error al consultar el proyecto");
        }
      },[queryErrorProyecto,mutationError]);
    


    if (queryLoadingProyecto) return <div> Cargando...</div>
    console.log('datos proyecto:', queryDataProyecto)


    if (queryDataProyecto.proyecto) {
    return (
        <div className='d-flex flex-column w-100 h-100 p-3 '>


            <h1 className='text-center'>Informacion del Proyecto</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column justify-content-center align-items-center'
            >     
                    <span className='text-uppercase'>Lider del proyecto: {queryDataProyecto.proyecto.lider.nombre+ ' ' + queryDataProyecto.proyecto.lider.apellido}</span>

     
                      <Input
                        label='Nombre del proyecto:'
                        type='text'
                        name='nombre'
                        defaultValue={queryDataProyecto.proyecto.nombre}
                        required={true}
                        className='input widthInput'
                        disabled={false}
                      />

{/*                       <Input
                        label='Nombre del proyecto:'
                        type='text'
                        name='nombre'
                        defaultValue={queryDataProyecto.proyecto.nombre}
                        required={true}
                        className='input widthInput'
                        disabled={true}
                      /> */}
       
                      <Input
                        label='Presupuesto del proyecto:'
                        type='string'
                        name='presupuesto'
                        defaultValue={queryDataProyecto.proyecto.presupuesto}
                        required={true}
                        disabled={false}
                      />
         
{/*                       <Input
                        label='Presupuesto del proyecto:'
                        type='string'
                        name='presupuesto'
                        defaultValue={queryDataProyecto.proyecto.presupuesto}
                        required={true}
                        disabled={true}
                      /> */}
              
                      <Input
                        label='Fecha Inicio:'
                        type='text'
                        name='fechaInicio'
                        defaultValue={queryDataProyecto.proyecto.fechaInicio.slice(0,-14)}
                        required={true}
                        disabled={true}
                      />

                      <Input
                        label='Objetivo General:'
                        type='text'
                        name='objetivoGeneral'
                        defaultValue={queryDataProyecto.proyecto.objetivoGeneral}
                        required={true}
                        className='input widthInput'
                        disabled={false}
                      />

{/*                       <Input
                        label='Objetivo General:'
                        type='text'
                        name='objetivoGeneral'
                        defaultValue={queryDataProyecto.proyecto.objetivoGeneral}
                        required={true}
                        className='input widthInput'
                        disabled={true}
                      /> */}

                      <VerObjetivosEspecificos
                          objetivos={queryDataProyecto.proyecto.objetivosEspecificos}
                          idProyecto={idProyecto}
                      />

                      <VerEstudiantes
                          inscripciones={queryDataProyecto.proyecto.inscripciones}
                      />

                      <VerAvancesProyecto 
                          idProyecto={idProyecto}
                      />

                      <DropDown
                          label='Estado del proyecto:'
                          name='estado'
                          defaultValue={queryDataProyecto.proyecto.estado}
                          required={true}
                          options={Enum_EstadoProyecto}
                          disabled={false}
                      />

                      <DropDown
                          label='Fase del proyecto:'
                          name='fase'
                          defaultValue={queryDataProyecto.proyecto.fase}
                          required={true}
                          options={Enum_FaseProyecto}
                          disabled={false}

                      /> 
               
                        <ButtonLoading
                            disabled={Object.keys(formData).length === 0}
                            loading={mutationLoading}
                            text='Confirmar'                        
                        /> 
      
            </form>

                <InscricpionProyecto
                    idProyecto={idProyecto}
                    estado={queryDataProyecto.proyecto.estado}
                    inscripciones={queryDataProyecto.proyecto.inscripciones}
                />
        </div>
     )};
    return <></>;
};



const VerObjetivosEspecificos= ({objetivos,idProyecto}:{objetivos:any;idProyecto:any})=>{

    const [showEditDialog, setShowEditDialog]=useState(false);
    return(
        <>         
            <Accordion className='mt-3'>
                <AccordionSummary className='d-flex flex-column justify-content-center'>Ver objetivos especificos</AccordionSummary>
                    <table className='tabla tabla3' >
                        <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Descripcion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {objetivos.map((u:any,i:any) =>(
                            <Objetivo 
                                idObjetivo={u._id}
                                descripcion={u.descripcion}
                                index={i}
                                idProyecto={idProyecto}          
                            />
                        ))}
                        </tbody>
                    </table>   

                        <i
                            onClick={()=>setShowEditDialog(true)}
                            className='fas fa-plus p-2 mx-20 cursor-pointer d-flex flex-column justify-content-center align-items-center '
                            role="button"
                        />
                        <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
                            <AgregarObjetivo
                                idProyecto={idProyecto}  
                                setShowEditDialog={setShowEditDialog}
                            />
                        </Dialog>                     



            </Accordion>                 
        </>
    );
}



const Objetivo =({idObjetivo,descripcion,index,idProyecto}:{idObjetivo:any;descripcion:any;index:any;idProyecto:any})=>{
    
    
    const [showEditDialog, setShowEditDialog]=useState(false);
    
    const [showEditDialogDelete, setShowEditDialogDelete]=useState(false);
    
    return (
        <tr key={idObjetivo}>
            <td>{index+1}</td>
            <td>{descripcion}

                    <i 
                        onClick={()=>setShowEditDialog(true)}
                        className='fas fa-pen px-3' 
                        />
                    <i
                        onClick={()=>setShowEditDialogDelete(true)}
                        className='fas fa-trash px-2 '
                    />   
                    <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
                        <EditarObjetivo 
                            descripcion={descripcion}
                            index={index}
                            idProyecto={idProyecto}
                            setShowEditDialog={setShowEditDialog}
                            />
                    </Dialog>

                    <Dialog open={showEditDialogDelete} onClose={()=>setShowEditDialogDelete(false)}>
                        <EliminarObjetivo
                            idObjetivo={idObjetivo}
                            idProyecto={idProyecto}
                            setShowEditDialogDelete={setShowEditDialogDelete}
                            />
                    </Dialog>

            </td>
        </tr>
    )
}
const AgregarObjetivo=({idProyecto,setShowEditDialog}:{idProyecto:any;setShowEditDialog:any})=>{

    const{form, formData,updateFormData} = useFormData(null);

    const [crearObjetivo, {loading:mutationLoadingObjetivoNuevo}] = useMutation(CREAR_OBJETIVO,
        {refetchQueries:[{query:GET_PROYECTO,variables:{id:idProyecto} } ] });

    const submitForm = (e:any)=>{
        e.preventDefault() 
        const proyecto={connect:{id:idProyecto}}
        const data={...formData,proyecto}
        crearObjetivo({ 
            variables:{data}
            }
        ) 
    }    


    useEffect(() => {
        if(mutationLoadingObjetivoNuevo){
            setShowEditDialog(false);
        }
    }, [mutationLoadingObjetivoNuevo,setShowEditDialog])

    return(
        <div className='p-4'>
            <h1 className='text-center'>Nuevo objetivo</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column align-items-center justify-content-center'
            >    
                <Input
                        label='Descripcion:'
                        type='text'
                        name='descripcion'
                        defaultValue=''
                        required={true}
                        className='input widthInput'
                        disabled={false}
                />
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoadingObjetivoNuevo}
                        text='Confirmar'
                /> 
            </form>    
        </div>
    ) 
}


const EditarObjetivo=({descripcion,index,idProyecto,setShowEditDialog}:{descripcion:any,index:any,idProyecto:any,setShowEditDialog:any})=>{

    const{form, formData,updateFormData} = useFormData(null);

    const [editarObjetivo, {loading:mutationLoadingObjetivo}] = useMutation(EDITAR_OBJETIVO,
        {refetchQueries:[{query:GET_PROYECTO,variables:{_id:idProyecto} } ] });

    const submitForm = (e:any)=>{
        e.preventDefault() 
        console.log('fm',formData)
        editarObjetivo({ 
            variables:{
                idProyecto:idProyecto, 
                indexObjetivo:index, 
                descripcion:Object(formData)['descripcion']
            } 
        } )    
    };

    useEffect(() => {
        if(mutationLoadingObjetivo){
            setShowEditDialog(false);
        }
    }, [mutationLoadingObjetivo,setShowEditDialog])

    return(
        <div className='p-4'>
            <h1 className='text center'>Editar objetivo</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column align-items-center justify-content-center'
            >    
                <Input
                        label='Descripcion:'
                        type='text'
                        name='descripcion'
                        defaultValue={descripcion}
                        required={true}
                        className='input widthInput'
                        disabled={false}
                />
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoadingObjetivo}
                        text='Confirmar'
                /> 
            </form>    
        </div>
    ) 
}

const EliminarObjetivo=({idObjetivo,idProyecto,setShowEditDialogDelete}:{idObjetivo:any,idProyecto:any,setShowEditDialogDelete:any})=>{

    const [eliminarObjetivo, {loading:mutationLoadingObjetivoEliminar}] = useMutation(ELIMINAR_OBJETIVO,
        {refetchQueries:[{query:GET_PROYECTO,variables:{_id:idProyecto} } ] });

    const confirmarEliminacion=()=>{
        eliminarObjetivo({variables:{idObjetivo,idProyecto}})  
    }

    useEffect(() => {
        if(mutationLoadingObjetivoEliminar){
            setShowEditDialogDelete(false);
        }
    }, [mutationLoadingObjetivoEliminar,setShowEditDialogDelete])

    return(
        <div className='p-4'>
            <h1 className='text center'>¿Seguro que desea eliminar el objetivo?</h1>
            <div onClick={()=>confirmarEliminacion()} className='d-flex flex-columns align-items-center justify-content-center' >
                <ButtonLoading
                        disabled={false}
                        loading={mutationLoadingObjetivoEliminar}
                        text='Si'
                /> 
            </div>
       
        </div>
    ) 
}

const VerEstudiantes= ({inscripciones}:{inscripciones:any})=>{
    const inscripcionesAceptadas = inscripciones.filter((el:any)=>el.estado==='ACEPTADO')
    
    return(
        <>                    
            <Accordion className='mt-3'>
                <AccordionSummary className='d-flex flex-columns align-items-center justify-content-center'>Ver estudiantes aceptados</AccordionSummary>
                    <table className='tabla tabla3' >
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha de Ingreso</th>
                        </tr>
                        </thead>
                        <tbody>
                        {inscripcionesAceptadas.map((u:any) => {
                            return (
                                <tr key={u._id}>
                                    <td>{u.estudiante.nombre} {u.estudiante.apellido}</td>
                                    <td>{u.fechaIngreso.slice(0,-14)} </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>    
            </Accordion>                 
        </>
    );
}


const VerAvancesProyecto= ({idProyecto}:{idProyecto:any})=>{

    const [showEditDialog, setShowEditDialog]=useState(false);

    
    const{data:queryDataAvances,loading:queryLoadingAvances}=useQuery(GET_AVANCES,{variables:{proyectoId:idProyecto} } );
    
    if (queryLoadingAvances) return <div> Cargando...</div>
    console.log("los avances son:",queryDataAvances)

    return(
        <>                    
            <Accordion className='mt-3'>
                <AccordionSummary className='d-flex flex-column align-items-center justify-content-center text-center'>Ver avances</AccordionSummary>
                    <table className='tabla tabla3' >
                        <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Descripcion</th>
                            <th>Creado Por</th>
                            <th>Fecha de Creacion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {queryDataAvances.findManyAvances.map((u:any,i:any) => {
                            return (
                                <tr key={u._id}>
                                    <td>{i+1}</td>
                                    <td>{u.descripcion}</td>
                                    <td>{u.creadoPor.nombre} {u.creadoPor.apellido}</td>
                                    <td>{u.fecha}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <i
                        onClick={()=>setShowEditDialog(true)}
                        className='fas fa-plus rounded-full bg-green-500 hover:bg-green-400 text-white p-2 mx-20 cursor-pointer flex flex-col items-center justify-center '
                        />
                    <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
                        <AgregarAvance
                            idProyecto={idProyecto}  
                        />
                        </Dialog>


            </Accordion>                 
        </>
    );

}

const AgregarAvance=({idProyecto}:{idProyecto:any})=>{

    const { userData } = useUser();
    const idEstudiante=userData._id

    const{form, formData,updateFormData} = useFormData(null);

    const [crearAvance, {loading:mutationLoadingAvance}] = useMutation(CREAR_AVANCE,
        {refetchQueries:[{query:GET_AVANCES,variables:{_id:idProyecto} } ] });

    const submitForm = (e:any)=>{
        e.preventDefault() 
        crearAvance({ 
            variables:{
                proyecto:idProyecto, 
                creadoPor:idEstudiante,
                descripcion:Object(formData)['descripcion']

            } 
        } )    
    };

    return(
        <div className='p-4'>
            <h1 className='text-center'>Nuevo Avance</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='flex flex-col items-center justify-center'
            >    
                <Input
                        label='Descripcion:'
                        type='text'
                        name='descripcion'
                        defaultValue=''
                        required={true}
                        className='input widthInput'
                        disabled={false}
                />
                <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoadingAvance}
                        text='Confirmar'
                /> 
            </form>    
        </div>
    ) 
}



const InscricpionProyecto= ({ idProyecto,estado, inscripciones }:{ idProyecto:any,estado:any, inscripciones:any}) => {

    const { userData } = useUser();
    const [estadoInscripcion, setEstadoInscripcion] = useState('');
    
    const [crearInscripcion, {data:mutationDataInscripcion, loading:mutationLoadingInscripcion}] = useMutation(CREAR_INSCRIPCION);

    /* const{data:queryDataUsuario,error:queryErrorUsuario,loading:queryLoadingUsuario}=useQuery(GET_USUARIO,{variables:{_id:_idUsuario} } );  */

    useEffect(() => {
        if (inscripciones) {
            const flt = inscripciones.filter((el:any) => el.estudiante._id === userData._id);
            if (flt.length > 0) {
            setEstadoInscripcion(flt[0].estado);
            }
        }
        }, [inscripciones]);

    const confirmarInscripcion=()=>{
        crearInscripcion({variables:{estudiante:userData._id, proyecto: idProyecto}})  
    }

    useEffect(()=>{
        if (mutationDataInscripcion){
            toast.success('Inscripcion realizada con exito', {position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true});
        }
    }, [mutationDataInscripcion])    
    
    /* if (queryLoadingUsuario) return <div> Cargando...</div> */

    return(
        <>
            {estadoInscripcion !=='' ? (<span className='d-flex flex-column align-items-center justify-content-center text-warning'>Ya estas inscrito en este proyecto y el estado es: {estadoInscripcion} </span>
            ):(
                <div onClick={()=>confirmarInscripcion()} className='flex flex-col items-center justify-center' >
                    <ButtonLoading
                                disabled={estado==='INACTIVO'}
                                loading={mutationLoadingInscripcion}
                                text='Inscribirme'
                            /> 
                </div>
                ) 
            }           
        </>
    );
};



export default EditarProyecto;



