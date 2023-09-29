import React from 'react'
import {  Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image'
const queryClient = new QueryClient()
const poppins = Poppins({ weight: '400',
 subsets: ['latin'] })

const Blog = () => {
  return (
   <QueryClientProvider client={queryClient}>
      <BlogFunction/>
      </QueryClientProvider>
  )
}


const BlogFunction = () => {
  let x:any;
const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:4000/api/blog/').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error


 const maap= data && data.map((item:any)=>{
  
  
 if(item.genre ==='fantasy'){
return item
  }
  
  })

 
console.log(maap)
maap.map((item:any)=>{item && console.log(item.body); x=item})

console.log(x);



 const mongoDBTimestamp:any = new Date( x && x.updatedAt);
const currentTime:any = new Date();
let elapsedTime;
let elapsedTimeType;


const elapsedTimeInMilliseconds = currentTime - mongoDBTimestamp;

const elapsedSeconds = Math.floor(elapsedTimeInMilliseconds / 1000);
const elapsedMinutes = Math.floor(elapsedSeconds / 60);
const elapsedHours = Math.floor(elapsedMinutes / 60);
const elapsedDays = Math.floor(elapsedHours / 24);
const elapsedWeek = Math.floor(elapsedDays / 7);
const elapsedMonth = Math.floor(elapsedWeek / 4);
const elapsedYear = Math.floor(elapsedMonth / 12);




if(elapsedSeconds<60){
  elapsedTime= elapsedSeconds
  elapsedTimeType ='Seconds'
}else if(elapsedMinutes<60){
  elapsedTime=elapsedMinutes
   elapsedTimeType ='Minutes'
}else if(elapsedHours<25){
  elapsedTime=elapsedHours
   elapsedTimeType ='Hours'
}
else if(elapsedDays<8){
  elapsedTime= elapsedDays
   elapsedTimeType ='Day'
}
else if(elapsedWeek<5){
  elapsedTime= elapsedWeek
   elapsedTimeType ='week'
}

else if(elapsedMonth<13){
  elapsedTime= elapsedMonth
   elapsedTimeType ='Month'
}

else if(elapsedYear>=1){
  elapsedTime= elapsedYear
   elapsedTimeType ='Year'
}

  return (
    <div className='pt-10 pl-10 pr-12   pb-8'>
      <h4 className='text-2xl font-semibold  '> Blog </h4>
<div>
      <ul className='flex mt-10 justify-between w-1/2 font-semibold '>
        <li className='pb-4'>comedy</li>
        <li className='pb-4'>comedy</li>
        <li  className='pb-4'>comedy</li>
        <li  className='pb-4'>comedy</li>
        <li  className='pb-4'>comedy</li>
        <li  className='pb-4'>comedy</li>
      </ul></div>

<article className='flex justify-between' >
<div className=' flex border-2  border-slate-300 p-4'>
  <div>

    <div className='mb-4 mr-8'>
  <Image width={380} height={290} src={x.images} alt=''/>
  </div>
<p className='' style={{color:'#6E6E6E'}}>
{elapsedTime +' ' +elapsedTimeType + ' ' + 'ago'}
  </p>

<p className='my-8'>{x.title}</p>

<p style={{color:'#6E6E6E'}} className='w-80 mb-14'>{x.body}</p>

<h4>Load more</h4>

</div>

<div className=' flex flex-col justify-between'>
   {maap.map((item:any)=>{
   
          return(item&&  
            
            <div className='flex'>
               <Image className='mr-8' width={144} height={100} src={item.images} alt=''/>
               <div>
<h4 className='w-32'>{item.title}</h4>


                </div>
            </div>
            
            )
        })}
</div>
  </div>

<div className='border-2  border-slate-300 pl-8 py-4 flex flex-col justify-between'>
  <h4>Manga Reads</h4>
         {maap.map((item:any)=>{
   
          return(item&&  
            
            <div className='flex pr-24'>
               <Image className='mr-4' width={144} height={100} src={item.images} alt=''/>
               <div>
<h4 className='w-32'>{item.title}</h4>


                </div>
            </div>
            
            )
        })}
</div>
        </article>
    </div>
  )
}


export default Blog