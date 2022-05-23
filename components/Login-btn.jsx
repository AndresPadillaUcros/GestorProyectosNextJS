import { useSession, signIn, signOut } from "next-auth/react"


const ButtonAuth=()=>{

    const { data: session } = useSession()
    
    if (session) {
      return (
        <div className="text-center">
          You are signed with <br/>  {session.user.email}
          <br />
          <button onClick={() => signOut({ callbackUrl: 'https://gestor-proyectos.vercel.app/perfil' })}  className="Sign">Sign out</button>
        </div>
      )
    }
    return (
      <div className="text-center">
        You are not signed in 
        <br />
        <button onClick={() => signIn('auth0',{ callbackUrl: 'https://gestor-proyectos.vercel.app/' })}  className="Sign">Sign in</button>
      </div>
    )
}


export default ButtonAuth