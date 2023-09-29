'use client'
import React from 'react'
import { useEffect } from 'react'
import jwtDecode from "jwt-decode";

const Home = () => {


  interface DecodedToken {
  userEmail: string;
  // Add other properties if they exist in the token
}
  if(typeof window !== 'undefined'){
      
    useEffect(() => {

const token:string|null= localStorage.getItem("token") ;

if(token){




const admin = jwtDecode(token) as DecodedToken
                if (admin.userEmail !== "jeff") {
            window.location.href = "/admin";
    
                } 
   } 
   return () => {
     const token:string|null= localStorage.getItem("token") 

     if(!token){
  window.location.href = "/";
     }
    }
  
  },[] )
    
  }

 
 
  return (
    <div className='flex-col'>
      
  posts
    </div>
  )
}

export default Home