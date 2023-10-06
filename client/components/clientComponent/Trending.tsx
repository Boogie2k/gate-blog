import Image from 'next/image'
import React, {useState} from 'react'
import {  Poppins } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Link from 'next/link'
import trendingStyles from '@/styles/Trending.module.css'

const queryClient = new QueryClient()
const poppins = Poppins({ weight: '400',
 subsets: ['latin'] })


const Trending = () => {
  const [newTrend, setNewTrend] = useState()

  fetch('https://gate-http.onrender.com/api/blog/')
  return (
    <div>
        <QueryClientProvider client={queryClient}>
      <TrendingFunction/>
      </QueryClientProvider>
    </div>
  )
}

const SkeletonLoading =()=>{
  return(
<div role="status" className="w-full px-10 animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>

    

      <div className='flex flex-col lg:flex-row lg:justify-between  w-full'>
    <div className=" h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"></div>
    <div className="h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"></div>
<div className="h-18 lg:h-36 bg-gray-200  dark:bg-gray-700 w-1/4 mb-2.5"> </div>
    </div>
      
  
    
    <span className="sr-only">Loading...</span>
</div>

  )
}


const TrendingFunction =()=>{
 const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:4000/api/blog/').then(res =>
      res.json()
      
    )
  )

  if (isLoading) return <SkeletonLoading/>

  if (error) return 'An error has occurred: ' + error


 const maap= data && data.map((item:any)=>{
  
  if(item.tags.includes('trending')){
return item
  }
  })

 
console.log(maap)
maap.map((item:any)=>{item && console.log(item.body)})
/*  const filt = data.items && data.items.filter((item:any) => item.genre === "fantasy")


console.log(filt)
 */

return(<>
<div className={`${poppins.className} pt-10 px-10`}>
  
  <h4 className='font-semibold text-xl mb-2'>Now Trending</h4>

<div className={`  flex flex-col lg:flex-row   px-0`}>
{maap.map((item:any)=>{  
  const mongoDBTimestamp:any = new Date( item && item.updatedAt);
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


  return(
  <div className=''>
 {item&& 
 <div className='flex flex-col min-h-full 80 mr-28 '><Image className='h-64 ' width={329} height={254} src={item.images} alt=''/>
  <div className={ ` ${poppins.className} `}>
   <div className='flex justify-between mt-2'> <p className='mb-2 capitalize text-gray-800'>{item.genre}</p> <p className='text-gray-800'>{elapsedTime + ' ' + elapsedTimeType + ' '+ 'ago' }</p> </div>

    <h4 className='text-black text-lg font-bold capitalize'>{item.title} </h4>
    <p className=' text-gray-800 mt-2 mb-4' >{item.body}</p>
    <div className='flex justify-between'><p>{item.read} Read</p> <Link href ={`/article/${item._id}`}>  <p className='font-bold'>Read Full</p></Link></div>
  </div>

  </div>
 }
    </div>
)})}
  </div>
</div>
</>)

}

export default Trending