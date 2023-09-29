import React from 'react'
import Login from '../../components/adminLogin'
import { useSession } from "next-auth/react"


const index = () => {
   
   
  return (
    <div className='flex items-center justify-center min-h-screen bg-sky-600'>
        <div className='bg-white w-2/5 px-5 text-center text-white py-5'>
        <Login/></div>
    </div>
  )
}

export default index