import nextAuth from 'next-auth'
import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react"
export default function Home() {
  const { data } = useSession();
  console.log('dataaa', data)
  return (
    <>

      <div className='bg-slate-500'>
        {
          data?.user ? (<button onClick={() => signOut()}>sign out</button>
          ) :
            (<button onClick={() => signIn("google")}>sign in</button>

            )
        }
        {
          data?.user?.name
        }
      </div>
    </>
  )
}
