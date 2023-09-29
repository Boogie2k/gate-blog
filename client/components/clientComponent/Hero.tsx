import React from 'react'
import heroStyles from '../../styles/Hero.module.css'
import rectImg from '../../public/assets/Intersect.png'
import Image from 'next/image'
import {  Varela } from 'next/font/google'

const varela = Varela({ weight: '400',
 subsets: ['latin'] })

const Hero = () => {
    
  return (
    <div className={`min-h-screen ${heroStyles.hero} flex items-center `}>
        
        <div className=' ps-8 '>
<h4 className={`${varela.className} text-7xl text-white`}> Welcome to Gates</h4>
<p className='text-white my-4'>
    Get the latest news on your favourite mangas, anime and manhwa around the world!
</p>

<div className='bg-white w-96 p-2 '>
    <button className='bg-black text-white py-2 px-4'>
        Suscribe
    </button>
    <input className='ps-4' type='text' placeholder='Enter your Email'/>
</div>

            </div>

            <Image src={rectImg} alt=''/>

           <ul className='text-slate-50 mr-40 mt-80 capitalize'>
<li>
    action
</li>
<li>
   Comedy
</li><li>
   Drama
</li><li>
  Military
</li><li>
    Fantasy
</li>

           </ul>
            
    </div>
  )
}

export default Hero