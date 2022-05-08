import type { NextPage } from 'next'
import useFormData from '../../hook/useFormData'
import Input from '../../components/Input'
import ButtonLoading from '../../components/ButtonLoading'

const Home: NextPage = () => {
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

                    <ButtonLoading
                            disabled={null}
                            loading={null}
                            text='Confirmar'
                    /> 




                </form>
                
          </div>
  )
}

export default Home
