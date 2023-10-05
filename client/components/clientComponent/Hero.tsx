import React, {useEffect, useState} from 'react'
import heroStyles from '../../styles/Hero.module.css'
import rectImg from '../../public/assets/Intersect.png'
import Image from 'next/image'
import {  Varela } from 'next/font/google'
import { Flipper, Flipped } from 'react-flip-toolkit'

const varela = Varela({ weight: '400',
 subsets: ['latin'] })

const Hero = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Trigger the reveal effect after the component mounts.
    setRevealed(true);
  }, []);
    
  return (
    
    <div className={`min-h-screen   ${heroStyles.hero}  flex  items-center `}>
        
        <div className={`ps-8 mx-auto  opacity-0 -translate-x-12 transition-opacity duration-500 transition-transform ease-linear ${revealed ? 'opacity-100	translate-x-0' : ''}`}>
<h4 className={`${varela.className} text-7xl lg:text-7xl text-white`}> Welcome to Gates</h4>
<p className='text-white my-4'>
    Get the latest news on your favourite mangas, anime and manhwa around the world!
</p>

<div className='bg-white w-3/4 flex lg:w-96 p-2 '>
    <button className='bg-black text-white py-2 px-4'>
        Suscribe
    </button>
    <input className='ps-4 w-3/4' type='text' placeholder='Enter your Email'/>
</div>

            </div>

        
              <Image className={`hidden xl:flex opacity-0 -translate-y-12 transition-opacity duration-500 transition-transform ease-linear ${revealed ? 'opacity-100	translate-y-0' : ''} `} style={{} }src={rectImg} alt=''/>
           

            

           <ul className={`text-slate-50 mr-40 mt-80 capitalize  hidden xl:block `} >
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