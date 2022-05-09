import type { NextPage } from 'next'
import useFormData from '../../hook/useFormData'
import Input from '../../components/Input'
import ButtonLoading from '../../components/ButtonLoading'
import DropDown from '../../components/Dropdown'
import { useQuery, useMutation } from '@apollo/client';

import { GET_USUARIOS } from '../../graphql/usuarios/queries';

const Home: NextPage = () => {

    const {data,loading}=useQuery(GET_USUARIOS);

    if (loading) return <div> Cargando usuarios...</div>


    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
                <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Perfil</h1>
                <form
                    ref={null} 
                    className='flex flex-col items-center justify-center'
                >
                    <Input
                        label='Nombre:'
                        type='text'
                        name='nombre'
                        defaultValue={null}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Apellido:'
                        type='text'
                        name='apellido'
                        defaultValue={null}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Identificacion:'
                        type='text'
                        name='identificacion'
                        defaultValue={null}
                        required={true}
                        disabled={false}
                    />
                    <Input
                        label='Correo:'
                        type='email'
                        name='correo'
                        defaultValue={null}
                        required={true}
                        disabled={false}
                    />
{/*                     <DropDown
                        label='Rol:'
                        type='text'
                        name='correo'
                        defaultValue={null}
                        required={true}
                        disabled={false}
                    />
                    <DropDown
                        label='Estado:'
                        name='estado'
                        defaultValue={queryDataProyecto.Proyecto.estado}
                        required={true}
                        options={Enum_EstadoProyecto}
                        disabled={true}
                    />

                    <ButtonLoading
                        label='Estado del proyecto:'
                        name='estado'
                        defaultValue={queryDataProyecto.Proyecto.estado}
                        required={true}
                        options={Enum_EstadoProyecto}
                        disabled={true}
                    />  */}




                </form>
                
          </div>
    )
}

export default Home
