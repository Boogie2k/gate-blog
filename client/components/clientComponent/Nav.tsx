import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/Logo.svg'
import navStyles from '@/styles/Nav.module.css'

const Nav = ({isMenu, setIsMenu, user}:any) => {
const [revealed, setRevealed] = useState(true);

   const [dispUser, setDispUser] = useState("")

  
  useEffect(() => {
    
  if(user){
    setDispUser(user.userName)
   
  }
   
  }, [user])

  

  const dispMenu=()=>{
setIsMenu(true)
setRevealed(true)
setTimeout(() => {
 
    setRevealed(false)
  
 }, 500);
  
  }




  const closeMenu=()=>{
setIsMenu(false)
 setRevealed(false)
setTimeout(() => {
 
    setRevealed(true)
  
 }, 500)

  }

  useEffect(() => {
    
  window.addEventListener('resize', closeMenu)
   
  }, [closeMenu])

   
  
  
    
user&&  console.log(user.userName)

  return (
    <nav className='flex flex-col px-8 py-4 items-center fixed   bg-white w-full z-10'>
<div className='flex justify-between items-center w-full'>
<svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29032 17.6213V17.0697H8.78387V21.2375C8.78387 22.1364 8.51419 22.7983 7.97484 23.2233C7.43548 23.6564 6.70817 23.8729 5.7929 23.8729C5.25355 23.8729 4.73462 23.734 4.23613 23.4562C3.74581 23.1865 3.50065 22.8147 3.50065 22.3407C3.50065 22.2508 3.52925 22.12 3.58645 21.9484L4.00323 20.8697C3.28409 20.551 2.70387 20.0116 2.26258 19.2516C1.82946 18.4916 1.6129 17.6377 1.6129 16.6897C1.6129 15.3985 1.98065 14.328 2.71613 13.4781C3.45978 12.6282 4.48946 12.2033 5.80516 12.2033C6.4671 12.2033 7.10452 12.334 7.71742 12.5955C8.33032 12.857 8.63677 13.1676 8.63677 13.5271C8.63677 13.6661 8.59183 13.8254 8.50194 14.0052L7.81548 15.1329L7.37419 14.9858L7.43548 14.5323C7.46817 14.3362 7.48452 14.1482 7.48452 13.9684C7.48452 13.6497 7.32925 13.3719 7.01871 13.1349C6.70817 12.8979 6.30366 12.7794 5.80516 12.7794C5.05333 12.7794 4.48129 13.1471 4.08903 13.8826C3.70495 14.6099 3.5129 15.5252 3.5129 16.6284C3.5129 17.7235 3.72129 18.6183 4.13806 19.3129C4.56301 19.9994 5.18 20.3426 5.98903 20.3426C6.31591 20.3426 6.63462 20.2772 6.94516 20.1465V17.6213H5.29032ZM5.35161 21.1516C5.06559 21.1516 4.79183 21.1149 4.53032 21.0413V21.4213C4.53032 22.3529 4.72645 22.9291 5.11871 23.1497C5.29849 23.2478 5.54366 23.2968 5.85419 23.2968C6.1729 23.2968 6.43441 23.1824 6.63871 22.9536C6.84301 22.7329 6.94516 22.3979 6.94516 21.9484V20.8329C6.45484 21.0454 5.92366 21.1516 5.35161 21.1516Z" fill="#313131"/>
<path d="M20.233 4.90968V4.41935H23.1504L25.5898 12.5097H26.2027V13H23.0401V12.5097H23.7511L23.2975 11.0019H19.9633L19.522 12.5097H20.233V13H18.1614V12.5097H18.7743L21.0665 4.90968H20.233ZM21.6182 5.43677L20.1349 10.4503H23.1259L21.6182 5.43677Z" fill="#313131"/>
<path d="M39.5517 13.4904H39.4291V21.0904H40.6549V21.5807H36.3646V21.0904H37.5904V13.4904H37.4678C36.9284 13.4904 36.5566 13.5435 36.3523 13.6497C36.1562 13.756 36.0213 13.9929 35.9478 14.3607L35.7026 15.5742H35.2246L34.8936 13.5149C34.8936 13.3514 34.9304 13.2329 35.0039 13.1594C35.0775 13.0777 35.1551 13.0327 35.2368 13.0246C35.3267 13.0082 35.4615 13 35.6413 13H41.3781C41.5579 13 41.6886 13.0082 41.7704 13.0246C41.8603 13.0327 41.942 13.0777 42.0155 13.1594C42.0891 13.2329 42.1258 13.3514 42.1258 13.5149L41.7949 15.5742H41.3168L41.0717 14.3607C40.9981 13.9929 40.8592 13.756 40.6549 13.6497C40.4587 13.5435 40.091 13.4904 39.5517 13.4904Z" fill="#313131"/>
<path d="M20.233 33.8387H14.7292V33.3484H15.4646V25.7484H14.7292V25.2581H19.9879C20.1677 25.2581 20.2984 25.2663 20.3801 25.2826C20.47 25.2908 20.5517 25.3357 20.6253 25.4175C20.6988 25.491 20.7356 25.6095 20.7356 25.7729L20.4046 27.8323H19.9266L19.6814 26.6187C19.6079 26.251 19.4689 26.014 19.2646 25.9078C19.0685 25.8015 18.7008 25.7484 18.1614 25.7484H17.3034V29.9407H20.1227V30.4923H17.3034V33.3484H18.4066C18.9378 33.3484 19.3014 33.2953 19.4975 33.1891C19.7018 33.0828 19.8449 32.8458 19.9266 32.4781L20.1717 31.3871H20.6498L20.9808 33.3239C20.9808 33.4873 20.944 33.6099 20.8704 33.6916C20.7969 33.7652 20.7152 33.8101 20.6253 33.8265C20.5436 33.8347 20.4128 33.8387 20.233 33.8387Z" fill="#313131"/>
<path d="M25.3814 32.2575C25.3814 32.5762 25.5366 32.854 25.8472 33.091C26.1577 33.328 26.5581 33.4465 27.0485 33.4465C27.5388 33.4465 27.927 33.328 28.213 33.091C28.499 32.854 28.642 32.5394 28.642 32.1471C28.642 31.6486 28.3437 31.2359 27.7472 30.9091L25.933 29.9407C24.887 29.3768 24.3639 28.5719 24.3639 27.5258C24.3639 26.8557 24.6091 26.2796 25.0994 25.7975C25.5897 25.3153 26.3211 25.0742 27.2936 25.0742C27.9474 25.0742 28.5685 25.205 29.1568 25.4665C29.7452 25.728 30.0394 26.0385 30.0394 26.3981C30.0394 26.537 29.9945 26.6964 29.9046 26.8762L29.3162 28.0039L28.8872 27.8691V26.8394C28.8872 26.4716 28.7237 26.1815 28.3968 25.9691C28.0781 25.7566 27.694 25.6504 27.2446 25.6504C26.8033 25.6504 26.4642 25.7811 26.2272 26.0426C25.9902 26.3041 25.8717 26.6024 25.8717 26.9375C25.8717 27.6076 26.174 28.102 26.7788 28.4207L28.3356 29.242C29.5205 29.863 30.113 30.6803 30.113 31.6936C30.113 32.4618 29.8229 33.042 29.2427 33.4342C28.6706 33.8265 27.9433 34.0226 27.0607 34.0226C26.3988 34.0226 25.7614 33.8919 25.1485 33.6304C24.5356 33.3689 24.2291 33.0583 24.2291 32.6987C24.2291 32.5598 24.274 32.4005 24.3639 32.2207L24.9523 31.0929L25.3814 31.2278V32.2575Z" fill="#313131"/>
<path d="M1.3064 3.37097L17.6204 17.3953C18.2134 17.9051 18.1839 18.8324 17.5595 19.3034L1.3064 31.5645" stroke="black" stroke-width="1.83871"/>
<path d="M43.5967 3.06445L27.2827 17.0887C26.6896 17.5986 26.7192 18.5259 27.3436 18.9969L43.5967 31.258" stroke="black" stroke-width="1.83871"/>
</svg>


    <ul className={`hidden md:flex items-center ` }>
        <li onClick={()=>{window.location.href='/'}}  className= 'hover:bg-slate-500 hover:text-white px-3 cursor-pointer p-2 '>Home </li>
         <li className='px-3'>Connect </li>
   <li onClick={()=>{window.location.href='/register'}} className={`px-3 bg-black text-white p-2 cursor-pointer hover:bg-slate-500 hover:text-white ${user?`${navStyles.hide}`: `${navStyles.show}` } `}>Sign up </li>
   <li onClick={()=>{window.location.href='/login'}} className={`px-3 cursor-pointer p-2 hover:bg-slate-500 hover:text-white   ${user?`${navStyles.hide}`: `${navStyles.show}` } `}> Login </li>
  <li className={`px-3   ${user?`${navStyles.show}`: `${navStyles.hide}` }  `}>Welcome {dispUser}</li>
  
       </ul>   
     


<div className='md:hidden'>
<svg onClick={dispMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={` bi bi-list md:hidden cursor-pointer  ${isMenu? 'hidden':'flex'}  ${revealed ? '' : 'animate-spin transition-all duration-200 ease-linear rotate-180'} `} viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
<svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={` bi bi-x-lg md:hidden cursor-pointer   ${isMenu? 'flex':'hidden'}   ${revealed ? 'animate-spin ease-linear transition-all duration-200 rotate-180' : ''}`} viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
</div>
</div>
<ul className={`   w-full   ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`}` }>
 <li className= {`  px-3  hover:bg-slate-500 hover:text-white text-center p-2 ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`} ${user?'block':'hidden'}`  } >Welcome {dispUser}</li>
        <li  onClick={()=>{window.location.href='/'}} className={`  px-3  hover:bg-slate-500 hover:text-white text-center p-2 ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`}`  }>Home </li>
         <li className={`  px-3  hover:bg-slate-500 hover:text-white text-center p-2 ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`}`  }>Connect </li>
    <li  onClick={()=>{window.location.href='/register'}} className={`  px-3  hover:bg-slate-500 hover:text-white text-center p-2 ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`}  ${user?'hidden':'block'}`  }>Sign up </li>
         <li  onClick={()=>{window.location.href='/login'}} className={`  px-3  hover:bg-slate-500 hover:text-white text-center p-2 ${isMenu ? `${navStyles.dropdownVisible}` :  `${navStyles.transitionHeight}`} ${user?'hidden':'block'}`  }>Login </li>
</ul>
    </nav>
  )
}

export default Nav