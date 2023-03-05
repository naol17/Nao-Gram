import nextAuth from 'next-auth'
import Head from 'next/head'
import {signIn,useSession}from "next-auth/react"
export default function Home() {
  const {data}= useSession();
  console.log('dataaa', data)
  return (
    <>
     
      <div className='bg-slate-500'>     
      
      <button onClick={()=>signIn("google")}>sign in</button>
       </div>
    </>
  )
}
