import { useSession, signIn, signOut } from "next-auth/react"


const ButtonAuth=()=>{

    const { data: session } = useSession()
    
    if (session) {
      return (
        <div className="text-center">
          You are signed with <br/>  {session.user.email}
          <br />
          <button onClick={() => signOut( {callbackUrl: "/" })}  className="Sign">Sign out</button>
        </div>
      )
    }
    return (
      <div className="text-center">
        You are not signed in 
        <br />
        <button onClick={() => signIn('auth0',{callbackUrl: "/" })}  className="Sign">Sign in</button>
      </div>
    )
}


export default ButtonAuth