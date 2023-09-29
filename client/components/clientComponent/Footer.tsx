import React from 'react'
import logo from '../../public/assets/Logo.svg'
import Image from 'next/image'
const Footer = () => {
  return (
   <section className='bg-black pl-10  py-8'>

    <div className='flex border-b-2 border-slate-200'>

        <div className='w-2/4'>

       
   <Image  src={logo} width={95} height={86} alt=''/>    

   <p className='text-white w-96 mt-4 mb-20'>
    Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.
    </p> 
     </div>

     <div className='w-2/4'>
        <div className='bg-white opacity-50 w-96 p-2 '>
    <button className='bg-black text-white py-2 px-4'>
        Suscribe
    </button>
    <input className='ps-4' type='text' placeholder='Enter your Email'/>
</div>
        </div>
    </div>
<p className='text-white opacity-50 mt-4'>
    @copyright 2021 Gates
</p>
   </section>
  )
}

export default Footer