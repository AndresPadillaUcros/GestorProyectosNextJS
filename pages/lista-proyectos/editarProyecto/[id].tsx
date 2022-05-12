import { useRouter } from 'next/router'
// import React,{useEffect,useState} from 'react'
// import {useParams,useNavigate} from 'react-router-dom'
// import { useQuery, useMutation } from '@apollo/client';
// import useFormData from '../../../hook/useFormData';
// import {toast } from 'react-toastify';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import { Dialog } from '@mui/material';

// import Input from '../../../components/Input'
// import ButtonLoading from '../../../components/ButtonLoading';
// import DropDown from '../../../components/Dropdown';

// import { Enum_EstadoProyecto , Enum_FaseProyecto} from '../../../utils/enums';
// import { GET_PROYECTO,GET_PROYECTOS} from '../../../graphql/proyectos/queries';

// import {APROBAR_PROYECTO,EDITAR_OBJETIVO,CREAR_OBJETIVO,ELIMINAR_OBJETIVO,EDITAR_PROYECTO} from '../../../graphql/proyectos/mutations';
// import { CREAR_INSCRIPCION } from '../../../graphql/inscripcion/mutations';

// import { GET_AVANCES,CREAR_AVANCE } from '../../../graphql/avances/mutations';

// import { useUser } from '../../../context/userContext.js'

// /* import { useUser } from 'context/userContext'; */


// function EditarProyecto() {        

//     const router = useRouter()
//     const { id } = router.query

//     const { userData } = useUser();
//     const navigate  = useNavigate();

//     const{form, formData,updateFormData} = useFormData(null);
    
//     const{data:queryDataProyecto,error:queryErrorProyecto,loading:queryLoadingProyecto}=useQuery(GET_PROYECTO,{variables:{where:{id}} } );

//     const [editarProyecto, {data:mutationData, loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_PROYECTO,
//         {refetchQueries:[{query:GET_PROYECTOS} ] });


//     const submitForm = (e:any)=>{
//         e.preventDefault() 
//         console.log('datos enviados;', formData)
//         editarProyecto({ variables:{_id:idProyecto,...formData} } )    
//     };

//     useEffect(()=>{
//         if (mutationData){
//             toast.success('Proyecto modificado con exito', {position: "top-right", autoClose: 2000, hideProgressBar: true,closeOnClick: true});
//         }
//     }, [mutationData])

//     useEffect(()=>{
//         if (mutationError){
//           toast.error("Error al editar el proyecto");
//         }
//         if (queryErrorProyecto){
//         toast.error("Error al consultar el proyecto");
//         }
//       },[queryErrorProyecto,mutationError]);
    


//     if (queryLoadingProyecto) return <div> Cargando...</div>
//     console.log('datos proyecto:', queryDataProyecto.Proyecto.inscripciones)


//     if (queryDataProyecto.Proyecto) {
//     return (
//         <div className='flew flex-col w-full h-full items-center justify-center p-10'>

//             <button onClick={() => navigate(-1)}>
//                 <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
//             </button>

//             <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Informacion del Proyecto</h1>
//             <form
//                 onSubmit={submitForm}
//                 onChange={updateFormData}
//                 ref={form} 
//                 className='flex flex-col items-center justify-center'
//             >     
//                     <span className='uppercase'>Lider del proyecto: {queryDataProyecto.Proyecto.lider.nombre+ ' ' + queryDataProyecto.Proyecto.lider.apellido}</span>

//                     <PrivateComponent roleList={['LIDER']}>
//                         <Input
//                             label='Nombre del proyecto:'
//                             type='text'
//                             name='nombre'
//                             defaultValue={queryDataProyecto.Proyecto.nombre}
//                             required={true}
//                             className='input widthInput'
//                         />
//                     </PrivateComponent>
 
//                     <PrivateComponent roleList={['ADMINISTRADOR','ESTUDIANTE']}>
//                         <Input
//                             label='Nombre del proyecto:'
//                             type='text'
//                             name='nombre'
//                             defaultValue={queryDataProyecto.Proyecto.nombre}
//                             required={true}
//                             className='input widthInput'
//                             disabled={true}
//                         />
//                     </PrivateComponent>

//                     <PrivateComponent roleList={['LIDER']}>
//                         <Input
//                             label='Presupuesto del proyecto:'
//                             type='string'
//                             name='presupuesto'
//                             defaultValue={queryDataProyecto.Proyecto.presupuesto}
//                             required={true}
//                         />
//                     </PrivateComponent>

//                     <PrivateComponent roleList={['ADMINISTRADOR','ESTUDIANTE']}>
//                         <Input
//                             label='Presupuesto del proyecto:'
//                             type='string'
//                             name='presupuesto'
//                             defaultValue={queryDataProyecto.Proyecto.presupuesto}
//                             required={true}
//                             disabled={true}
//                         />
//                     </PrivateComponent>




//                     <Input
//                         label='Fecha Inicio:'
//                         type='text'
//                         name='fechaInicio'
//                         defaultValue={queryDataProyecto.Proyecto.fechaInicio.slice(0,-14)}
//                         required={true}
//                         disabled={true}
//                     />

//                     {/* <Input
//                         label='Fecha Fin:'
//                         type='text'
//                         name='fechaFin'
//                         defaultValue={queryDataProyecto.Proyecto.fechaFin}
//                         required={true}
//                         disabled={true}
//                     /> */}

//                     <PrivateComponent roleList={['LIDER']}>
//                         <Input
//                             label='Objetivo General:'
//                             type='text'
//                             name='objetivoGeneral'
//                             defaultValue={queryDataProyecto.Proyecto.objetivoGeneral}
//                             required={true}
//                             className='input widthInput'
//                         />
//                     </PrivateComponent>

//                     <PrivateComponent roleList={['ADMINISTRADOR','ESTUDIANTE']}>
//                         <Input
//                             label='Objetivo General:'
//                             type='text'
//                             name='objetivoGeneral'
//                             defaultValue={queryDataProyecto.Proyecto.objetivoGeneral}
//                             required={true}
//                             className='input widthInput'
//                             disabled={true}
//                         />
//                     </PrivateComponent>


//                     <VerObjetivosEspecificos
//                         objetivos={queryDataProyecto.Proyecto.objetivosEspecificos}
//                         idProyecto={idProyecto}
//                     />

//                     <VerEstudiantes
//                         inscripciones={queryDataProyecto.Proyecto.inscripciones}
//                     />

//                     <VerAvancesProyecto 
//                         idProyecto={idProyecto}
//                     />
//                     <PrivateComponent roleList={['ADMINISTRADOR']}>
//                         <DropDown
//                             label='Estado del proyecto:'
//                             name='estado'
//                             defaultValue={queryDataProyecto.Proyecto.estado}
//                             required={true}
//                             options={Enum_EstadoProyecto}
//                         />
//                         <DropDown
//                             label='Fase del proyecto:'
//                             name='fase'
//                             defaultValue={queryDataProyecto.Proyecto.fase}
//                             required={true}
//                             options={Enum_FaseProyecto}

//                         /> 
//                     </PrivateComponent>

//                     <PrivateComponent roleList={['LIDER','ESTUDIANTE']}>
//                         <DropDown
//                             label='Estado del proyecto:'
//                             name='estado'
//                             defaultValue={queryDataProyecto.Proyecto.estado}
//                             required={true}
//                             options={Enum_EstadoProyecto}
//                             disabled={true}
//                         />
//                         <DropDown
//                             label='Fase del proyecto:'
//                             name='fase'
//                             defaultValue={queryDataProyecto.Proyecto.fase}
//                             required={true}
//                             options={Enum_FaseProyecto}
//                             disabled={true}
//                         /> 
//                     </PrivateComponent>





//                     <PrivateComponent roleList={['LIDER','ADMINISTRADOR']}>
//                         <ButtonLoading
//                             disabled={Object.keys(formData).length === 0}
//                             loading={mutationLoading}
//                             text='Confirmar'
//                         /> 
//                     </PrivateComponent>


//             </form>
//             <PrivateComponent roleList={['ESTUDIANTE']}>
//                 <InscricpionProyecto
//                     idProyecto={idProyecto}
//                     estado={queryDataProyecto.Proyecto.estado}
//                     inscripciones={queryDataProyecto.Proyecto.inscripciones}
//                 />
//             </PrivateComponent>
//         </div>
//      )};
//     return <></>;
// };



// const VerObjetivosEspecificos= ({objetivos,idProyecto})=>{

//     const [showEditDialog, setShowEditDialog]=useState(false);
//     return(
//         <>         
//             <Accordion className='mt-3'>
//                 <AccordionSummary className='flex flex-col items-center justify-center'>Ver objetivos especificos</AccordionSummary>
//                     <table className='tabla tabla3' >
//                         <thead>
//                         <tr>
//                             <th>Numero</th>
//                             <th>Descripcion</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {objetivos.map((u,i) =>(
//                             <Objetivo 
//                                 idObjetivo={u._id}
//                                 descripcion={u.descripcion}
//                                 index={i}
//                                 idProyecto={idProyecto}          
//                             />
//                         ))}
//                         </tbody>
//                     </table>   
//                     <PrivateComponent roleList={['LIDER']}>
//                         <i
//                             onClick={()=>setShowEditDialog(true)}
//                             className='fas fa-plus rounded-full bg-green-500 hover:bg-green-400 text-white p-2 mx-20 cursor-pointer flex flex-col items-center justify-center '
//                         />
//                         <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
//                             <AgregarObjetivo
//                                 idProyecto={idProyecto}  
//                                 setShowEditDialog={setShowEditDialog}
//                             />
//                         </Dialog>                     
//                     </PrivateComponent>


//             </Accordion>                 
//         </>
//     );
// }



// const Objetivo =({idObjetivo,descripcion,index,idProyecto})=>{
    
    
//     const [showEditDialog, setShowEditDialog]=useState(false);
    
//     const [showEditDialogDelete, setShowEditDialogDelete]=useState(false);
    
//     return (
//         <tr key={idObjetivo}>
//             <td>{index+1}</td>
//             <td>{descripcion}
//                 <PrivateComponent roleList={['LIDER']}>
//                     <i 
//                         onClick={()=>setShowEditDialog(true)}
//                         className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer px-3' 
//                         />
//                     <i
//                         onClick={()=>setShowEditDialogDelete(true)}
//                         className='fas fa-trash rounded-full bg-red-200 hover:bg-red-400 cursor-pointer px-2 '
//                     />   
//                     <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
//                         <EditarObjetivo 
//                             descripcion={descripcion}
//                             index={index}
//                             idProyecto={idProyecto}
//                             setShowEditDialog={setShowEditDialog}
//                             />
//                     </Dialog>

//                     <Dialog open={showEditDialogDelete} onClose={()=>setShowEditDialogDelete(false)}>
//                         <EliminarObjetivo
//                             idObjetivo={idObjetivo}
//                             idProyecto={idProyecto}
//                             setShowEditDialogDelete={setShowEditDialogDelete}
//                             />
//                     </Dialog>
//                 </PrivateComponent>
//             </td>
//         </tr>
//     )
// }
// const AgregarObjetivo=({idProyecto,setShowEditDialog})=>{

//     const{form, formData,updateFormData} = useFormData(null);

//     const [crearObjetivo, {loading:mutationLoadingObjetivoNuevo}] = useMutation(CREAR_OBJETIVO,
//         {refetchQueries:[{query:GET_PROYECTO,variables:{_id:idProyecto} } ] });

//     const submitForm = (e)=>{
//         e.preventDefault() 
//         crearObjetivo({ 
//             variables:{
//                 idProyecto:idProyecto, 
//                 campos:{
//                         descripcion:formData.descripcion
//                 }
//             } 
//         } )    
//     };

//     useEffect(() => {
//         if(mutationLoadingObjetivoNuevo){
//             setShowEditDialog(false);
//         }
//     }, [mutationLoadingObjetivoNuevo,setShowEditDialog])

//     return(
//         <div className='p-4'>
//             <h1 className='text-2xl font-bold-text-gray-900 text-blue-600 flex flex-col items-center justify-center'>Nuevo objetivo</h1>
//             <form
//                 onSubmit={submitForm}
//                 onChange={updateFormData}
//                 ref={form} 
//                 className='flex flex-col items-center justify-center'
//             >    
//                 <Input
//                         label='Descripcion:'
//                         type='text'
//                         name='descripcion'
//                         defaultValue=''
//                         required={true}
//                         className='input widthInput'
//                 />
//                 <ButtonLoading
//                         disabled={Object.keys(formData).length === 0}
//                         loading={mutationLoadingObjetivoNuevo}
//                         text='Confirmar'
//                 /> 
//             </form>    
//         </div>
//     ) 
// }


// const EditarObjetivo=({descripcion,index,idProyecto,setShowEditDialog})=>{

//     const{form, formData,updateFormData} = useFormData(null);

//     const [editarObjetivo, {loading:mutationLoadingObjetivo}] = useMutation(EDITAR_OBJETIVO,
//         {refetchQueries:[{query:GET_PROYECTO,variables:{_id:idProyecto} } ] });

//     const submitForm = (e)=>{
//         e.preventDefault() 
//         console.log('fm',formData)
//         editarObjetivo({ 
//             variables:{
//                 idProyecto:idProyecto, 
//                 indexObjetivo:index, 
//                 descripcion:formData.descripcion
//             } 
//         } )    
//     };

//     useEffect(() => {
//         if(mutationLoadingObjetivo){
//             setShowEditDialog(false);
//         }
//     }, [mutationLoadingObjetivo,setShowEditDialog])

//     return(
//         <div className='p-4'>
//             <h1 className='text-2xl font-bold-text-gray-900 text-blue-600 flex flex-col items-center justify-center'>Editar objetivo</h1>
//             <form
//                 onSubmit={submitForm}
//                 onChange={updateFormData}
//                 ref={form} 
//                 className='flex flex-col items-center justify-center'
//             >    
//                 <Input
//                         label='Descripcion:'
//                         type='text'
//                         name='descripcion'
//                         defaultValue={descripcion}
//                         required={true}
//                         className='input widthInput'
//                 />
//                 <ButtonLoading
//                         disabled={Object.keys(formData).length === 0}
//                         loading={mutationLoadingObjetivo}
//                         text='Confirmar'
//                 /> 
//             </form>    
//         </div>
//     ) 
// }

// const EliminarObjetivo=({idObjetivo,idProyecto,setShowEditDialogDelete})=>{

//     const [eliminarObjetivo, {loading:mutationLoadingObjetivoEliminar}] = useMutation(ELIMINAR_OBJETIVO,
//         {refetchQueries:[{query:GET_PROYECTO,variables:{_id:idProyecto} } ] });

//     const confirmarEliminacion=()=>{
//         eliminarObjetivo({variables:{idObjetivo,idProyecto}})  
//     }

//     useEffect(() => {
//         if(mutationLoadingObjetivoEliminar){
//             setShowEditDialogDelete(false);
//         }
//     }, [mutationLoadingObjetivoEliminar,setShowEditDialogDelete])

//     return(
//         <div className='p-4'>
//             <h1 className='text-2xl font-bold-text-gray-900 text-blue-600 flex flex-col items-center justify-center'>¿Seguro que desea eliminar el objetivo?</h1>
//             <div onClick={()=>confirmarEliminacion()} className='flex flex-col items-center justify-center' >
//                 <ButtonLoading
//                         disabled={false}
//                         loading={mutationLoadingObjetivoEliminar}
//                         text='Si'
//                 /> 
//             </div>
       
//         </div>
//     ) 
// }

// const VerEstudiantes= ({inscripciones})=>{
//     const inscripcionesAceptadas = inscripciones.filter((el)=>el.estado==='ACEPTADO')
    
//     return(
//         <>                    
//             <Accordion className='mt-3'>
//                 <AccordionSummary className='flex flex-col items-center justify-center'>Ver estudiantes aceptados</AccordionSummary>
//                     <table className='tabla tabla3' >
//                         <thead>
//                         <tr>
//                             <th>Nombre</th>
//                             <th>Fecha de Ingreso</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {inscripcionesAceptadas.map((u) => {
//                             return (
//                                 <tr key={u._id}>
//                                     <td>{u.estudiante.nombre} {u.estudiante.apellido}</td>
//                                     <td>{u.fechaIngreso.slice(0,-14)} </td>
//                                 </tr>
//                             )
//                         })}
//                         </tbody>
//                     </table>    
//             </Accordion>                 
//         </>
//     );
// }


// const VerAvancesProyecto= ({idProyecto})=>{

//     const [showEditDialog, setShowEditDialog]=useState(false);

    
//     const{data:queryDataAvances,loading:queryLoadingAvances}=useQuery(GET_AVANCES,{variables:{_id:idProyecto} } );
    
//     if (queryLoadingAvances) return <div> Cargando...</div>
    

//     return(
//         <>                    
//             <Accordion className='mt-3'>
//                 <AccordionSummary className='flex flex-col items-center justify-center'>Ver avances</AccordionSummary>
//                     <table className='tabla tabla3' >
//                         <thead>
//                         <tr>
//                             <th>Numero</th>
//                             <th>Descripcion</th>
//                             <th>Creado Por</th>
//                             <th>Fecha de Creacion</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {queryDataAvances.buscarAvances.map((u,i) => {
//                             return (
//                                 <tr key={u._id}>
//                                     <td>{i+1}</td>
//                                     <td>{u.descripcion}</td>
//                                     <td>{u.creadoPor.nombre} {u.creadoPor.apellido}</td>
//                                     <td>{u.fecha.slice(0,-14)}</td>
//                                 </tr>
//                             )
//                         })}
//                         </tbody>
//                     </table>
//                     <i
//                         onClick={()=>setShowEditDialog(true)}
//                         className='fas fa-plus rounded-full bg-green-500 hover:bg-green-400 text-white p-2 mx-20 cursor-pointer flex flex-col items-center justify-center '
//                         />
//                     <Dialog open={showEditDialog} onClose={()=>setShowEditDialog(false)}>
//                         <AgregarAvance
//                             idProyecto={idProyecto}  
//                         />
//                         </Dialog>


//             </Accordion>                 
//         </>
//     );

// }

// const AgregarAvance=({idProyecto})=>{

//     const { userData } = useUser();
//     const idEstudiante=userData._id

//     const{form, formData,updateFormData} = useFormData(null);

//     const [crearAvance, {loading:mutationLoadingAvance}] = useMutation(CREAR_AVANCE,
//         {refetchQueries:[{query:GET_AVANCES,variables:{_id:idProyecto} } ] });

//     const submitForm = (e)=>{
//         e.preventDefault() 
//         crearAvance({ 
//             variables:{
//                 proyecto:idProyecto, 
//                 creadoPor:idEstudiante,
//                 descripcion:formData.descripcion

//             } 
//         } )    
//     };

//     return(
//         <div className='p-4'>
//             <h1 className='text-2xl font-bold-text-gray-900 text-blue-600 flex flex-col items-center justify-center'>Nuevo Avance</h1>
//             <form
//                 onSubmit={submitForm}
//                 onChange={updateFormData}
//                 ref={form} 
//                 className='flex flex-col items-center justify-center'
//             >    
//                 <Input
//                         label='Descripcion:'
//                         type='text'
//                         name='descripcion'
//                         defaultValue=''
//                         required={true}
//                         className='input widthInput'
//                 />
//                 <ButtonLoading
//                         disabled={Object.keys(formData).length === 0}
//                         loading={mutationLoadingAvance}
//                         text='Confirmar'
//                 /> 
//             </form>    
//         </div>
//     ) 
// }



// const InscricpionProyecto= ({ idProyecto,estado, inscripciones }) => {

//     const { userData } = useUser();
//     const [estadoInscripcion, setEstadoInscripcion] = useState('');
    
//     const [crearInscripcion, {data:mutationDataInscripcion, loading:mutationLoadingInscripcion}] = useMutation(CREAR_INSCRIPCION);

//     /* const{data:queryDataUsuario,error:queryErrorUsuario,loading:queryLoadingUsuario}=useQuery(GET_USUARIO,{variables:{_id:_idUsuario} } );  */

//     useEffect(() => {
//         if (inscripciones) {
//             const flt = inscripciones.filter((el) => el.estudiante._id === userData._id);
//             if (flt.length > 0) {
//             setEstadoInscripcion(flt[0].estado);
//             }
//         }
//         }, [inscripciones]);

//     const confirmarInscripcion=()=>{
//         crearInscripcion({variables:{estudiante:userData._id, proyecto: idProyecto}})  
//     }

//     useEffect(()=>{
//         if (mutationDataInscripcion){
//             toast.success('Inscripcion realizada con exito', {position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true});
//         }
//     }, [mutationDataInscripcion])    
    
//     /* if (queryLoadingUsuario) return <div> Cargando...</div> */

//     return(
//         <>
//             {estadoInscripcion !=='' ? (<span className='flex flex-col items-center justify-center text-red-400'>Ya estas inscrito en este proyecto y el estado es: {estadoInscripcion} </span>
//             ):(
//                 <div onClick={()=>confirmarInscripcion()} className='flex flex-col items-center justify-center' >
//                     <ButtonLoading
//                                 disabled={estado==='INACTIVO'}
//                                 loading={mutationLoadingInscripcion}
//                                 text='Inscribirme'
//                             /> 
//                 </div>
//                 ) 
//             }           
//         </>
//     );
// };



// export default EditarProyecto;

import React from 'react'

const home= () => {
  return (
    <div>Holas</div>
  )
}

export default home