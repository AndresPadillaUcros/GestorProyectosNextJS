import { useSession, signIn, signOut } from "next-auth/react"


const ButtonAuth=()=>{

    const { data: session } = useSession()
    
    if (session) {
      return (
        <div className="text-center">
          You are signed in as {session.user.email}
          <br />
          <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}  className="Sign">Sign out</button>
        </div>
      )
    }
    return (
      <div className="text-center">
        You are not signed in 
        <br />
        <button onClick={() => signIn('auth0',{ callbackUrl: 'http://localhost:3000/' })}  className="Sign">Sign in</button>
      </div>
    )
}


export default ButtonAuth