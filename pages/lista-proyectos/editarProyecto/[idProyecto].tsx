import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {useEffect,useState} from 'react'
import { useQuery, useMutation } from '@apollo/client';
import {toast } from 'react-toastify';
import Link from 'next/link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Dialog } from '@mui/material';
import { Loading } from 'react-loading-dot'

import useFormData from 'hook/useFormData';
import Input from 'components/Input'
import ButtonLoading from 'components/ButtonLoading';
import DropDown from 'components/Dropdown';
import PrivateComponent from 'components/PrivateComponent'
import RenderIf from 'components/RenderIf'


import { Enum_EstadoProyecto , Enum_FaseProyecto} from 'utils/enums';
import { GET_PROYECTO,GET_PROYECTOS} from 'graphql/proyectos/queries';
import {EDITAR_OBJETIVO,CREAR_OBJETIVO,ELIMINAR_OBJETIVO,EDITAR_PROYECTO} from 'graphql/proyectos/mutations';
import { CREAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import { ELIMINAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import { CREAR_AVANCE,ELIMINAR_AVANCE,EDITAR_AVANCE } from 'graphql/avances/mutations'; 
import { GET_AVANCES } from 'graphql/avances/queries'; 
import { useUser } from 'context/userContext';
import type { NextPageWithAuth } from "pages/_app"



const EditarProyecto:NextPageWithAuth=()=> {        

    const router = useRouter()
    const { idProyecto } = router.query

    const { userData } = useUser()

    const{form, formData,updateFormData} = useFormData(null);


    
    const{data:queryDataProyecto,error:queryErrorProyecto,loading:queryLoadingProyecto}=useQuery(GET_PROYECTO,{variables:{where:{id:idProyecto}} } );



    const [editarProyecto, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_PROYECTO,
        {refetchQueries:[{query:GET_PROYECTOS} ] });

     
    const submitForm = (e:any)=>{
        e.preventDefault() 
        console.log('datos enviados;', formData)
        const data={
            nombre:{set:  Object(formData)['nombre']},
            objetivoGeneral:{set: Object(formData)['objetivoGeneral']},
            presupuesto:{set:  Object(formData)['presupuesto']},
            fechaInicio:{set:  Object(formData)['fechaInicio']},
            estado:{set:  Object(formData)['estado']},
            fase:{set:  Object(formData)['fase']},

        }
        console.log('me ejecturaron hp')
        editarProyecto(
                { variables:{data,where:{id:idProyecto}} } 
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
    

    const desicionFuntion = ()=>{

        if (userData.rol =='Lider'){
            return false
        } else {
            return true
        }
    }

    const desicionFuntion2 = ()=>{

        if (userData.rol =='Administrador'){
            return false
        } else {
            return true
        }
    }

    

    if (queryLoadingProyecto) return <div> <Loading background="blue" /> </div>



    return (
        <div className='d-flex flex-column w-100 h-100 p-3 '>
            <Link href="/lista-proyectos" passHref>
              <i className='fas fa-arrow-left fa-2x' />
            </Link>


            <h1 className='text-center'>Informacion del Proyecto</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form} 
                className='d-flex flex-column justify-content-center align-items-center'
            >     
                    <span className='text-uppercase'>Lider del proyecto: {queryDataProyecto.proyecto.lider.name+ ' ' + queryDataProyecto.proyecto.lider.apellido}</span>

     
                      <Input
                        label='nombre del proyecto:'
                        type='text'
                        name='nombre'
                        defaultValue={queryDataProyecto.proyecto.nombre}
                        required={true}
                        className='input widthInput'
                        readOnly={desicionFuntion()}
                      />

                      <Input
                        label='Presupuesto del proyecto:'
                        type='string'
                        name='presupuesto'
                        defaultValue={queryDataProyecto.proyecto.presupuesto}
                        required={true}
                        readOnly={desicionFuntion()}
                      />
         
              
                      <Input
                        label='Fecha Inicio:'
                        type='text'
                        name='fechaInicio'
                        defaultValue={queryDataProyecto.proyecto.fechaInicio.slice(0,-14)}
                        required={true}
                        readOnly={desicionFuntion()}
                      />

                      <Input
                        label='Objetivo General:'
                        type='text'
                        name='objetivoGeneral'
                        defaultValue={queryDataProyecto.proyecto.objetivoGeneral}
                        required={true}
                        className='input widthInput'
                        readOnly={desicionFuntion()}
                      />

                      <VerObjetivosEspecificos
                          objetivos={queryDataProyecto.proyecto.objetivosEspecificos}
                          idProyecto={idProyecto}
                      />

                      <VerEstudiantes
                          inscripciones={queryDataProyecto.proyecto.inscripciones}
                      />

                      <VerAvancesProyecto 
                          idProyecto={idProyecto}
                          idUser={userData.id}
                      />

                      <DropDown
                          label='Estado del proyecto:'
                          name='estado'
                          defaultValue={queryDataProyecto.proyecto.estado}
                          required={true}
                          options={Enum_EstadoProyecto}
                          readOnly={desicionFuntion2()}
                      />

                      <DropDown
                          label='Fase del proyecto:'
                          name='fase'
                          defaultValue={queryDataProyecto.proyecto.fase}
                          required={true}
                          options={Enum_FaseProyecto}
                          readOnly={desicionFuntion2()}

                      /> 
                        <PrivateComponent roleList={['Administrador','Lider']}>
                            <ButtonLoading
                                disabled={Object.keys(formData).length === 0}
                                loading={mutationLoading}
                                text='Confirmar'                        
                            /> 
                        </PrivateComponent>
      
            </form>
            <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                <PrivateComponent roleList={['Estudiante']}>
                    <InscricpionProyecto
                        idProyecto={idProyecto}
                        idUser={userData.id}
                        estado={queryDataProyecto.proyecto.estado}
                        inscripciones={queryDataProyecto.proyecto.inscripciones}
                    />
                </PrivateComponent>

            </div>                   
        </div>
     );
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
                                <Objetivo key={u.id}
                                    idObjetivo={u.id}
                                    descripcion={u.descripcion}
                                    index={i}
                                    idProyecto={idProyecto}          
                                />
                            ))}                      
                        </tbody>
                    </table>   
                        <PrivateComponent roleList={['Lider']}>
                            <i
                                onClick={()=>setShowEditDialog(true)}
                                className='fas fa-plus p-2 mx-20 d-flex flex-column justify-content-center align-items-center '
                                role="button"
                            />
                        </PrivateComponent> 

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

                    <PrivateComponent roleList={['Lider']}>
                        <i 
                            onClick={()=>setShowEditDialog(true)}
                            className='fas fa-pen px-3' 
                            role="button"
                            />
                        <i
                            onClick={()=>setShowEditDialogDelete(true)}
                            className='fas fa-trash '
                            role="button"
                        /> 
                    </PrivateComponent> 


                    <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
                        <EditarObjetivo 
                            descripcion={descripcion}
                            idObjetivo={idObjetivo}
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
        {refetchQueries:[{query:GET_PROYECTO,variables:{where:{id:idProyecto}} } ] });

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
                        readOnly={false}
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


const EditarObjetivo=({idObjetivo,descripcion,index,idProyecto,setShowEditDialog}:{idObjetivo:any,descripcion:any,index:any,idProyecto:any,setShowEditDialog:any})=>{

    const{form, formData,updateFormData} = useFormData(null);

    const [editarObjetivo, {loading:mutationLoadingObjetivo}] = useMutation(EDITAR_OBJETIVO,
        {refetchQueries:[{query:GET_PROYECTO,variables:{where:{id:idProyecto} }} ] });

    const submitForm = (e:any)=>{
        e.preventDefault() 
        console.log("el index del objetivo es:",idObjetivo)
        console.log('fm',formData)
        editarObjetivo({ 
            variables:{
                data:{descripcion:{set:Object(formData)['descripcion']}},
                where:{id:idObjetivo}

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
                        readOnly={false}
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
        {refetchQueries:[{query:GET_PROYECTO,variables:{where:{id:idProyecto}} } ] });

    const confirmarEliminacion=()=>{
        eliminarObjetivo({variables:{where:{id:idObjetivo}}})  
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


    const inscripcionesAceptadas = inscripciones.filter((u:any)=>u.estado==='Aceptado')
    

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
                                <tr key={u.id}>
                                    <td>{u.estudiante.name} {u.estudiante.apellido}</td>
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


const VerAvancesProyecto= ({idProyecto,idUser}:{idProyecto:any,idUser:any})=>{

    const [showEditDialog, setShowEditDialog]=useState(false);

    
    const{data:queryDataAvances,loading:queryLoadingAvances}=useQuery(GET_AVANCES,{variables:{where:{proyectoId:{equals:idProyecto} }}} );
    
    if (queryLoadingAvances) return <div> Cargando...</div>


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
                                <tr key={u.id}>
                                    <td>{i+1}</td>
                                    <td>{u.descripcion}</td>
                                    <td>{u.creadoPor.name} {u.creadoPor.apellido}</td>
                                    <td>{u.fecha.slice(0,-14)}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <PrivateComponent roleList={['Lider','Estudiante']}>
                        <i
                            onClick={()=>setShowEditDialog(true)}
                            className='fas fa-plus p-2 mx-20  d-flex flex-column align-items-center justify-content-center '
                            role="button"
                        />
                    </PrivateComponent>

                    <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
                        <AgregarAvance
                            idProyecto={idProyecto}  
                            idUser={idUser}
                            setShowEditDialog={setShowEditDialog}
                        />
                    </Dialog>


            </Accordion>                 
        </>
    );
}



const AgregarAvance=({idProyecto,setShowEditDialog,idUser}:{idProyecto:any;setShowEditDialog:any,idUser:any})=>{


    const{form:form2, formData:formData2,updateFormData:updateFormData2} = useFormData(null);

    const [crearAvance, {loading:mutationLoadingAvance}] = useMutation(CREAR_AVANCE,
        {refetchQueries:[{query:GET_PROYECTO,variables:{where:{id:idProyecto}} },
                        {query:GET_AVANCES,variables:{where:{proyectoId:{equals:idProyecto} }} }
                        ]                
    });

    const submitForm2 = (e:any)=>{
        e.preventDefault() 

        const data={...formData2,
            creadoPor:{connect:{id:idUser}},
            proyecto:{connect:{id:idProyecto}}
        }

        crearAvance({ 
            variables:{data} 
        } )    
    

    };

    useEffect(() => {
        if(mutationLoadingAvance){
            setShowEditDialog(false);
        }
    }, [mutationLoadingAvance,setShowEditDialog])


    return(
        <div className='p-4'>
            <h1 className='text-center'>Nuevo Avance</h1>
            <form
                onSubmit={submitForm2}
                onChange={updateFormData2}
                ref={form2} 
                className='d-flex flex-column align-items-center justify-conent-center'
            >    
                <Input
                        label='Descripcion:'
                        type='text'
                        name='descripcion'
                        defaultValue=''
                        required={true}
                        className='input widthInput'
                        readOnly={false}
                />
                <ButtonLoading
                        disabled={Object.keys(formData2).length === 0}
                        loading={mutationLoadingAvance}
                        text='Confirmar'
                /> 
            </form>    
        </div>
    ) 
}



const InscricpionProyecto= ({ idProyecto,estado, inscripciones,idUser }:{ idProyecto:any,estado:any, inscripciones:any,idUser:any}) => {


    const [InscripcionEstudiante, setInscripcionEstudiante] = useState({});
    
    const [crearInscripcion, {data:mutationDataInscripcion, loading:mutationLoadingInscripcion}] = useMutation(CREAR_INSCRIPCION);

    const [cancelarInscripcion, {data:mutationDataEliminarInscripcion, loading:mutationLoadingEliminarInscripcion}] = useMutation(ELIMINAR_INSCRIPCION);

    useEffect(() => {
        if (inscripciones) {
            const flt = inscripciones.filter((u:any) => u.estudiante.id === idUser);
            if (flt.length > 0) {
                setInscripcionEstudiante(flt[0]);      
            }      
        }
        console.log("la inscripcion es primero:",Object(InscripcionEstudiante)['estado'])
        }, [inscripciones,idUser,InscripcionEstudiante,mutationLoadingInscripcion,mutationLoadingEliminarInscripcion,mutationDataInscripcion,mutationDataEliminarInscripcion]);

    const confirmarInscripcion=()=>{

        const data={
            proyecto:{connect:{id:idProyecto}},
            estudiante:{connect:{id:idUser}}
             }

        crearInscripcion({variables:{data}})  
        setTimeout(location.reload.bind(location), 4000)
    }


    const eliminarInscripcion=()=>{

        cancelarInscripcion({variables:{where:{id:Object(InscripcionEstudiante)['id']}}})  
        setTimeout(location.reload.bind(location), 4000)
    }

    useEffect(()=>{
        if (mutationDataInscripcion){
            toast.success('Inscripcion realizada con exito', {position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true});
        }
    }, [mutationDataInscripcion])    
    

    useEffect(()=>{
        if (mutationDataEliminarInscripcion){
            toast.success('Inscripcion cancelada con exito', {position: "top-right", autoClose: 2000, hideProgressBar: true,closeOnClick: true});
        }
    }, [mutationDataEliminarInscripcion])


    return(
        <>
            <RenderIf isTrue={Object(InscripcionEstudiante)['estado'] }>
                <span className='d-flex flex-column align-items-center justify-content-center text-warning'>Ya estas inscrito en este proyecto y el estado es: {Object(InscripcionEstudiante)['estado']} </span>

                <div onClick={()=>eliminarInscripcion()} className='flex flex-col items-center justify-center' >
                        <ButtonLoading
                                    disabled={estado==='Inactivo'}
                                    loading={mutationLoadingEliminarInscripcion}
                                    text='cancelar Inscripcion'
                        /> 
                </div>

            </RenderIf>

            <RenderIf isTrue={!Object(InscripcionEstudiante)['estado']} >
                <div onClick={()=>confirmarInscripcion()} className='flex flex-col items-center justify-center' >
                        <ButtonLoading
                                    disabled={estado==='Inactivo'}
                                    loading={mutationLoadingInscripcion}
                                    text='Inscribirme'
                        /> 
                </div>
            </RenderIf>

       
        </>
    );
};



export default EditarProyecto;

EditarProyecto.auth=true

