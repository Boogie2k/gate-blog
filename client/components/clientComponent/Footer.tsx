import React, {useState} from 'react'
import logo from '../../public/assets/Logo.svg'
import Image from 'next/image'


const Footer = () => {
  return (
   <section className='bg-black pl-10 w-full  py-8 pr-2 '>

    <div className='flex flex-col md:flex-row border-b-2 border-slate-200 '>

        <div className='md:w-2/4'>

       
   <Image  src={logo} width={95} height={86} alt=''/>    

   <p className='text-white sm:w-96 mt-4 mb-20 '>
    Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.
    </p> 
     </div>

     <div className='  md:w-2/4  mb-4 md:mb-0'>
        <div className='bg-white opacity-50   md:w-full  p-2 flex'>
    <button className='bg-black text-white py-2 px-4'>
        Suscribe
    </button>
    <input className='ps-4 ' type='text' placeholder='Enter your Email'/>
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