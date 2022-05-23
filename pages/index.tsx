import { useSession, signIn } from "next-auth/react"
import { Loading } from 'react-loading-dot'
import GitHubButton from 'react-github-btn'
import type { NextPageWithAuth } from "pages/_app"

const Explicacion =()=>{
  return(
    <div>
      <div className='mx-5 my-3'> 
        <p>
          La aplicacion es un gestor de proyectos estilo universidad, donde un lider puede crear
          un proyecto para que los estudiantes se puedan inscribir a este, ver sus objetivos,
          realizar avances y observaciones.
          <br /> 
          Existe una gestion de roles (Administrador, lider y estudiante) que limitara lo que cada rol
          puede hacer y/o ver dentro de la aplicacion. 
          <br />
          La autenticacion es realizada por medio the NextAuth.js
          <br />   
        </p>         
        <div className='text-center mt-4'>
          <GitHubButton href="https://github.com/AndresPadillaUcros/GestorProyectosNextJS" >
                      GitHub Repository 
          </GitHubButton>
        </div>
      </div>
    </div>
  )
}

const Usuarios =()=>{

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h5>Para probar esta aplicacion, se pueden usar algunas de las siguientes cuentas:</h5>
      <div className='mt-4'>

        <span className='d-flex flex-column text-center'> Usuarios con rol de ADMINISTRADOR: </span>
        <table className='styled-table my-4'>
          <thead>
            <tr>
              <th>Correo</th>
              <th>Contraseña</th>
              </tr>
          </thead>
            <tbody>
              <tr>
                <td>andres13xx@gmail.com</td>
                <td>Scotyjunior1*</td>
              </tr>
              <tr>
                <td>c-osmic@hotmail.com</td>
                <td>Andrespadilla1*</td>
              </tr>
            </tbody>
        </table>

        <span className='d-flex flex-column text-center'> Usuarios con rol de LIDER: </span>
        <table className='styled-table my-4'>
          <thead>
            <tr>
              <th>Correo</th>
              <th>Contraseña</th>
              </tr>
          </thead>
            <tbody>
              <tr>
                <td>federico@hotmail.com</td>
                <td>Contraseña1*</td>
              </tr>
              <tr>
                <td>c-osmic@hotmail.com</td>
                <td>Andrespadilla1*</td>
              </tr>
            </tbody>
        </table>

        <span className='d-flex flex-column text-center'> Usuarios con rol de ESTUDIANTE: </span>
        <table className='styled-table my-4'>
          <thead>
            <tr>
              <th>Correo</th>
              <th>Contraseña</th>
              </tr>
          </thead>
            <tbody>
              <tr>
                <td>andres13xx@gmail.com</td>
                <td>Scotyjunior1*</td>
              </tr>
              <tr>
                <td>c-osmic@hotmail.com</td>
                <td>Andrespadilla1*</td>
              </tr>
            </tbody>
        </table>

      </div>

    </div>
  )



}


const Home= () => {

  const { data: session, status } = useSession()



  if(status==='loading') return <div>  <Loading background="blue" /> </div>



  if (status === "unauthenticated") {
    return (
      <div>
        <h3 className="text-center mt-5">Sorry,you do not have acesss, please sign in </h3>
        <Explicacion/>
        <Usuarios />

      </div>

    )
  } 


  if (status === "authenticated") {
    return (
      <div>
        <h3 className="text-center mt-5">Enjoy the application! </h3>
        <Explicacion />
      </div>
    )
    
  } 

}

export default Home


Home.auth=false